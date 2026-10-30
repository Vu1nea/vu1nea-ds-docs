<script lang="ts">
	import CodeBlock from '$lib/docs/CodeBlock.svelte';

	const install = 'npm i @vu1nea/guinea-design';

	const peers = 'npm i svelte bits-ui @internationalized/date svelte-sonner @lucide/svelte tailwindcss';

	const css = `@import 'tailwindcss';
@import '@vu1nea/guinea-design/theme.css';

@source '../node_modules/@vu1nea/guinea-design/dist';`;

	const usage = `<script lang="ts">
  import { Button } from '@vu1nea/guinea-design';
<\/script>

<Button color="purple" rounded>Get started</Button>`;

	const subpath = `import { Button } from '@vu1nea/guinea-design/ui/button';`;
</script>

<svelte:head><title>Installation · Guinea Design Docs</title></svelte:head>

<article class="mx-auto flex max-w-3xl flex-col gap-12">
	<header class="flex flex-col gap-3">
		<p class="text-xs leading-4 font-medium tracking-wide text-(--purple-300) uppercase">Getting started</p>
		<h1 class="text-[32px] leading-9 font-bold">Installation</h1>
		<p class="text-base leading-6 text-(--grey-300)">Add Guinea Design to a SvelteKit project with npm.</p>
	</header>

	<section class="flex flex-col gap-3">
		<h2 class="text-xl leading-7 font-bold">Install the package</h2>
		<CodeBlock code={install} />
	</section>

	<section class="flex flex-col gap-3">
		<h2 class="text-xl leading-7 font-bold">Peer dependencies</h2>
		<p class="text-sm leading-5 text-(--grey-300)">Requires Svelte 5 and Tailwind 4. Install any peers your project is missing.</p>
		<CodeBlock code={peers} />
	</section>

	<section class="flex flex-col gap-3">
		<h2 class="text-xl leading-7 font-bold">Add the theme</h2>
		<p class="text-sm leading-5 text-(--grey-300)">
			Import the theme in your global stylesheet after Tailwind. The <code class="bg-card rounded px-1.5 py-0.5 font-mono text-[13px]">@source</code> line lets Tailwind see the classes used inside the components.
		</p>
		<CodeBlock code={css} />
	</section>

	<section class="flex flex-col gap-3">
		<h2 class="text-xl leading-7 font-bold">Use a component</h2>
		<CodeBlock code={usage} />
		<p class="text-sm leading-5 text-(--grey-300)">Prefer per-component imports? Use the subpath form.</p>
		<CodeBlock code={subpath} />
	</section>
</article>
