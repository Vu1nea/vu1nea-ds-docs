<script lang="ts">
	import CodeBlock from '$lib/docs/CodeBlock.svelte';
	import { entries, grouped } from '$lib/docs/registry.js';

	const tokens = [
		{ name: 'Primary', css: '--primary', value: '#7f37ff', swatch: 'bg-primary' },
		{ name: 'Orange', css: '--orange', value: '#cc4802', swatch: 'bg-orange' },
		{ name: 'Blue', css: '--blue', value: '#2166d4', swatch: 'bg-blue' },
		{ name: 'Card', css: '--card', value: '#272727', swatch: 'bg-card' },
		{ name: 'Background', css: '--background', value: '#121212', swatch: 'bg-background border border-card' },
		{ name: 'Destructive', css: '--destructive', value: '#ff2646', swatch: 'bg-destructive' }
	];

	const usage = `<script lang="ts">
  import { Button } from '$lib/components/ui/button/index.js';
<\/script>

<Button color="purple" rounded>Get started</Button>`;
</script>

<svelte:head><title>Introduction · Guinea Design Docs</title></svelte:head>

<article class="mx-auto flex max-w-3xl flex-col gap-12">
	<header class="flex flex-col gap-3">
		<p class="text-xs leading-4 font-medium tracking-wide text-(--purple-300) uppercase">Documentation</p>
		<h1 class="text-[32px] leading-9 font-bold">Guinea Design</h1>
		<p class="text-base leading-6 text-(--grey-300)">
			A dark-first component library for SvelteKit, built on bits-ui and Tailwind. {entries.length} components, each with live examples, copyable code and a props reference.
		</p>
	</header>

	<section class="flex flex-col gap-3">
		<h2 class="text-xl leading-7 font-bold">Usage</h2>
		<p class="text-sm leading-5 text-(--grey-300)">Every component lives in <code class="bg-card rounded px-1.5 py-0.5 font-mono text-[13px]">src/lib/components/ui</code>. Import it, use it.</p>
		<CodeBlock code={usage} />
	</section>

	<section class="flex flex-col gap-3">
		<h2 class="text-xl leading-7 font-bold">Tokens</h2>
		<p class="text-sm leading-5 text-(--grey-300)">Color, radius and type come from CSS variables in <code class="bg-card rounded px-1.5 py-0.5 font-mono text-[13px]">routes/layout.css</code>. Change a token and every component follows.</p>
		<ul class="grid grid-cols-2 gap-3 sm:grid-cols-3">
			{#each tokens as t}
				<li class="border-card flex items-center gap-3 rounded-lg border p-3">
					<span class="size-10 shrink-0 rounded-md {t.swatch}" aria-hidden="true"></span>
					<span class="flex min-w-0 flex-col">
						<span class="text-sm leading-5 font-medium">{t.name}</span>
						<span class="truncate font-mono text-xs leading-4 text-(--grey-400)">{t.css} · {t.value}</span>
					</span>
				</li>
			{/each}
		</ul>
	</section>

	<section class="flex flex-col gap-6">
		<h2 class="text-xl leading-7 font-bold">Components</h2>
		{#each grouped as g}
			<div class="flex flex-col gap-3">
				<h3 class="text-xs leading-4 font-medium tracking-wide text-(--grey-400) uppercase">{g.group}</h3>
				<ul class="grid gap-3 sm:grid-cols-2">
					{#each g.items as item}
						<li>
							<a
								href="/{item.slug}"
								class="border-card hover:border-(--purple-400) hover:bg-card/50 focus-visible:ring-ring/50 flex h-full flex-col gap-1 rounded-lg border p-4 transition-colors outline-none focus-visible:ring-3"
							>
								<span class="text-base leading-6 font-bold">{item.title}</span>
								<span class="text-sm leading-5 text-(--grey-300)">{item.description.replace(/`/g, '')}</span>
							</a>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</section>
</article>
