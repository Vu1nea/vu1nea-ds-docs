<script lang="ts">
	import { cn } from "$lib/utils.js";

	let {
		title,
		subtitle,
		count,
		days,
		columns = 10,
		class: className,
	}: {
		title: string;
		subtitle?: string;
		/** Shown at the right of the subtitle row, e.g. "11x". */
		count?: string;
		/** One entry per day, true = completed. */
		days: boolean[];
		columns?: number;
		class?: string;
	} = $props();

	const done = $derived(days.filter(Boolean).length);
</script>

<section class={cn("flex w-full max-w-[438px] flex-col gap-4 p-2.5", className)} data-slot="streak-tracker">
	<div class="flex flex-col gap-2">
		<h3 class="text-2xl leading-8 font-bold">{title}</h3>
		{#if subtitle || count}
			<div class="flex items-center justify-between">
				<p class="text-base leading-6 text-(--grey-300)">{subtitle}</p>
				<p class="text-[28px] leading-8 font-bold">{count}</p>
			</div>
		{/if}
	</div>
	<div
		role="img"
		aria-label="{title}: {done} of {days.length} days completed"
		class="grid gap-y-3"
		style="grid-template-columns: repeat({columns}, minmax(0, 1fr))"
	>
		{#each days as filled, i (i)}
			<span
				class={cn(
					"size-4 justify-self-center rounded-full",
					filled ? "bg-(--purple-400)" : "border border-(--grey-500)"
				)}
			></span>
		{/each}
	</div>
</section>
