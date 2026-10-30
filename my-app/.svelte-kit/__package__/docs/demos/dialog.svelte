<script lang="ts">
	import Example from '../Example.svelte';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	const code = `<Dialog.Root>
  <Dialog.Trigger>
    {#snippet child({ props })}
      <Button {...props} variant="outline" color="light" rounded>Open modal</Button>
    {/snippet}
  </Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Header class="px-4 pt-6">
      <Dialog.Title>Duplicate this Page</Dialog.Title>
      <Dialog.Description>You can duplicate this page with these instructions:</Dialog.Description>
    </Dialog.Header>
    <Dialog.Footer class="p-3">
      <Dialog.Close>
        {#snippet child({ props })}
          <Button {...props} variant="outline" color="light" rounded>Cancel</Button>
        {/snippet}
      </Dialog.Close>
      <Button rounded>Duplicate</Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>`;
</script>

<Example title="Default" description="Escape and the overlay both close it. Focus returns to the trigger." code={code}>
	<Dialog.Root>
		<Dialog.Trigger>
			{#snippet child({ props })}
				<Button {...props} variant="outline" color="light" rounded>Open modal</Button>
			{/snippet}
		</Dialog.Trigger>
		<Dialog.Content>
			<Dialog.Header class="px-4 pt-6">
				<Dialog.Title>Duplicate this Page</Dialog.Title>
				<Dialog.Description>You can duplicate this page with these instructions:</Dialog.Description>
			</Dialog.Header>
			<Dialog.Footer class="p-3">
				<Dialog.Close>
					{#snippet child({ props })}
						<Button {...props} variant="outline" color="light" rounded>Cancel</Button>
					{/snippet}
				</Dialog.Close>
				<Button rounded>Duplicate</Button>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
</Example>
