<script lang="ts">
	import Example from '../Example.svelte';
	import { Progress } from '$lib/components/ui/progress/index.js';

	const code = `<Progress value={36} class="w-80" />`;
	const doneCode = `<Progress value={100} class="w-80" />`;
	const maxCode = `<Progress value={3} max={5} class="w-80" />`;
</script>

<Example title="Default" code={code}>
	<Progress value={36} class="w-80" aria-label="Upload progress" />
</Example>

<Example title="Complete" description="The bar turns green when value reaches max." code={doneCode}>
	<Progress value={100} class="w-80" aria-label="Complete" />
</Example>

<Example title="Custom max" code={maxCode}>
	<Progress value={3} max={5} class="w-80" aria-label="3 of 5" />
</Example>
