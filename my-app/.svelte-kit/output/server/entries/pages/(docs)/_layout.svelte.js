import { D as escape_html, E as clsx, T as attr, a as derived, c as head, f as stringify, s as ensure_array_like, t as attr_class } from "../../../chunks/server.js";
import { n as afterNavigate, t as page } from "../../../chunks/state.js";
import { t as cn } from "../../../chunks/utils2.js";
import { n as entries, r as grouped } from "../../../chunks/registry.js";
// src/routes/(docs)/+layout.svelte
function _layout($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { children } = $$props;
		let query = "";
		let navOpen = false;
		derived(() => query.trim() ? entries.filter((e) => (e.title + " " + e.description + " " + e.group).toLowerCase().includes(query.trim().toLowerCase())).slice(0, 8) : []);
		afterNavigate(() => {
			navOpen = false;
			query = "";
		});
		const isActive = (slug) => page.url.pathname === `/${slug}`;
		head("gsrtws", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Guinea Design Docs</title>`);
			});
		});
		$$renderer.push(`<a href="#main" class="bg-primary text-foreground sr-only z-50 rounded-md px-4 py-2 focus:not-sr-only focus:fixed focus:top-2 focus:left-2">Skip to content</a> <header class="border-card bg-background/90 sticky top-0 z-30 flex h-16 items-center gap-4 border-b px-4 backdrop-blur md:px-6"><button type="button" class="text-foreground hover:bg-(--grey-800) focus-visible:ring-ring/50 -ml-2 grid size-10 place-items-center rounded-md outline-none focus-visible:ring-3 lg:hidden"${attr("aria-label", navOpen ? "Close navigation" : "Open navigation")}${attr("aria-expanded", navOpen)} aria-controls="docs-nav"><svg viewBox="0 0 24 24" fill="currentColor" class="size-6" aria-hidden="true"><path${attr("d", navOpen ? "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" : "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z")}></path></svg></button> <a href="/" class="focus-visible:ring-ring/50 flex items-center gap-2 rounded-md text-lg leading-6 font-bold outline-none focus-visible:ring-3"><span class="bg-primary grid size-7 place-items-center rounded-md text-sm" aria-hidden="true">G</span> Guinea Design <span class="text-xs font-medium text-(--grey-400)">Docs</span></a> <div class="relative mx-auto w-full max-w-md"><label for="docs-search" class="sr-only">Search components</label> <input id="docs-search"${attr("value", query)} type="search" autocomplete="off" placeholder="Search components" class="bg-card/60 hover:bg-card focus-visible:bg-card h-10 w-full rounded-lg border border-transparent px-3 pr-14 text-sm leading-5 transition-colors outline-none placeholder:text-(--grey-400) focus-visible:border-(--purple-400)"/> <kbd class="pointer-events-none absolute top-1/2 right-3 hidden -translate-y-1/2 rounded border border-(--grey-600) px-1.5 py-0.5 font-sans text-[11px] leading-4 text-(--grey-400) sm:block">Ctrl K</kbd> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> <a href="/playground" class="text-(--grey-300) hover:text-foreground hidden shrink-0 rounded-md text-sm leading-5 outline-none focus-visible:underline sm:block">Playground</a></header> <div class="mx-auto flex max-w-[90rem]"><nav id="docs-nav" aria-label="Components"${attr_class(clsx(cn("border-card bg-background fixed top-16 bottom-0 left-0 z-20 w-72 overflow-y-auto border-r px-4 py-6 transition-transform duration-200 motion-reduce:transition-none lg:sticky lg:h-[calc(100vh-4rem)] lg:translate-x-0", navOpen ? "translate-x-0" : "-translate-x-full")))}><a href="/"${attr("aria-current", page.url.pathname === "/" ? "page" : void 0)} class="hover:bg-(--grey-800)/50 aria-[current=page]:bg-card focus-visible:ring-ring/50 mb-6 block rounded-md px-3 py-2 text-sm leading-5 font-medium outline-none focus-visible:ring-3">Introduction</a> <!--[-->`);
		const each_array_1 = ensure_array_like(grouped);
		for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
			let g = each_array_1[$$index_2];
			$$renderer.push(`<div class="mb-6"><h2 class="mb-1 px-3 text-xs leading-4 font-medium tracking-wide text-(--grey-400) uppercase">${escape_html(g.group)}</h2> <ul class="flex flex-col gap-0.5"><!--[-->`);
			const each_array_2 = ensure_array_like(g.items);
			for (let $$index_1 = 0, $$length = each_array_2.length; $$index_1 < $$length; $$index_1++) {
				let item = each_array_2[$$index_1];
				$$renderer.push(`<li><a${attr("href", `/${stringify(item.slug)}`)}${attr("aria-current", isActive(item.slug) ? "page" : void 0)} class="hover:bg-(--grey-800)/50 aria-[current=page]:bg-card aria-[current=page]:text-(--purple-300) focus-visible:ring-ring/50 block rounded-md px-3 py-1.5 text-sm leading-5 text-(--grey-200) outline-none focus-visible:ring-3 aria-[current=page]:font-medium">${escape_html(item.title)}</a></li>`);
			}
			$$renderer.push(`<!--]--></ul></div>`);
		}
		$$renderer.push(`<!--]--></nav> `);
		if (navOpen) $$renderer.push(`<!--[0--><button type="button" aria-label="Close navigation" class="fixed inset-0 top-16 z-10 bg-black/50 lg:hidden"></button>`);
		else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <main id="main" class="min-w-0 flex-1 px-4 py-10 md:px-10">`);
		children($$renderer);
		$$renderer.push(`<!----></main></div>`);
	});
}
export { _layout as default };
