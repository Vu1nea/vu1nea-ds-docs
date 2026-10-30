<script lang="ts">
	import Example from '../Example.svelte';
	import { Alert, AlertDescription } from '$lib/components/ui/alert/index.js';
	import { Icon } from '$lib/components/ui/icon/index.js';

	const code = `<Alert variant="success">
  <Icon name="check-circle" />
  <AlertDescription>You've been successfully logged in!</AlertDescription>
</Alert>
<Alert variant="info">
  <Icon name="info" />
  <AlertDescription>You have permissions to do this!</AlertDescription>
</Alert>
<Alert variant="warning">
  <Icon name="warning" />
  <AlertDescription>Your password is insecure</AlertDescription>
</Alert>
<Alert variant="destructive">
  <Icon name="dangerous" />
  <AlertDescription>This will delete all files</AlertDescription>
</Alert>`;
</script>

<Example title="Variants" description="Pair each variant with its icon. The icon carries the color cue." code={code} class="flex-col items-stretch">
	<Alert variant="success"><Icon name="check-circle" /><AlertDescription>You've been successfully logged in!</AlertDescription></Alert>
	<Alert variant="info"><Icon name="info" /><AlertDescription>You have permissions to do this!</AlertDescription></Alert>
	<Alert variant="warning"><Icon name="warning" /><AlertDescription>Your password is insecure</AlertDescription></Alert>
	<Alert variant="destructive"><Icon name="dangerous" /><AlertDescription>This will delete all files</AlertDescription></Alert>
</Example>
