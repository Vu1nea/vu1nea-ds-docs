<script lang="ts">
	import { Tabs as TabsPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: TabsPrimitive.TriggerProps = $props();
</script>

<TabsPrimitive.Trigger
	bind:ref
	data-slot="tabs-trigger"
	class={cn(
		"text-(--grey-400) hover:text-foreground data-[state=active]:text-foreground data-[state=active]:border-(--purple-400) focus-visible:ring-ring/50 -mb-px inline-flex items-center justify-center gap-2 whitespace-nowrap border-b-2 border-transparent px-1 pb-3 text-sm leading-5 font-medium outline-none transition-colors focus-visible:ring-3 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-5 [&_svg]:shrink-0",
		className
	)}
	{...restProps}
/>
