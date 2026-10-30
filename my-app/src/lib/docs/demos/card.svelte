<script lang="ts">
	import Example from '../Example.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';

	const basicCode = `<Card.Root class="w-full max-w-sm">
  <Card.Header>
    <Card.Title class="text-2xl leading-7 font-bold">Title Here</Card.Title>
    <Card.Description class="text-sm leading-5 text-foreground">Subheading</Card.Description>
  </Card.Header>
  <Card.Content class="text-xs leading-4 text-(--grey-300)">
    Body copy goes here.
  </Card.Content>
</Card.Root>`;
	const actionCode = `<Card.Root class="w-full max-w-sm">
  <Card.Header>
    <Card.Title>Weekly goal</Card.Title>
    <Card.Description>5 of 7 days</Card.Description>
    <Card.Action><Badge>On track</Badge></Card.Action>
  </Card.Header>
  <Card.Footer class="gap-2">
    <Button variant="outline" color="light">Details</Button>
    <Button>Log today</Button>
  </Card.Footer>
</Card.Root>`;
	const smallCode = `<Card.Root size="sm" class="w-full max-w-sm">
  <Card.Header><Card.Title>Compact</Card.Title></Card.Header>
  <Card.Content>Tighter 16px spacing.</Card.Content>
</Card.Root>`;
</script>

<Example title="Default" code={basicCode}>
	<Card.Root class="w-full max-w-sm">
		<Card.Header>
			<Card.Title class="text-2xl leading-7 font-bold">Title Here</Card.Title>
			<Card.Description class="text-sm leading-5 text-foreground">Subheading</Card.Description>
		</Card.Header>
		<Card.Content class="text-xs leading-4 text-(--grey-300)">Body copy goes here.</Card.Content>
	</Card.Root>
</Example>

<Example title="With action and footer" code={actionCode}>
	<Card.Root class="w-full max-w-sm">
		<Card.Header>
			<Card.Title>Weekly goal</Card.Title>
			<Card.Description>5 of 7 days</Card.Description>
			<Card.Action><Badge>On track</Badge></Card.Action>
		</Card.Header>
		<Card.Footer class="gap-2">
			<Button variant="outline" color="light">Details</Button>
			<Button>Log today</Button>
		</Card.Footer>
	</Card.Root>
</Example>

<Example title="Small" code={smallCode}>
	<Card.Root size="sm" class="w-full max-w-sm">
		<Card.Header><Card.Title>Compact</Card.Title></Card.Header>
		<Card.Content>Tighter 16px spacing.</Card.Content>
	</Card.Root>
</Example>
