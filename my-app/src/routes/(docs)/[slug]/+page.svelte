<script lang="ts">
	import type { Component } from 'svelte';
	import { tick } from 'svelte';
	import CodeBlock from '$lib/docs/CodeBlock.svelte';
	import PropsTable from '$lib/docs/PropsTable.svelte';
	import { bySlug, ordered } from '$lib/docs/registry.js';

	let { data } = $props();

	const demos = import.meta.glob<{ default: Component }>('/src/lib/docs/demos/*.svelte', { eager: true });

	const entry = $derived(bySlug(data.slug)!);
	const Demo = $derived(demos[`/src/lib/docs/demos/${data.slug}.svelte`]?.default);
	const index = $derived(ordered.findIndex((e) => e.slug === data.slug));
	const prev = $derived(ordered[index - 1]);
	const next = $derived(ordered[index + 1]);

	let article = $state<HTMLElement | null>(null);
	let toc = $state<{ id: string; text: string }[]>([]);
	let activeId = $state('');

	$effect(() => {
		data.slug;
		tick().then(() => {
			if (!article) return;
			const heads = [...article.querySelectorAll<HTMLElement>('h2[id]')];
			toc = heads.map((h) => ({ id: h.id, text: h.textContent?.trim() ?? '' }));
			activeId = toc[0]?.id ?? '';
			const io = new IntersectionObserver(
				(items) => {
					const top = items.filter((i) => i.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
					if (top) activeId = top.target.id;
				},
				{ rootMargin: '-80px 0px -70% 0px' }
			);
			heads.forEach((h) => io.observe(h));
			return () => io.disconnect();
		});
	});
</script>

<svelte:head><title>{entry.title} · Guinea Design Docs</title></svelte:head>

<div class="mx-auto flex max-w-5xl gap-10">
	<article bind:this={article} class="flex min-w-0 flex-1 flex-col gap-10">
		<header class="flex flex-col gap-3">
			<p class="text-xs leading-4 font-medium tracking-wide text-(--purple-300) uppercase">{entry.group}</p>
			<h1 class="text-[32px] leading-9 font-bold">{entry.title}</h1>
			<p class="text-base leading-6 text-(--grey-300)">
				{#each entry.description.split('`') as part, i}{#if i % 2}<code class="bg-card rounded px-1.5 py-0.5 font-mono text-[13px] text-foreground">{part}</code>{:else}{part}{/if}{/each}
			</p>
			<CodeBlock code={entry.importLine} />
		</header>

		{#if Demo}
			<Demo />
		{/if}

		<section class="flex flex-col gap-4">
			<h2 id="props" class="scroll-mt-24 text-xl leading-7 font-bold"><a href="#props" class="hover:text-(--purple-300) rounded-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50">Props</a></h2>
			<PropsTable tables={entry.tables} />
		</section>

		<nav aria-label="Pagination" class="border-card mt-4 grid grid-cols-2 gap-4 border-t pt-6">
			{#if prev}
				<a href="/{prev.slug}" class="border-card hover:border-(--purple-400) flex flex-col gap-1 rounded-lg border p-4 transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50">
					<span class="text-xs leading-4 text-(--grey-400)">Previous</span>
					<span class="text-sm leading-5 font-bold">{prev.title}</span>
				</a>
			{:else}<span></span>{/if}
			{#if next}
				<a href="/{next.slug}" class="border-card hover:border-(--purple-400) flex flex-col gap-1 rounded-lg border p-4 text-right transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50">
					<span class="text-xs leading-4 text-(--grey-400)">Next</span>
					<span class="text-sm leading-5 font-bold">{next.title}</span>
				</a>
			{/if}
		</nav>
	</article>

	{#if toc.length > 1}
		<aside class="sticky top-24 hidden h-fit w-48 shrink-0 xl:block" aria-label="On this page">
			<p class="mb-3 text-xs leading-4 font-medium tracking-wide text-(--grey-400) uppercase">On this page</p>
			<ul class="border-card flex flex-col border-l">
				{#each toc as t}
					<li>
						<a
							href="#{t.id}"
							aria-current={activeId === t.id ? 'location' : undefined}
							class="-ml-px block border-l border-transparent py-1 pl-3 text-sm leading-5 text-(--grey-400) transition-colors hover:text-foreground aria-[current=location]:border-(--purple-400) aria-[current=location]:text-foreground"
						>
							{t.text}
						</a>
					</li>
				{/each}
			</ul>
		</aside>
	{/if}
</div>
