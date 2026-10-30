<script lang="ts">
	import Example from '../Example.svelte';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	const basicCode = `<Label for="name">Username</Label>
<Input id="name" placeholder="e.g John Doe" />
<p class="text-xs leading-4 text-(--grey-400)">What's your name?</p>`;
	const errorCode = `<Label for="email">Email</Label>
<Input id="email" aria-invalid="true" value="not-an-email" />
<p class="text-xs leading-4 text-(--danger-300)">Enter a valid email address.</p>`;
	const disabledCode = `<Label for="off">Disabled</Label>
<Input id="off" placeholder="Disabled" disabled />`;
</script>

<Example title="Default" code={basicCode}>
	<div class="flex w-60 flex-col gap-1">
		<Label for="d-name">Username <span class="text-destructive">*</span></Label>
		<Input id="d-name" placeholder="e.g John Doe" />
		<p class="text-xs leading-4 text-(--grey-400)">What's your name?</p>
	</div>
</Example>

<Example title="Error" description="Set aria-invalid and show the message below, in the danger color." code={errorCode}>
	<div class="flex w-60 flex-col gap-1">
		<Label for="d-email">Email</Label>
		<Input id="d-email" aria-invalid="true" value="not-an-email" />
		<p class="text-xs leading-4 text-(--danger-300)">Enter a valid email address.</p>
	</div>
</Example>

<Example title="Disabled" code={disabledCode}>
	<div class="flex w-60 flex-col gap-1">
		<Label for="d-off">Disabled</Label>
		<Input id="d-off" placeholder="Disabled" disabled />
	</div>
</Example>
