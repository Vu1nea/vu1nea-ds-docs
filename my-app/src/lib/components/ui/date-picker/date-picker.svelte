<script lang="ts">
	import { CalendarDate, type DateValue } from "@internationalized/date";
	import { Input } from "$lib/components/ui/input/index.js";
	import { Label } from "$lib/components/ui/label/index.js";
	import * as Popover from "$lib/components/ui/popover/index.js";
	import { Calendar } from "$lib/components/ui/calendar/index.js";
	import { Icon } from "$lib/components/ui/icon/index.js";
	import { cn } from "$lib/utils.js";

	let {
		value = $bindable(),
		label,
		required = false,
		minValue,
		maxValue,
		class: className,
	}: {
		value?: DateValue | undefined;
		label?: string;
		required?: boolean;
		minValue?: DateValue;
		maxValue?: DateValue;
		class?: string;
	} = $props();

	const uid = $props.id();
	const hintId = `${uid}-hint`;
	const errorId = `${uid}-error`;

	const pad = (n: number) => String(n).padStart(2, "0");
	const format = (d: DateValue) => `${pad(d.month)}/${pad(d.day)}/${d.year}`;

	let open = $state(false);
	let text = $state(value ? format(value) : "");
	let error = $state("");
	let placeholder = $state<DateValue | undefined>(value);

	/** Returns a date, null for an empty field, or an error message. */
	function parse(raw: string): CalendarDate | null | string {
		const input = raw.trim();
		if (!input) return required ? "Enter a date." : null;
		const m = /^(\d{1,2})[/.-](\d{1,2})[/.-](\d{4})$/.exec(input);
		if (!m) return "Use the format MM/DD/YYYY.";
		const month = Number(m[1]);
		const day = Number(m[2]);
		const year = Number(m[3]);
		// new Date(y, m, 0) is the last day of month m, so it also handles leap years.
		if (month < 1 || month > 12 || day < 1 || day > new Date(year, month, 0).getDate()) {
			return "That date doesn't exist.";
		}
		if (year < 1900 || year > 2100) return "Enter a year between 1900 and 2100.";
		const date = new CalendarDate(year, month, day);
		if (minValue && date.compare(minValue) < 0) return `Date must be on or after ${format(minValue)}.`;
		if (maxValue && date.compare(maxValue) > 0) return `Date must be on or before ${format(maxValue)}.`;
		return date;
	}

	function validate() {
		const result = parse(text);
		if (typeof result === "string") {
			error = result;
			return;
		}
		error = "";
		value = result ?? undefined;
		if (result) {
			text = format(result);
			placeholder = result;
		}
	}

	function pick(next: DateValue | undefined) {
		if (!next) return;
		value = next;
		text = format(next);
		error = "";
		open = false;
	}
</script>

<div class={cn("flex w-60 flex-col gap-1", className)} data-slot="date-picker">
	{#if label}
		<Label for="{uid}-input">
			{label}
			{#if required}<span class="text-destructive" aria-hidden="true">*</span><span class="sr-only">required</span>{/if}
		</Label>
	{/if}
	<Popover.Root bind:open>
		<div class="relative">
			<Input
				id="{uid}-input"
				bind:value={text}
				inputmode="numeric"
				autocomplete="off"
				placeholder="MM/DD/YYYY"
				class="pr-11"
				aria-invalid={error ? "true" : undefined}
				aria-describedby={error ? errorId : hintId}
				oninput={() => error && validate()}
				onblur={validate}
				onkeydown={(e) => e.key === "Enter" && validate()}
			/>
			<Popover.Trigger>
				{#snippet child({ props })}
					<button
						{...props}
						type="button"
						aria-label="Choose date"
						class="focus-visible:ring-ring/50 absolute top-0 right-0 flex h-[38px] w-11 items-center justify-center rounded-md text-(--grey-300) outline-none transition-colors hover:text-foreground focus-visible:ring-3"
					>
						<Icon name="calendar" class="size-5" />
					</button>
				{/snippet}
			</Popover.Trigger>
		</div>
		<Popover.Content align="end" class="w-auto">
			<Calendar type="single" {value} bind:placeholder onValueChange={pick} {minValue} {maxValue} />
		</Popover.Content>
	</Popover.Root>
	{#if error}
		<p id={errorId} role="alert" class="text-xs leading-4 text-(--danger-300)">{error}</p>
	{:else}
		<p id={hintId} class="text-xs leading-4 text-(--grey-400)">MM/DD/YYYY</p>
	{/if}
</div>
