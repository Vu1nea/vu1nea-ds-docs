<script lang="ts">
	import { cn } from "$lib/utils.js";

	let {
		steps,
		current = 0,
		orientation = "vertical",
		class: className,
	}: {
		steps: { label?: string }[];
		/** Zero-based index of the active step. Steps up to and including it are filled. */
		current?: number;
		orientation?: "vertical" | "horizontal";
		class?: string;
	} = $props();

	const vertical = $derived(orientation === "vertical");
	const status = (i: number) => (i < current ? "completed" : i === current ? "current" : "upcoming");
</script>

<ol aria-label="Progress" class={cn("flex", vertical ? "flex-col" : "items-center", className)}>
	{#each steps as step, i (i)}
		{@const filled = i <= current}
		<li
			aria-current={i === current ? "step" : undefined}
			class={cn(vertical ? "grid grid-cols-[26px_1fr] gap-x-3" : "flex items-center", !vertical && i < steps.length - 1 && "flex-1")}
		>
			<span
				class={cn(
					"grid size-[26px] shrink-0 place-items-center rounded-full border text-xs leading-4",
					filled ? "border-primary bg-primary text-foreground" : "border-(--purple-400) text-(--purple-400)"
				)}
			>
				{i + 1}<span class="sr-only"> ({status(i)})</span>
			</span>
			{#if step.label}
				<span class={cn("text-sm leading-5 text-foreground", vertical ? "self-center" : "mx-2")}>{step.label}</span>
			{:else if vertical}
				<span></span>
			{/if}
			{#if i < steps.length - 1}
				<span
					aria-hidden="true"
					class={cn("bg-(--grey-400)", vertical ? "col-start-1 mx-auto h-[53px] w-px" : "h-px min-w-[53px] flex-1")}
				></span>
			{/if}
		</li>
	{/each}
</ol>
