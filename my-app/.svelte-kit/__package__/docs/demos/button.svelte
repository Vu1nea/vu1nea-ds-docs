<script lang="ts">
	import Example from '../Example.svelte';
	import { Button } from '$lib/components/ui/button/index.js';

	const colors = ['purple', 'orange', 'blue', 'light', 'error'] as const;
	const variants = ['default', 'outline', 'secondary', 'ghost', 'destructive', 'link'] as const;

	const colorCode = `<Button color="purple">Submit</Button>
<Button color="orange">Submit</Button>
<Button color="blue">Submit</Button>
<Button color="light">Submit</Button>
<Button color="error">Submit</Button>`;
	const outlineCode = `<Button variant="outline" color="purple">Submit</Button>
<Button variant="outline" color="orange">Submit</Button>
<Button variant="outline" color="blue">Submit</Button>
<Button variant="outline" color="light">Submit</Button>
<Button variant="outline" color="error">Submit</Button>`;
	const variantCode = `<Button variant="default">Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>`;
	const shapeCode = `<Button>Square</Button>
<Button rounded>Rounded</Button>
<Button size="lg">Large</Button>
<Button disabled>Disabled</Button>`;
</script>

<Example title="Colors" description="Filled buttons in each brand color. Labels stay white (or dark on light) in every state." code={colorCode}>
	{#each colors as color}<Button {color}>Submit</Button>{/each}
</Example>

<Example title="Outline" description="Border keeps the brand color. Text is lifted a step so it clears 4.5:1 on dark." code={outlineCode}>
	{#each colors as color}<Button variant="outline" {color}>Submit</Button>{/each}
</Example>

<Example title="Variants" code={variantCode}>
	{#each variants as variant}<Button {variant} class="capitalize">{variant}</Button>{/each}
</Example>

<Example title="Shape and size" code={shapeCode}>
	<Button>Square</Button>
	<Button rounded>Rounded</Button>
	<Button size="lg">Large</Button>
	<Button disabled>Disabled</Button>
</Example>
