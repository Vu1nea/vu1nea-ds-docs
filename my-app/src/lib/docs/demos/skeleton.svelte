<script lang="ts">
	import Example from '../Example.svelte';
	import { Skeleton } from '$lib/components/ui/skeleton/index.js';

	const code = `<Skeleton class="h-6 w-60" />`;
	const cardCode = `<div class="flex items-center gap-4">
  <Skeleton class="size-12 rounded-full" />
  <div class="flex flex-col gap-2">
    <Skeleton class="h-4 w-48" />
    <Skeleton class="h-4 w-32" />
  </div>
</div>`;
</script>

<Example title="Default" code={code}>
	<Skeleton class="h-6 w-60" />
</Example>

<Example title="Profile row" description="Match the shape of the content that will replace it." code={cardCode}>
	<div class="flex items-center gap-4">
		<Skeleton class="size-12 rounded-full" />
		<div class="flex flex-col gap-2">
			<Skeleton class="h-4 w-48" />
			<Skeleton class="h-4 w-32" />
		</div>
	</div>
</Example>
