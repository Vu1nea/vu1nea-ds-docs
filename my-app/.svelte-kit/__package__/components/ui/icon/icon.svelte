<script lang="ts" module>
	/** 24px Material paths, same set as the Figma Icons page. */
	export const materialIcons = {
		info: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",
		"check-circle": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
		warning: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
		close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
		home: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
		"arrow-down": "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
		calendar: "M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z",
		"chevron-left": "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z",
		"chevron-right": "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",
		"chevrons-left": "M17.59 18L19 16.59 14.42 12 19 7.41 17.59 6l-6 6zM11.59 18L13 16.59 8.42 12 13 7.41 11.59 6l-6 6z",
		"chevrons-right": "M6.41 6L5 7.41 9.58 12 5 16.59 6.41 18l6-6zM12.41 6L11 7.41 15.58 12 11 16.59 12.41 18l6-6z",
	} as const;

	export type IconName = keyof typeof materialIcons | "dangerous" | "target" | "idea";
</script>

<script lang="ts">
	import OctagonXIcon from "@lucide/svelte/icons/octagon-x";
	import TargetIcon from "@lucide/svelte/icons/target";
	import LightbulbIcon from "@lucide/svelte/icons/lightbulb";
	import { cn } from "$lib/utils.js";

	let { name, class: className }: { name: IconName; class?: string } = $props();

	const d = $derived(materialIcons[name as keyof typeof materialIcons]);
</script>

{#if d}
	<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" class={cn("size-6 shrink-0", className)}>
		<path {d} />
	</svg>
{:else if name === "dangerous"}
	<OctagonXIcon aria-hidden="true" class={cn("size-6 shrink-0", className)} />
{:else if name === "target"}
	<TargetIcon aria-hidden="true" class={cn("size-6 shrink-0", className)} />
{:else}
	<LightbulbIcon aria-hidden="true" class={cn("size-6 shrink-0", className)} />
{/if}
