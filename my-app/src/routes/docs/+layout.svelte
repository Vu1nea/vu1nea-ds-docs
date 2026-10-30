<script lang="ts">
	import { page } from '$app/state';
	import { goto, afterNavigate } from '$app/navigation';
	import { cn } from '$lib/utils.js';
	import { entries, grouped } from '$lib/docs/registry.js';

	let { children } = $props();

	let query = $state('');
	let searchEl = $state<HTMLInputElement | null>(null);
	let navOpen = $state(false);
	let focused = $state(false);

	const results = $derived(
		query.trim()
			? entries.filter((e) => (e.title + ' ' + e.description + ' ' + e.group).toLowerCase().includes(query.trim().toLowerCase())).slice(0, 8)
			: []
	);

	afterNavigate(() => {
		navOpen = false;
		query = '';
	});

	function onWindowKey(e: KeyboardEvent) {
		const typing = (e.target as HTMLElement | null)?.closest('input, textarea, [contenteditable]');
		if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !typing)) {
			e.preventDefault();
			searchEl?.focus();
		}
	}

	function onSearchKey(e: KeyboardEvent) {
		if (e.key === 'Enter' && results[0]) goto(`/docs/${results[0].slug}`);
		if (e.key === 'Escape') {
			query = '';
			searchEl?.blur();
		}
	}

	const isActive = (slug: string) => page.url.pathname === `/docs/${slug}`;
</script>

<svelte:window onkeydown={onWindowKey} />
<svelte:head><title>Guinea Design Docs</title></svelte:head>

<a href="#main" class="bg-primary text-foreground sr-only z-50 rounded-md px-4 py-2 focus:not-sr-only focus:fixed focus:top-2 focus:left-2">Skip to content</a>

<header class="border-card bg-background/90 sticky top-0 z-30 flex h-16 items-center gap-4 border-b px-4 backdrop-blur md:px-6">
	<button
		type="button"
		class="text-foreground hover:bg-(--grey-800) focus-visible:ring-ring/50 -ml-2 grid size-10 place-items-center rounded-md outline-none focus-visible:ring-3 lg:hidden"
		aria-label={navOpen ? 'Close navigation' : 'Open navigation'}
		aria-expanded={navOpen}
		aria-controls="docs-nav"
		onclick={() => (navOpen = !navOpen)}
	>
		<svg viewBox="0 0 24 24" fill="currentColor" class="size-6" aria-hidden="true">
			<path d={navOpen ? 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' : 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'} />
		</svg>
	</button>

	<a href="/docs" class="focus-visible:ring-ring/50 flex items-center gap-2 rounded-md text-lg leading-6 font-bold outline-none focus-visible:ring-3">
		<span class="bg-primary grid size-7 place-items-center rounded-md text-sm" aria-hidden="true">G</span>
		Guinea Design
		<span class="text-xs font-medium text-(--grey-400)">Docs</span>
	</a>

	<div class="relative mx-auto w-full max-w-md">
		<label for="docs-search" class="sr-only">Search components</label>
		<input
			id="docs-search"
			bind:this={searchEl}
			bind:value={query}
			onkeydown={onSearchKey}
			onfocus={() => (focused = true)}
			onblur={() => setTimeout(() => (focused = false), 120)}
			type="search"
			autocomplete="off"
			placeholder="Search components"
			class="bg-card/60 hover:bg-card focus-visible:bg-card h-10 w-full rounded-lg border border-transparent px-3 pr-14 text-sm leading-5 transition-colors outline-none placeholder:text-(--grey-400) focus-visible:border-(--purple-400)"
		/>
		<kbd class="pointer-events-none absolute top-1/2 right-3 hidden -translate-y-1/2 rounded border border-(--grey-600) px-1.5 py-0.5 font-sans text-[11px] leading-4 text-(--grey-400) sm:block">Ctrl K</kbd>
		{#if focused && query.trim()}
			<ul class="bg-card absolute top-12 left-0 z-40 w-full overflow-hidden rounded-lg py-1 shadow-lg">
				{#each results as r}
					<li>
						<a href="/docs/{r.slug}" class="hover:bg-(--grey-700) flex items-baseline justify-between gap-4 px-3 py-2 text-sm leading-5">
							<span class="font-medium">{r.title}</span>
							<span class="text-xs text-(--grey-400)">{r.group}</span>
						</a>
					</li>
				{:else}
					<li class="px-3 py-2 text-sm text-(--grey-400)">No results for "{query}"</li>
				{/each}
			</ul>
		{/if}
	</div>

	<a href="/" class="text-(--grey-300) hover:text-foreground hidden shrink-0 rounded-md text-sm leading-5 outline-none focus-visible:underline sm:block">Playground</a>
</header>

<div class="mx-auto flex max-w-[90rem]">
	<nav
		id="docs-nav"
		aria-label="Components"
		class={cn(
			'border-card bg-background fixed top-16 bottom-0 left-0 z-20 w-72 overflow-y-auto border-r px-4 py-6 transition-transform duration-200 motion-reduce:transition-none lg:sticky lg:h-[calc(100vh-4rem)] lg:translate-x-0',
			navOpen ? 'translate-x-0' : '-translate-x-full'
		)}
	>
		<a
			href="/docs"
			aria-current={page.url.pathname === '/docs' ? 'page' : undefined}
			class="hover:bg-(--grey-800)/50 aria-[current=page]:bg-card focus-visible:ring-ring/50 mb-6 block rounded-md px-3 py-2 text-sm leading-5 font-medium outline-none focus-visible:ring-3"
		>
			Introduction
		</a>
		{#each grouped as g}
			<div class="mb-6">
				<h2 class="mb-1 px-3 text-xs leading-4 font-medium tracking-wide text-(--grey-400) uppercase">{g.group}</h2>
				<ul class="flex flex-col gap-0.5">
					{#each g.items as item}
						<li>
							<a
								href="/docs/{item.slug}"
								aria-current={isActive(item.slug) ? 'page' : undefined}
								class="hover:bg-(--grey-800)/50 aria-[current=page]:bg-card aria-[current=page]:text-(--purple-300) focus-visible:ring-ring/50 block rounded-md px-3 py-1.5 text-sm leading-5 text-(--grey-200) outline-none focus-visible:ring-3 aria-[current=page]:font-medium"
							>
								{item.title}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</nav>

	{#if navOpen}
		<button type="button" aria-label="Close navigation" class="fixed inset-0 top-16 z-10 bg-black/50 lg:hidden" onclick={() => (navOpen = false)}></button>
	{/if}

	<main id="main" class="min-w-0 flex-1 px-4 py-10 md:px-10">
		{@render children()}
	</main>
</div>
