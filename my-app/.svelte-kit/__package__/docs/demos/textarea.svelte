<script lang="ts">
	import Example from '../Example.svelte';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	const basicCode = `<Label for="bio">Bio</Label>
<Textarea id="bio" placeholder="Tell us about yourself" />
<p class="text-xs leading-4 text-(--grey-400)">Max 200 characters.</p>`;
	const errorCode = `<Textarea aria-invalid="true" value="Too short" />`;
	const disabledCode = `<Textarea disabled placeholder="Disabled" />`;
</script>

<Example title="Default" code={basicCode}>
	<div class="flex w-72 flex-col gap-1">
		<Label for="t-bio">Bio</Label>
		<Textarea id="t-bio" placeholder="Tell us about yourself" />
		<p class="text-xs leading-4 text-(--grey-400)">Max 200 characters.</p>
	</div>
</Example>

<Example title="Error" code={errorCode}>
	<Textarea class="w-72" aria-invalid="true" value="Too short" />
</Example>

<Example title="Disabled" code={disabledCode}>
	<Textarea class="w-72" disabled placeholder="Disabled" />
</Example>
