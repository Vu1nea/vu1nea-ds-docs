<script lang="ts">
	import Example from '../Example.svelte';
	import { Menu, MenuItem } from '$lib/components/ui/menu/index.js';
	import { Icon } from '$lib/components/ui/icon/index.js';

	const code = `<Menu class="h-[420px]">
  {#snippet header()}Mushpoint{/snippet}
  <MenuItem href="#home" active>
    {#snippet icon()}<Icon name="home" />{/snippet}Home
  </MenuItem>
  <MenuItem href="#goals">
    {#snippet icon()}<Icon name="target" />{/snippet}Goals
  </MenuItem>
  <MenuItem href="#ideas">
    {#snippet icon()}<Icon name="idea" />{/snippet}Idea Vault
  </MenuItem>
  {#snippet footer()}
    <span class="flex-1 text-sm font-bold">Vinodh Gnanakkan</span>
  {/snippet}
</Menu>`;
</script>

<Example title="Default" description="Mark the current page with active. It sets aria-current." code={code}>
	<Menu class="h-[420px]">
		{#snippet header()}Mushpoint{/snippet}
		<MenuItem href="#home" active>{#snippet icon()}<Icon name="home" />{/snippet}Home</MenuItem>
		<MenuItem href="#goals">{#snippet icon()}<Icon name="target" />{/snippet}Goals</MenuItem>
		<MenuItem href="#ideas">{#snippet icon()}<Icon name="idea" />{/snippet}Idea Vault</MenuItem>
		{#snippet footer()}
			<span class="bg-card grid size-10 place-items-center rounded-full text-sm font-bold" aria-hidden="true">VG</span>
			<span class="flex-1 text-sm leading-5 font-bold">Vinodh Gnanakkan</span>
			<Icon name="arrow-down" />
		{/snippet}
	</Menu>
</Example>
