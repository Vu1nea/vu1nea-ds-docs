<script lang="ts">
	import { cn } from '$lib/utils.js';

	let { code, class: className }: { code: string; class?: string } = $props();

	let copied = $state(false);

	const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	const token = /(\/\/.*$)|("[^"\n]*"|'[^'\n]*'|`[^`]*`)|(<\/?[A-Za-z][\w.]*)|(\b(?:import|from|let|const|as|type)\b)/gm;

	const html = $derived.by(() => {
		let out = '';
		let last = 0;
		for (const m of code.matchAll(token)) {
			out += esc(code.slice(last, m.index));
			const cls = m[1] ? 'text-(--grey-500)' : m[2] ? 'text-(--purple-300)' : m[3] ? 'text-(--blue-300)' : 'text-(--orange-300)';
			out += `<span class="${cls}">${esc(m[0])}</span>`;
			last = m.index + m[0].length;
		}
		return out + esc(code.slice(last));
	});

	async function copy() {
		try {
			await navigator.clipboard.writeText(code);
			copied = true;
			setTimeout(() => (copied = false), 1600);
		} catch {
			/* clipboard blocked: leave the button as is */
		}
	}
</script>

<div class={cn('group/code bg-(--grey-950) border-card relative overflow-hidden rounded-lg border', className)}>
	<button
		type="button"
		onclick={copy}
		class="text-(--grey-300) hover:text-foreground focus-visible:ring-ring/50 bg-(--grey-800) absolute top-2 right-2 rounded-md px-2.5 py-1 text-xs leading-4 opacity-0 transition-opacity outline-none group-hover/code:opacity-100 focus-visible:opacity-100 focus-visible:ring-3 [@media(hover:none)]:opacity-100"
	>
		{copied ? 'Copied' : 'Copy'}
	</button>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	<pre class="text-(--grey-200) overflow-x-auto p-4 text-[13px] leading-6"><code class="font-mono">{@html html}</code></pre>
</div>
