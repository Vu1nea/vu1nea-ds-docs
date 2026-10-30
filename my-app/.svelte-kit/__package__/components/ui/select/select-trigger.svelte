<script lang="ts">
	import { Select as SelectPrimitive } from "bits-ui";
	import { Icon } from "$lib/components/ui/icon/index.js";
	import { cn, type WithoutChild } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		children,
		size = "default",
		...restProps
	}: WithoutChild<SelectPrimitive.TriggerProps> & {
		size?: "sm" | "default";
	} = $props();
</script>

<SelectPrimitive.Trigger
	bind:ref
	data-slot="select-trigger"
	data-size={size}
	class={cn(
		"bg-transparent border-input data-placeholder:text-foreground focus-visible:border-(--purple-400) focus-visible:bg-card aria-invalid:border-destructive gap-16 rounded-md border p-1.5 text-sm leading-5 transition-colors data-[size=default]:h-[38px] data-[size=sm]:h-8 *:data-[slot=select-value]:flex *:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-5 flex w-fit items-center justify-between whitespace-nowrap outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
		className
	)}
	{...restProps}
>
	{@render children?.()}
	<Icon name="arrow-down" class="text-foreground size-5 pointer-events-none" />
</SelectPrimitive.Trigger>
