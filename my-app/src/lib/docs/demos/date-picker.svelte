<script lang="ts">
	import Example from '../Example.svelte';
	import { DatePicker } from '$lib/components/ui/date-picker/index.js';
	import { Calendar } from '$lib/components/ui/calendar/index.js';
	import type { DateValue } from '@internationalized/date';

	let date = $state<DateValue | undefined>();

	const code = `<script lang="ts">
  import type { DateValue } from '@internationalized/date';
  let date = $state<DateValue | undefined>();
<\/script>

<DatePicker label="Due date" required bind:value={date} />`;
	const calCode = `<Calendar type="single" bind:value={date} />`;
</script>

<Example title="Date picker" description="Type a date or open the calendar." code={code}>
	<DatePicker label="Due date" required bind:value={date} />
</Example>

<Example title="Calendar" description="Standalone calendar, sharing the same value." code={calCode}>
	<Calendar type="single" bind:value={date} />
</Example>
