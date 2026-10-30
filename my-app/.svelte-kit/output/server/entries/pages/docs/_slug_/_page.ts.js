import { t as bySlug } from "../../../../chunks/registry.js";
import { error } from "@sveltejs/kit";
// src/routes/docs/[slug]/+page.ts
function load({ params }) {
	const entry = bySlug(params.slug);
	if (!entry) error(404, "Component not found");
	return { slug: entry.slug };
}
export { load };
