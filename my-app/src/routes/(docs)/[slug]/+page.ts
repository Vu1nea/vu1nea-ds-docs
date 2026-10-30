import { error } from '@sveltejs/kit';
import { bySlug } from '$lib/docs/registry.js';

export function load({ params }) {
	const entry = bySlug(params.slug);
	if (!entry) error(404, 'Component not found');
	return { slug: entry.slug };
}
