<script lang="ts">
	import { cn, type WithElementRef } from "$lib/utils.js";
	import type { HTMLTextareaAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		value = $bindable(),
		class: className,
		"data-slot": dataSlot = "textarea",
		...restProps
	}: WithElementRef<HTMLTextareaAttributes> = $props();
</script>

<textarea
	bind:this={ref}
	data-slot={dataSlot}
	class={cn(
		"bg-transparent border-input hover:bg-card focus-visible:bg-card focus-visible:border-(--purple-400) aria-invalid:border-destructive min-h-24 w-full min-w-0 resize-y rounded-md border px-2 py-2 text-sm leading-5 transition-colors outline-none placeholder:text-secondary-foreground/80 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
		className
	)}
	bind:value
	{...restProps}
></textarea>
