<script lang="ts" module>
	import { type VariantProps, tv } from "tailwind-variants";
	import { cn, type WithElementRef } from "$lib/utils.js";
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

	export const buttonVariants = tv({
		base: "focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive font-normal focus-visible:ring-3 aria-invalid:ring-3 [&_svg:not([class*='size-'])]:size-4 group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-colors outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
		variants: {
			variant: {
				default: "",
				outline: "border bg-transparent hover:bg-current/10 active:bg-current/20",
				secondary: "bg-secondary text-secondary-foreground hover:bg-(--grey-500)",
				ghost: "hover:bg-(--grey-700) hover:text-foreground active:bg-(--grey-600)",
				destructive: "",
				link: "text-primary underline-offset-4 hover:underline",
			},
			color: {
				purple: "",
				orange: "",
				blue: "",
				light: "",
				error: "",
			},
			size: {
				default: "gap-2.5 px-4 py-3 text-sm leading-5",
				lg: "gap-2.5 px-6 py-3.5 text-base",
				icon: "size-11",
				"icon-lg": "size-12",
			},
			rounded: {
				false: "rounded-md",
				true: "rounded-full",
			},
		},
		compoundVariants: [
			// Primary: white label in every state; fill darkens rest -> hover -> pressed (all >= 4.5:1)
			{ variant: "default", color: "purple", class: "bg-primary text-foreground hover:bg-primary-hover active:bg-primary-active" },
			{ variant: "default", color: "orange", class: "bg-orange text-white hover:bg-orange-hover active:bg-orange-active" },
			{ variant: "default", color: "blue", class: "bg-blue text-foreground hover:bg-blue-hover active:bg-blue-active" },
			{ variant: "default", color: "light", class: "bg-foreground text-background hover:bg-(--grey-200) active:bg-foreground" },
			{ variant: "default", color: "error", class: "bg-(--danger-700) text-foreground hover:bg-(--danger-800) active:bg-(--danger-900)" },
			{ variant: "destructive", class: "bg-(--danger-700) text-foreground hover:bg-(--danger-800) active:bg-(--danger-900)" },
			// Outline: border keeps the brand color; text is lifted a step so it clears 4.5:1 on dark
			{ variant: "outline", color: "purple", class: "border-primary text-(--purple-400)" },
			{ variant: "outline", color: "orange", class: "border-(--orange-600) text-(--orange-600)" },
			{ variant: "outline", color: "blue", class: "border-blue text-(--blue-500)" },
			{ variant: "outline", color: "light", class: "border-foreground text-foreground" },
			{ variant: "outline", color: "error", class: "border-destructive text-destructive" },
		],
		defaultVariants: {
			variant: "default",
			color: "purple",
			size: "default",
			rounded: false,
		},
	});

	export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
	export type ButtonColor = VariantProps<typeof buttonVariants>["color"];
	export type ButtonSize = VariantProps<typeof buttonVariants>["size"];

	export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
		WithElementRef<HTMLAnchorAttributes> & {
			variant?: ButtonVariant;
			color?: ButtonColor;
			size?: ButtonSize;
			rounded?: boolean;
		};
</script>

<script lang="ts">
	let {
		class: className,
		variant = "default",
		color = "purple",
		size = "default",
		rounded = false,
		ref = $bindable(null),
		href = undefined,
		type = "button",
		disabled,
		children,
		...restProps
	}: ButtonProps = $props();
</script>

{#if href}
	<a
		bind:this={ref}
		data-slot="button"
		class={cn(buttonVariants({ variant, color, size, rounded }), className)}
		href={disabled ? undefined : href}
		aria-disabled={disabled}
		role={disabled ? "link" : undefined}
		tabindex={disabled ? -1 : undefined}
		{...restProps}
	>
		{@render children?.()}
	</a>
{:else}
	<button
		bind:this={ref}
		data-slot="button"
		class={cn(buttonVariants({ variant, color, size, rounded }), className)}
		{type}
		{disabled}
		{...restProps}
	>
		{@render children?.()}
	</button>
{/if}
