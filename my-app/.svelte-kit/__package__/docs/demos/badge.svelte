<script lang="ts">
	import Example from '../Example.svelte';
	import { Badge } from '$lib/components/ui/badge/index.js';

	const colors = ['purple', 'orange', 'blue', 'light'] as const;

	const lightCode = `<Badge color="purple">Label</Badge>
<Badge color="orange">Label</Badge>
<Badge color="blue">Label</Badge>
<Badge color="light">Label</Badge>`;
	const darkCode = `<Badge variant="dark" color="purple">Label</Badge>
<Badge variant="dark" color="orange">Label</Badge>
<Badge variant="dark" color="blue">Label</Badge>
<Badge variant="dark" color="light">Label</Badge>`;
	const extraCode = `<Badge rounded>Rounded</Badge>
<Badge indicator>With indicator</Badge>
<Badge href="/">As a link</Badge>`;
</script>

<Example title="Light" description="Bright fill, dark text." code={lightCode}>
	{#each colors as color}<Badge {color}>Label</Badge>{/each}
</Example>

<Example title="Dark" description="Dark fill, bright text." code={darkCode}>
	{#each colors as color}<Badge variant="dark" {color}>Label</Badge>{/each}
</Example>

<Example title="Rounded, indicator and link" code={extraCode}>
	<Badge rounded>Rounded</Badge>
	<Badge indicator>With indicator</Badge>
	<Badge href="/">As a link</Badge>
</Example>
