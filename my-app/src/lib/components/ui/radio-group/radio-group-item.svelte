<script lang="ts">
	import { RadioGroup as RadioGroupPrimitive } from "bits-ui";
	import { cn, type WithoutChildrenOrChild } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: WithoutChildrenOrChild<RadioGroupPrimitive.ItemProps> = $props();
</script>

<RadioGroupPrimitive.Item
	bind:ref
	data-slot="radio-group-item"
	class={cn(
		"border-(--grey-500) transition-[border-color,border-width] duration-150 ease-out motion-reduce:transition-none data-[state=checked]:border-2 data-[state=checked]:border-(--purple-400) hover:border-(--purple-400) after:absolute after:-inset-3 aria-invalid:border-destructive focus-visible:border-(--purple-400) focus-visible:ring-ring/30 flex size-5 rounded-full border focus-visible:ring-3 group/radio-group-item peer relative aspect-square shrink-0 outline-none disabled:cursor-not-allowed disabled:opacity-50",
		className
	)}
	{...restProps}
>
	{#snippet children({ checked })}
		<div data-slot="radio-group-indicator" class="flex size-full items-center justify-center">
			<span
				class={cn(
					"bg-(--purple-400) size-3 rounded-full transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none",
					checked ? "scale-100" : "scale-0"
				)}
			></span>
		</div>
	{/snippet}
</RadioGroupPrimitive.Item>
