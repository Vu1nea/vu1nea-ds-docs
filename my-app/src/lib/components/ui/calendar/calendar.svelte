<script lang="ts">
	import { getLocalTimeZone, isEqualMonth, today, type DateValue } from "@internationalized/date";
	import { buttonVariants } from "$lib/components/ui/button/index.js";
	import { Icon } from "$lib/components/ui/icon/index.js";
	import { Calendar as CalendarPrimitive } from "bits-ui";
	import { cn, type WithoutChildrenOrChild } from "$lib/utils.js";
	import * as Calendar from "./index.js";
	import type { ButtonVariant } from "../button/button.svelte";
	import type { Snippet } from "svelte";

	let {
		ref = $bindable(null),
		value = $bindable(),
		placeholder = $bindable(),
		class: className,
		weekdayFormat = "short",
		buttonVariant = "ghost",
		captionLayout = "label",
		locale = "en-US",
		months: monthsProp,
		years,
		monthFormat: monthFormatProp,
		yearFormat = "numeric",
		day,
		disableDaysOutsideMonth = false,
		...restProps
	}: WithoutChildrenOrChild<CalendarPrimitive.RootProps> & {
		buttonVariant?: ButtonVariant;
		captionLayout?: "dropdown" | "dropdown-months" | "dropdown-years" | "label";
		months?: CalendarPrimitive.MonthSelectProps["months"];
		years?: CalendarPrimitive.YearSelectProps["years"];
		monthFormat?: CalendarPrimitive.MonthSelectProps["monthFormat"];
		yearFormat?: CalendarPrimitive.YearSelectProps["yearFormat"];
		day?: Snippet<[{ day: DateValue; outsideMonth: boolean }]>;
	} = $props();

	/** Jump the visible month by whole years. */
	function shiftYears(n: number) {
		const current = value && !Array.isArray(value) ? (value as DateValue) : undefined;
		const base = placeholder ?? current ?? today(getLocalTimeZone());
		placeholder = base.add({ years: n });
	}

	const yearButton = cn(buttonVariants({ variant: "ghost" }), "size-(--cell-size) p-0 select-none");

	const monthFormat = $derived.by(() => {
		if (monthFormatProp) return monthFormatProp;
		if (captionLayout.startsWith("dropdown")) return "short";
		return "long";
	});
</script>

<!--
Discriminated Unions + Destructing (required for bindable) do not
get along, so we shut typescript up by casting `value` to `never`.
-->
<CalendarPrimitive.Root
	bind:value={value as never}
	bind:ref
	bind:placeholder
	{weekdayFormat}
	{disableDaysOutsideMonth}
	class={cn(
		"p-2 [--cell-radius:var(--radius-md)] [--cell-size:--spacing(10)] group/calendar bg-card text-foreground w-fit rounded-lg in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent",
		className
	)}
	{locale}
	{monthFormat}
	{yearFormat}
	{...restProps}
>
	{#snippet children({ months, weekdays })}
		<Calendar.Months>
			<Calendar.Nav>
				<div class="flex">
					<button type="button" class={yearButton} aria-label="Previous year" onclick={() => shiftYears(-1)}>
						<Icon name="chevrons-left" class="size-5" />
					</button>
					<Calendar.PrevButton variant={buttonVariant} />
				</div>
				<div class="flex">
					<Calendar.NextButton variant={buttonVariant} />
					<button type="button" class={yearButton} aria-label="Next year" onclick={() => shiftYears(1)}>
						<Icon name="chevrons-right" class="size-5" />
					</button>
				</div>
			</Calendar.Nav>
			{#each months as month, monthIndex (month)}
				<Calendar.Month>
					<Calendar.Header>
						<Calendar.Caption
							{captionLayout}
							months={monthsProp}
							{monthFormat}
							{years}
							{yearFormat}
							month={month.value}
							bind:placeholder
							{locale}
							{monthIndex}
						/>
					</Calendar.Header>
					<Calendar.Grid>
						<Calendar.GridHead>
							<Calendar.GridRow class="select-none">
								{#each weekdays as weekday, i (i)}
									<Calendar.HeadCell>
										{weekday.slice(0, 2)}
									</Calendar.HeadCell>
								{/each}
							</Calendar.GridRow>
						</Calendar.GridHead>
						<Calendar.GridBody>
							{#each month.weeks as weekDates (weekDates)}
								<Calendar.GridRow class="mt-2 w-full">
									{#each weekDates as date (date)}
										<Calendar.Cell {date} month={month.value}>
											{#if day}
												{@render day({
													day: date,
													outsideMonth: !isEqualMonth(date, month.value),
												})}
											{:else}
												<Calendar.Day />
											{/if}
										</Calendar.Cell>
									{/each}
								</Calendar.GridRow>
							{/each}
						</Calendar.GridBody>
					</Calendar.Grid>
				</Calendar.Month>
			{/each}
		</Calendar.Months>
	{/snippet}
</CalendarPrimitive.Root>
