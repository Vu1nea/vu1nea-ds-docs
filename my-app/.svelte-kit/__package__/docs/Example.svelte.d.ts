import type { Snippet } from 'svelte';
type $$ComponentProps = {
    title: string;
    description?: string;
    code: string;
    children: Snippet;
    /** Classes for the preview area. */
    class?: string;
};
declare const Example: import("svelte").Component<$$ComponentProps, {}, "">;
type Example = ReturnType<typeof Example>;
export default Example;
