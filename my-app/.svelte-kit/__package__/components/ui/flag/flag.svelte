<script lang="ts" module>
	import { tv, type VariantProps } from "tailwind-variants";

	export const flagVariants = tv({
		slots: {
			icon: "size-8 shrink-0",
			timer: "absolute inset-x-0 bottom-0 h-[3px] origin-left",
		},
		variants: {
			type: {
				info: { icon: "text-(--info-300)", timer: "bg-(--blue-500)" },
				success: { icon: "text-(--success-300)", timer: "bg-(--success-300)" },
				warning: { icon: "text-(--warning-300)", timer: "bg-(--warning-300)" },
				danger: { icon: "text-(--danger-300)", timer: "bg-(--danger-300)" },
			},
		},
		defaultVariants: { type: "info" },
	});

	export type FlagType = NonNullable<VariantProps<typeof flagVariants>["type"]>;
</script>

<script lang="ts">
	import { Icon } from "$lib/components/ui/icon/index.js";
	import { cn } from "$lib/utils.js";

	let {
		type = "info",
		message,
		duration = 5000,
		closeToast,
		class: className,
	}: {
		type?: FlagType;
		message: string;
		/** ms the bottom timer takes to run out. Match the toast duration. */
		duration?: number;
		closeToast?: () => void;
		class?: string;
	} = $props();

	const styles = $derived(flagVariants({ type }));
	const names = { info: "info", success: "check-circle", warning: "warning", danger: "dangerous" } as const;
</script>

<div
	data-slot="flag"
	role={type === "danger" || type === "warning" ? "alert" : "status"}
	class={cn("bg-card text-foreground relative w-[min(566px,calc(100vw-2rem))] overflow-hidden", className)}
>
	<div class="flex items-center gap-2.5 py-4 pr-12 pl-4">
		<Icon name={names[type]} class={styles.icon()} />
		<p class="text-base leading-6">{message}</p>
	</div>
	{#if closeToast}
		<button
			type="button"
			aria-label="Dismiss"
			onclick={closeToast}
			class="focus-visible:ring-ring/50 absolute top-0 right-0 flex size-11 items-center justify-center text-(--grey-400) transition-colors outline-none hover:text-foreground focus-visible:ring-3"
		>
			<Icon name="close" class="size-5" />
		</button>
	{/if}
	<div class={cn(styles.timer(), "flag-timer")} style="--flag-duration: {duration}ms" aria-hidden="true"></div>
</div>

<style>
	.flag-timer {
		animation: flag-timer var(--flag-duration) linear forwards;
	}
	@keyframes flag-timer {
		from {
			transform: scaleX(1);
		}
		to {
			transform: scaleX(0);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.flag-timer {
			animation: none;
		}
	}
</style>
