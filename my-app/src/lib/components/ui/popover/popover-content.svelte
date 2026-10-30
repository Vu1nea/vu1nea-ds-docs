<script lang="ts">
	import { Popover as PopoverPrimitive } from "bits-ui";
	import { cn, type WithoutChildrenOrChild } from "$lib/utils.js";
	import PopoverPortal from "./popover-portal.svelte";
	import type { ComponentProps } from "svelte";

	let {
		ref = $bindable(null),
		class: className,
		sideOffset = 4,
		align = "center",
		portalProps,
		...restProps
	}: PopoverPrimitive.ContentProps & {
		portalProps?: WithoutChildrenOrChild<ComponentProps<typeof PopoverPortal>>;
	} = $props();
</script>

<PopoverPortal {...portalProps}>
	<PopoverPrimitive.Content
		bind:ref
		data-slot="popover-content"
		{sideOffset}
		{align}
		class={cn(
			"bg-card text-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 flex flex-col rounded-lg p-0 text-sm shadow-lg duration-100 z-50 w-72 origin-(--bits-popover-content-transform-origin) outline-hidden",
			className
		)}
		{...restProps}
	/>
</PopoverPortal>
