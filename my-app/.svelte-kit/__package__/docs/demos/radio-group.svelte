<script lang="ts">
	import Example from '../Example.svelte';
	import * as RadioGroup from '$lib/components/ui/radio-group/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	let plan = $state('free');

	const code = `<script lang="ts">
  let plan = $state('free');
<\/script>

<RadioGroup.Root bind:value={plan} class="flex gap-4">
  <div class="flex items-center gap-2">
    <RadioGroup.Item value="free" id="free" />
    <Label for="free">Free</Label>
  </div>
  <div class="flex items-center gap-2">
    <RadioGroup.Item value="pro" id="pro" />
    <Label for="pro">Pro</Label>
  </div>
</RadioGroup.Root>`;
	const disabledCode = `<RadioGroup.Item value="team" id="team" disabled />`;
</script>

<Example title="Default" code={code}>
	<RadioGroup.Root bind:value={plan} class="flex gap-4">
		<div class="flex items-center gap-2">
			<RadioGroup.Item value="free" id="r-free" />
			<Label for="r-free" class="text-xs leading-4 text-foreground">Free</Label>
		</div>
		<div class="flex items-center gap-2">
			<RadioGroup.Item value="pro" id="r-pro" />
			<Label for="r-pro" class="text-xs leading-4 text-foreground">Pro</Label>
		</div>
	</RadioGroup.Root>
</Example>

<Example title="Disabled" code={disabledCode}>
	<div class="flex items-center gap-2">
		<RadioGroup.Root value="x"><RadioGroup.Item value="team" id="r-team" disabled /></RadioGroup.Root>
		<Label for="r-team" class="text-xs leading-4 text-foreground">Team</Label>
	</div>
</Example>
