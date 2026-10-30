<script lang="ts" module>
	import { type VariantProps, tv } from "tailwind-variants";

	export const badgeVariants = tv({
		base: "gap-2 px-3 py-1.5 text-xs leading-4 font-medium transition-colors [&>svg]:size-3! group/badge inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap focus-visible:ring-[3px] focus-visible:ring-ring/50 [&>svg]:pointer-events-none",
		variants: {
			variant: {
				light: "",
				dark: "",
			},
			color: {
				purple: "",
				orange: "",
				blue: "",
				light: "",
			},
			rounded: {
				false: "rounded-sm",
				true: "rounded-2xl",
			},
		},
		compoundVariants: [
			// Light variant: bright fill, dark text. Dark variant: dark fill, bright text.
			// Light: 300 fill / 950 text. Dark: 900 fill / 200 text. All >= 6.6:1.
			{ variant: "light", color: "purple", class: "bg-(--purple-300) text-(--purple-950)" },
			{ variant: "dark", color: "purple", class: "bg-(--purple-900) text-(--purple-200)" },
			{ variant: "light", color: "orange", class: "bg-(--orange-300) text-(--orange-950)" },
			{ variant: "dark", color: "orange", class: "bg-(--orange-900) text-(--orange-200)" },
			{ variant: "light", color: "blue", class: "bg-(--blue-300) text-(--blue-950)" },
			{ variant: "dark", color: "blue", class: "bg-(--blue-900) text-(--blue-200)" },
			{ variant: "light", color: "light", class: "bg-foreground text-background" },
			{ variant: "dark", color: "light", class: "border border-foreground text-foreground" },
		],
		defaultVariants: {
			variant: "light",
			color: "purple",
			rounded: false,
		},
	});

	export type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];
	export type BadgeColor = VariantProps<typeof badgeVariants>["color"];
</script>

<script lang="ts">
	import { cn, type WithElementRef } from "$lib/utils.js";
	import type { HTMLAnchorAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		href,
		class: className,
		variant = "light",
		color = "purple",
		rounded = false,
		indicator = false,
		children,
		...restProps
	}: WithElementRef<HTMLAnchorAttributes> & {
		variant?: BadgeVariant;
		color?: BadgeColor;
		rounded?: boolean;
		indicator?: boolean;
	} = $props();
</script>

<svelte:element
	this={href ? "a" : "span"}
	bind:this={ref}
	data-slot="badge"
	{href}
	class={cn(badgeVariants({ variant, color, rounded }), className)}
	{...restProps}
>
	{#if indicator}
		<span class="size-[9px] shrink-0 rounded-full bg-blue" aria-hidden="true"></span>
	{/if}
	{@render children?.()}
</svelte:element>
