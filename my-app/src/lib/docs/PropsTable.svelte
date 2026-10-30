<script lang="ts">
	import type { PropTable } from './registry.js';

	let { tables }: { tables: PropTable[] } = $props();
</script>

<div class="flex flex-col gap-6">
	{#each tables as table}
		<div class="flex flex-col gap-2">
			{#if table.title}<h3 class="font-mono text-sm leading-5 font-bold">{table.title}</h3>{/if}
			<div class="border-card overflow-x-auto rounded-lg border">
				<table class="w-full min-w-[560px] border-collapse text-left text-sm leading-5">
					<thead>
						<tr class="border-card bg-card/50 border-b text-xs text-(--grey-300)">
							<th scope="col" class="px-4 py-2.5 font-medium">Prop</th>
							<th scope="col" class="px-4 py-2.5 font-medium">Type</th>
							<th scope="col" class="px-4 py-2.5 font-medium">Default</th>
							<th scope="col" class="px-4 py-2.5 font-medium">Description</th>
						</tr>
					</thead>
					<tbody>
						{#each table.rows as row}
							<tr class="border-card border-b align-top last:border-b-0">
								<td class="px-4 py-3 font-mono text-[13px] text-(--purple-300)">{row.name}</td>
								<td class="px-4 py-3 font-mono text-xs text-(--blue-300)">{row.type}</td>
								<td class="px-4 py-3 font-mono text-xs text-(--grey-300)">{row.default ?? '—'}</td>
								<td class="px-4 py-3 text-(--grey-200)">{row.description}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	{/each}
</div>
