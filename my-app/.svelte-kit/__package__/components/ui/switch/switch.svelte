<script lang="ts">
	import { Switch as SwitchPrimitive } from "bits-ui";
	import { cn, type WithoutChildrenOrChild } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		checked = $bindable(false),
		class: className,
		...restProps
	}: WithoutChildrenOrChild<SwitchPrimitive.RootProps> = $props();
</script>

<SwitchPrimitive.Root
	bind:ref
	bind:checked
	data-slot="switch"
	class={cn(
		"bg-(--grey-600) data-[state=checked]:bg-primary hover:data-[state=unchecked]:bg-(--grey-500) hover:data-[state=checked]:bg-primary-hover focus-visible:ring-ring/50 focus-visible:ring-3 aria-invalid:ring-destructive/20 aria-invalid:ring-3 peer relative inline-flex h-6 w-11 shrink-0 items-center rounded-full outline-none transition-colors duration-150 motion-reduce:transition-none after:absolute after:-inset-2 disabled:cursor-not-allowed disabled:opacity-50",
		className
	)}
	{...restProps}
>
	<SwitchPrimitive.Thumb
		data-slot="switch-thumb"
		class="bg-foreground pointer-events-none block size-5 translate-x-0.5 rounded-full shadow-sm transition-transform duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] motion-reduce:transition-none data-[state=checked]:translate-x-[22px]"
	/>
</SwitchPrimitive.Root>
