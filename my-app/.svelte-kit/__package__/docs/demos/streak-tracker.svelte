<script lang="ts">
	import Example from '../Example.svelte';
	import { StreakTracker } from '$lib/components/ui/streak-tracker/index.js';

	const days = Array.from({ length: 30 }, (_, i) => i < 11 || i === 14 || i === 15);

	const code = `<script lang="ts">
  const days = Array.from({ length: 30 }, (_, i) => i < 11 || i === 14 || i === 15);
<\/script>

<StreakTracker title="Daily Reading" subtitle="August 2025" count="11x" {days} />`;
	const colCode = `<StreakTracker title="This week" count="5x" days={[true, true, true, false, true, true, false]} columns={7} />`;
</script>

<Example title="Default" code={code}>
	<StreakTracker title="Daily Reading" subtitle="August 2025" count="11x" {days} />
</Example>

<Example title="Seven columns" description="Use columns to match a week." code={colCode}>
	<StreakTracker title="This week" count="5x" days={[true, true, true, false, true, true, false]} columns={7} />
</Example>
