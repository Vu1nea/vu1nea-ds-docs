<script lang="ts">
	import Example from '../Example.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { flag } from '$lib/components/ui/flag/index.js';

	const code = `<Button variant="outline" color="blue" onclick={() => flag('info', 'This is the button')}>Info</Button>
<Button variant="outline" color="light" onclick={() => flag('success', 'A new feature was added!')}>Success</Button>
<Button variant="outline" color="orange" onclick={() => flag('warning', 'Are you sure?')}>Warning</Button>
<Button variant="outline" color="error" onclick={() => flag('danger', 'You will delete this!')}>Danger</Button>`;
	const setupCode = `<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import { Toaster } from '$lib/components/ui/sonner/index.js';
<\/script>

{@render children()}
<Toaster position="bottom-right" />`;
</script>

<Example title="Types" description="Click to show a toast. It closes itself after the duration." code={code}>
	<Button variant="outline" color="blue" onclick={() => flag('info', 'This is the button')}>Info</Button>
	<Button variant="outline" color="light" onclick={() => flag('success', 'A new feature was added!')}>Success</Button>
	<Button variant="outline" color="orange" onclick={() => flag('warning', 'Are you sure?')}>Warning</Button>
	<Button variant="outline" color="error" onclick={() => flag('danger', 'You will delete this!')}>Danger</Button>
</Example>

<Example title="Setup" description="Mount the Toaster once in the root layout." code={setupCode}>
	<p class="text-sm leading-5 text-(--grey-300)">Already done in this project's root layout.</p>
</Example>
