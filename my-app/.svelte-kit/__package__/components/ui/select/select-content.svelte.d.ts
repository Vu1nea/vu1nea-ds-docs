import { Select as SelectPrimitive } from "bits-ui";
import { type WithoutChild } from "$lib/utils.js";
import type { WithoutChildrenOrChild } from "$lib/utils.js";
import SelectPortal from "./select-portal.svelte";
import type { ComponentProps } from "svelte";
type $$ComponentProps = WithoutChild<SelectPrimitive.ContentProps> & {
    portalProps?: WithoutChildrenOrChild<ComponentProps<typeof SelectPortal>>;
};
declare const SelectContent: import("svelte").Component<$$ComponentProps, {}, "ref">;
type SelectContent = ReturnType<typeof SelectContent>;
export default SelectContent;
