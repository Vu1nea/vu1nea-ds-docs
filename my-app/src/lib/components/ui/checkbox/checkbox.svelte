<script lang="ts">
	import { Checkbox as CheckboxPrimitive } from "bits-ui";
	import { cn, type WithoutChildrenOrChild } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		checked = $bindable(false),
		indeterminate = $bindable(false),
		class: className,
		...restProps
	}: WithoutChildrenOrChild<CheckboxPrimitive.RootProps> = $props();
</script>

<CheckboxPrimitive.Root
	bind:ref
	bind:checked
	bind:indeterminate
	data-slot="checkbox"
	class={cn(
		"border-(--grey-500) transition-colors duration-150 ease-out motion-reduce:transition-none data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary hover:border-(--purple-400) data-[state=checked]:hover:border-primary-hover data-[state=checked]:hover:bg-primary-hover data-[state=indeterminate]:hover:border-primary-hover data-[state=indeterminate]:hover:bg-primary-hover after:absolute after:-inset-3 aria-invalid:border-destructive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--purple-400) peer relative flex size-5 shrink-0 items-center justify-center rounded-md border-2 outline-none disabled:cursor-not-allowed disabled:opacity-50",
		className
	)}
	{...restProps}
>
	{#snippet children({ checked, indeterminate })}
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden="true"
			focusable="false"
			data-slot="checkbox-indicator"
			class={cn(
				"text-foreground size-4 transition-transform duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] motion-reduce:transition-none",
				checked || indeterminate ? "scale-100" : "scale-0"
			)}
		>
			{#if indeterminate}
				<path d="M19 13H5v-2h14v2z" />
			{:else}
				<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
			{/if}
		</svg>
	{/snippet}
</CheckboxPrimitive.Root>
