<script lang="ts">
	import Example from '../Example.svelte';
	import { Stepper } from '$lib/components/ui/stepper/index.js';

	const vCode = `<Stepper steps={[{ label: 'Account' }, { label: 'Profile' }, { label: 'Done' }]} current={1} />`;
	const hCode = `<Stepper orientation="horizontal" steps={[{}, {}, {}, {}]} current={2} class="w-full" />`;
	const hLabelCode = `<Stepper
  orientation="horizontal"
  steps={[{ label: 'Account' }, { label: 'Profile' }, { label: 'Done' }]}
  current={1}
  class="w-full"
/>`;
</script>

<Example title="Vertical" code={vCode}>
	<Stepper steps={[{ label: 'Account' }, { label: 'Profile' }, { label: 'Done' }]} current={1} />
</Example>

<Example title="Horizontal" description="The connector stretches to fill the width." code={hCode}>
	<Stepper orientation="horizontal" steps={[{}, {}, {}, {}]} current={2} class="w-full" />
</Example>

<Example title="Horizontal with labels" code={hLabelCode}>
	<Stepper orientation="horizontal" steps={[{ label: 'Account' }, { label: 'Profile' }, { label: 'Done' }]} current={1} class="w-full" />
</Example>
