<script lang="ts">
	import Example from '../Example.svelte';
	import * as Select from '$lib/components/ui/select/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	let fruit = $state('');

	const code = `<script lang="ts">
  let fruit = $state('');
<\/script>

<Label>Fruit</Label>
<Select.Root type="single" bind:value={fruit}>
  <Select.Trigger class="w-full">{fruit || 'Select from dropdown'}</Select.Trigger>
  <Select.Content>
    <Select.Item value="apple">Apple</Select.Item>
    <Select.Item value="pear">Pear</Select.Item>
    <Select.Item value="plum">Plum</Select.Item>
  </Select.Content>
</Select.Root>`;
	const smallCode = `<Select.Trigger size="sm">Small</Select.Trigger>`;
</script>

<Example title="Default" code={code}>
	<div class="flex w-60 flex-col gap-1">
		<Label>Fruit</Label>
		<Select.Root type="single" bind:value={fruit}>
			<Select.Trigger class="w-full">{fruit || 'Select from dropdown'}</Select.Trigger>
			<Select.Content>
				<Select.Item value="apple">Apple</Select.Item>
				<Select.Item value="pear">Pear</Select.Item>
				<Select.Item value="plum">Plum</Select.Item>
			</Select.Content>
		</Select.Root>
	</div>
</Example>

<Example title="Small" code={smallCode}>
	<Select.Root type="single">
		<Select.Trigger size="sm" class="w-48">Small</Select.Trigger>
		<Select.Content>
			<Select.Item value="a">Option 1</Select.Item>
			<Select.Item value="b">Option 2</Select.Item>
		</Select.Content>
	</Select.Root>
</Example>
