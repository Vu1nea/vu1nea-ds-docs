<script lang="ts">
	import type { Snippet } from "svelte";
	import { cn } from "$lib/utils.js";

	let {
		href,
		active = false,
		icon,
		children,
		class: className,
		...restProps
	}: {
		href?: string;
		active?: boolean;
		icon?: Snippet;
		children: Snippet;
		class?: string;
		[key: string]: unknown;
	} = $props();
</script>

<li>
	<svelte:element
		this={href ? "a" : "button"}
		{href}
		type={href ? undefined : "button"}
		aria-current={active ? "page" : undefined}
		data-slot="menu-item"
		class={cn(
			"focus-visible:ring-ring/50 flex h-12 w-full items-center gap-4 rounded-md px-1.5 py-3 text-left text-base leading-6 font-medium text-foreground outline-none transition-colors hover:bg-(--grey-800)/50 focus-visible:ring-3 aria-[current=page]:bg-card [&_svg]:size-6 [&_svg]:shrink-0",
			className
		)}
		{...restProps}
	>
		{@render icon?.()}
		{@render children()}
	</svelte:element>
</li>
