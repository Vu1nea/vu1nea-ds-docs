import { D as escape_html, T as attr, c as head, f as stringify, s as ensure_array_like, t as attr_class } from "../../../chunks/server.js";
import { n as entries, r as grouped } from "../../../chunks/registry.js";
import { t as CodeBlock } from "../../../chunks/CodeBlock.js";
// src/routes/(docs)/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const tokens = [
			{
				name: "Primary",
				css: "--primary",
				value: "#7f37ff",
				swatch: "bg-primary"
			},
			{
				name: "Orange",
				css: "--orange",
				value: "#cc4802",
				swatch: "bg-orange"
			},
			{
				name: "Blue",
				css: "--blue",
				value: "#2166d4",
				swatch: "bg-blue"
			},
			{
				name: "Card",
				css: "--card",
				value: "#272727",
				swatch: "bg-card"
			},
			{
				name: "Background",
				css: "--background",
				value: "#121212",
				swatch: "bg-background border border-card"
			},
			{
				name: "Destructive",
				css: "--destructive",
				value: "#ff2646",
				swatch: "bg-destructive"
			}
		];
		const usage = `<script lang="ts">
  import { Button } from '$lib/components/ui/button/index.js';
<\/script>

<Button color="purple" rounded>Get started</Button>`;
		head("3ef0v", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Introduction · Guinea Design Docs</title>`);
			});
		});
		$$renderer.push(`<article class="mx-auto flex max-w-3xl flex-col gap-12"><header class="flex flex-col gap-3"><p class="text-xs leading-4 font-medium tracking-wide text-(--purple-300) uppercase">Documentation</p> <h1 class="text-[32px] leading-9 font-bold">Guinea Design</h1> <p class="text-base leading-6 text-(--grey-300)">A dark-first component library for SvelteKit, built on bits-ui and Tailwind. ${escape_html(entries.length)} components, each with live examples, copyable code and a props reference.</p></header> <section class="flex flex-col gap-3"><h2 class="text-xl leading-7 font-bold">Usage</h2> <p class="text-sm leading-5 text-(--grey-300)">Every component lives in <code class="bg-card rounded px-1.5 py-0.5 font-mono text-[13px]">src/lib/components/ui</code>. Import it, use it.</p> `);
		CodeBlock($$renderer, { code: usage });
		$$renderer.push(`<!----></section> <section class="flex flex-col gap-3"><h2 class="text-xl leading-7 font-bold">Tokens</h2> <p class="text-sm leading-5 text-(--grey-300)">Color, radius and type come from CSS variables in <code class="bg-card rounded px-1.5 py-0.5 font-mono text-[13px]">routes/layout.css</code>. Change a token and every component follows.</p> <ul class="grid grid-cols-2 gap-3 sm:grid-cols-3"><!--[-->`);
		const each_array = ensure_array_like(tokens);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let t = each_array[$$index];
			$$renderer.push(`<li class="border-card flex items-center gap-3 rounded-lg border p-3"><span${attr_class(`size-10 shrink-0 rounded-md ${stringify(t.swatch)}`)} aria-hidden="true"></span> <span class="flex min-w-0 flex-col"><span class="text-sm leading-5 font-medium">${escape_html(t.name)}</span> <span class="truncate font-mono text-xs leading-4 text-(--grey-400)">${escape_html(t.css)} · ${escape_html(t.value)}</span></span></li>`);
		}
		$$renderer.push(`<!--]--></ul></section> <section class="flex flex-col gap-6"><h2 class="text-xl leading-7 font-bold">Components</h2> <!--[-->`);
		const each_array_1 = ensure_array_like(grouped);
		for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
			let g = each_array_1[$$index_2];
			$$renderer.push(`<div class="flex flex-col gap-3"><h3 class="text-xs leading-4 font-medium tracking-wide text-(--grey-400) uppercase">${escape_html(g.group)}</h3> <ul class="grid gap-3 sm:grid-cols-2"><!--[-->`);
			const each_array_2 = ensure_array_like(g.items);
			for (let $$index_1 = 0, $$length = each_array_2.length; $$index_1 < $$length; $$index_1++) {
				let item = each_array_2[$$index_1];
				$$renderer.push(`<li><a${attr("href", `/${stringify(item.slug)}`)} class="border-card hover:border-(--purple-400) hover:bg-card/50 focus-visible:ring-ring/50 flex h-full flex-col gap-1 rounded-lg border p-4 transition-colors outline-none focus-visible:ring-3"><span class="text-base leading-6 font-bold">${escape_html(item.title)}</span> <span class="text-sm leading-5 text-(--grey-300)">${escape_html(item.description.replace(/`/g, ""))}</span></a></li>`);
			}
			$$renderer.push(`<!--]--></ul></div>`);
		}
		$$renderer.push(`<!--]--></section></article>`);
	});
}
export { _page as default };
