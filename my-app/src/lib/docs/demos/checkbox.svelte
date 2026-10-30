<script lang="ts">
	import Example from '../Example.svelte';
	import { Checkbox } from '$lib/components/ui/checkbox/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	let agreed = $state(true);
	let items = $state([true, false, false]);
	const all = $derived(items.every(Boolean));
	const some = $derived(items.some(Boolean) && !all);

	const basicCode = `<script lang="ts">
  let agreed = $state(true);
<\/script>

<Checkbox id="terms" bind:checked={agreed} />
<Label for="terms">Accept terms</Label>`;
	const stateCode = `<Checkbox id="a" indeterminate />
<Checkbox id="b" disabled />
<Checkbox id="c" aria-invalid="true" />`;
	const groupCode = `<Checkbox
  checked={all}
  indeterminate={some}
  onCheckedChange={(v) => (items = items.map(() => v))}
/>
{#each items as _, i}
  <Checkbox bind:checked={items[i]} />
{/each}`;
</script>

<Example title="Default" code={basicCode}>
	<div class="flex items-center gap-2">
		<Checkbox id="k-terms" bind:checked={agreed} />
		<Label for="k-terms" class="text-xs leading-4 text-foreground">Accept terms</Label>
	</div>
</Example>

<Example title="States" code={stateCode}>
	<div class="flex items-center gap-2"><Checkbox id="k-a" indeterminate /><Label for="k-a" class="text-xs leading-4 text-foreground">Indeterminate</Label></div>
	<div class="flex items-center gap-2"><Checkbox id="k-b" disabled /><Label for="k-b" class="text-xs leading-4 text-foreground">Disabled</Label></div>
	<div class="flex items-center gap-2"><Checkbox id="k-c" aria-invalid="true" /><Label for="k-c" class="text-xs leading-4 text-foreground">Invalid</Label></div>
</Example>

<Example title="Parent and children" description="The parent shows a dash when only some children are checked." code={groupCode}>
	<div class="flex flex-col gap-3">
		<div class="flex items-center gap-2">
			<Checkbox id="k-all" checked={all} indeterminate={some} onCheckedChange={(v) => (items = items.map(() => v))} />
			<Label for="k-all" class="text-xs leading-4 font-bold text-foreground">Select all</Label>
		</div>
		{#each items as _, i}
			<div class="ml-7 flex items-center gap-2">
				<Checkbox id="k-{i}" bind:checked={items[i]} />
				<Label for="k-{i}" class="text-xs leading-4 text-foreground">Option {i + 1}</Label>
			</div>
		{/each}
	</div>
</Example>
