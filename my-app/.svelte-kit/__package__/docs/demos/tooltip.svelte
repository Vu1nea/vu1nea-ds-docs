<script lang="ts">
	import Example from '../Example.svelte';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	const code = `<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger>
      {#snippet child({ props })}
        <Button {...props} variant="outline" color="light">Hover me</Button>
      {/snippet}
    </Tooltip.Trigger>
    <Tooltip.Content>Helpful hint</Tooltip.Content>
  </Tooltip.Root>
</Tooltip.Provider>`;
	const sideCode = `<Tooltip.Content side="right">Shows on the right</Tooltip.Content>`;
	const sides = ['top', 'right', 'bottom', 'left'] as const;
</script>

<Example title="Default" description="Shows on hover and keyboard focus. Keep the text to a short phrase." code={code}>
	<Tooltip.Provider>
		<Tooltip.Root>
			<Tooltip.Trigger>
				{#snippet child({ props })}
					<Button {...props} variant="outline" color="light">Hover me</Button>
				{/snippet}
			</Tooltip.Trigger>
			<Tooltip.Content>Helpful hint</Tooltip.Content>
		</Tooltip.Root>
	</Tooltip.Provider>
</Example>

<Example title="Sides" code={sideCode}>
	<Tooltip.Provider>
		{#each sides as side}
			<Tooltip.Root>
				<Tooltip.Trigger>
					{#snippet child({ props })}
						<Button {...props} variant="outline" color="light" class="capitalize">{side}</Button>
					{/snippet}
				</Tooltip.Trigger>
				<Tooltip.Content {side}>Shows on the {side}</Tooltip.Content>
			</Tooltip.Root>
		{/each}
	</Tooltip.Provider>
</Example>
