<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils.js';
	import CodeBlock from './CodeBlock.svelte';

	let {
		title,
		description,
		code,
		children,
		class: className
	}: {
		title: string;
		description?: string;
		code: string;
		children: Snippet;
		/** Classes for the preview area. */
		class?: string;
	} = $props();

	const id = $derived(title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''));
	let showCode = $state(false);
</script>

<section class="flex flex-col gap-3">
	<h2 {id} class="scroll-mt-24 text-xl leading-7 font-bold">
		<a href="#{id}" class="hover:text-(--purple-300) focus-visible:ring-ring/50 rounded-sm outline-none focus-visible:ring-3">{title}</a>
	</h2>
	{#if description}<p class="text-sm leading-5 text-(--grey-300)">{description}</p>{/if}

	<div class="border-card overflow-hidden rounded-lg border">
		<div class={cn('flex min-h-32 flex-wrap items-center gap-4 p-6', className)}>
			{@render children()}
		</div>
		<div class="border-card flex items-center justify-end border-t px-2 py-1.5">
			<button
				type="button"
				aria-expanded={showCode}
				onclick={() => (showCode = !showCode)}
				class="text-(--grey-300) hover:text-foreground focus-visible:ring-ring/50 rounded-md px-2.5 py-1 text-xs leading-4 outline-none focus-visible:ring-3"
			>
				{showCode ? 'Hide code' : 'Show code'}
			</button>
		</div>
		{#if showCode}
			<CodeBlock {code} class="rounded-none" />
		{/if}
	</div>
</section>
