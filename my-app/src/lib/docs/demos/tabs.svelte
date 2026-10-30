<script lang="ts">
	import Example from '../Example.svelte';
	import * as Tabs from '$lib/components/ui/tabs/index.js';

	let tab = $state('overview');

	const code = `<script lang="ts">
  let tab = $state('overview');
<\/script>

<Tabs.Root bind:value={tab}>
  <Tabs.List>
    <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
    <Tabs.Trigger value="activity">Activity</Tabs.Trigger>
    <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="overview">Overview content.</Tabs.Content>
  <Tabs.Content value="activity">Activity content.</Tabs.Content>
  <Tabs.Content value="settings">Settings content.</Tabs.Content>
</Tabs.Root>`;
	const disabledCode = `<Tabs.Trigger value="billing" disabled>Billing</Tabs.Trigger>`;
</script>

<Example title="Default" description="Arrow keys move between tabs." code={code} class="items-start">
	<Tabs.Root bind:value={tab} class="w-full max-w-md">
		<Tabs.List>
			<Tabs.Trigger value="overview">Overview</Tabs.Trigger>
			<Tabs.Trigger value="activity">Activity</Tabs.Trigger>
			<Tabs.Trigger value="settings">Settings</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="overview">Overview content.</Tabs.Content>
		<Tabs.Content value="activity">Activity content.</Tabs.Content>
		<Tabs.Content value="settings">Settings content.</Tabs.Content>
	</Tabs.Root>
</Example>

<Example title="Disabled tab" code={disabledCode} class="items-start">
	<Tabs.Root value="a" class="w-full max-w-md">
		<Tabs.List>
			<Tabs.Trigger value="a">General</Tabs.Trigger>
			<Tabs.Trigger value="billing" disabled>Billing</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="a">General content.</Tabs.Content>
	</Tabs.Root>
</Example>
