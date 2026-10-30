import { D as escape_html, E as clsx, a as derived, m as html, t as attr_class } from "./server.js";
import { t as cn } from "./utils2.js";
// src/lib/docs/CodeBlock.svelte
function CodeBlock($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { code, class: className } = $$props;
		const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
		const token = /(\/\/.*$)|("[^"\n]*"|'[^'\n]*'|`[^`]*`)|(<\/?[A-Za-z][\w.]*)|(\b(?:import|from|let|const|as|type)\b)/gm;
		const html$1 = derived(() => {
			let out = "";
			let last = 0;
			for (const m of code.matchAll(token)) {
				out += esc(code.slice(last, m.index));
				const cls = m[1] ? "text-(--grey-500)" : m[2] ? "text-(--purple-300)" : m[3] ? "text-(--blue-300)" : "text-(--orange-300)";
				out += `<span class="${cls}">${esc(m[0])}</span>`;
				last = m.index + m[0].length;
			}
			return out + esc(code.slice(last));
		});
		$$renderer.push(`<div${attr_class(clsx(cn("group/code bg-(--grey-950) border-card relative overflow-hidden rounded-lg border", className)))}><button type="button" class="text-(--grey-300) hover:text-foreground focus-visible:ring-ring/50 bg-(--grey-800) absolute top-2 right-2 rounded-md px-2.5 py-1 text-xs leading-4 opacity-0 transition-opacity outline-none group-hover/code:opacity-100 focus-visible:opacity-100 focus-visible:ring-3 [@media(hover:none)]:opacity-100">${escape_html("Copy")}</button> <pre class="text-(--grey-200) overflow-x-auto p-4 text-[13px] leading-6"><code class="font-mono">${html(html$1())}</code></pre></div>`);
	});
}
export { CodeBlock as t };
