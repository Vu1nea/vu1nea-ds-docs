<script lang="ts">
	import Example from '../Example.svelte';
	import { Switch } from '$lib/components/ui/switch/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	let notify = $state(true);

	const code = `<script lang="ts">
  let notify = $state(true);
<\/script>

<Switch id="notify" bind:checked={notify} />
<Label for="notify">Notifications</Label>`;
	const disabledCode = `<Switch id="off" disabled />
<Switch id="off-on" disabled checked />`;
</script>

<Example title="Default" code={code}>
	<div class="flex items-center gap-3">
		<Switch id="w-notify" bind:checked={notify} />
		<Label for="w-notify" class="text-xs leading-4 text-foreground">Notifications {notify ? 'on' : 'off'}</Label>
	</div>
</Example>

<Example title="Disabled" code={disabledCode}>
	<Switch id="w-off" disabled aria-label="Disabled off" />
	<Switch id="w-off-on" disabled checked aria-label="Disabled on" />
</Example>
