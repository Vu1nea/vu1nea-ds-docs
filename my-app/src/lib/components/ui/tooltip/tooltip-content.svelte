<script lang="ts">
	import { Tooltip as TooltipPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		sideOffset = 6,
		side = "top",
		children,
		...restProps
	}: TooltipPrimitive.ContentProps = $props();
</script>

<TooltipPrimitive.Portal>
	<TooltipPrimitive.Content
		bind:ref
		data-slot="tooltip-content"
		{sideOffset}
		{side}
		class={cn(
			"bg-(--grey-700) text-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 z-50 w-fit max-w-64 origin-(--bits-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs leading-4 shadow-lg duration-100",
			className
		)}
		{...restProps}
	>
		{@render children?.()}
	</TooltipPrimitive.Content>
</TooltipPrimitive.Portal>
