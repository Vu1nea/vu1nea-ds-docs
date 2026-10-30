<script lang="ts">
	import type { Snippet } from "svelte";
	import { cn } from "$lib/utils.js";

	let {
		header,
		footer,
		children,
		class: className,
		"aria-label": ariaLabel = "Main",
	}: {
		header?: Snippet;
		footer?: Snippet;
		children: Snippet;
		class?: string;
		"aria-label"?: string;
	} = $props();
</script>

<nav
	aria-label={ariaLabel}
	data-slot="menu"
	class={cn("border-card text-foreground flex w-61 flex-col gap-5 border", className)}
>
	{#if header}
		<div class="flex items-center gap-1.5 px-2 py-1 text-2xl leading-7 font-bold">{@render header()}</div>
	{/if}
	<ul class="flex flex-1 flex-col gap-4 px-2">
		{@render children()}
	</ul>
	{#if footer}
		<div class="border-card flex items-center gap-2.5 border p-3">{@render footer()}</div>
	{/if}
</nav>
