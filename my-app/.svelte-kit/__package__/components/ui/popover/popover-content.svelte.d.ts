import { Popover as PopoverPrimitive } from "bits-ui";
import { type WithoutChildrenOrChild } from "$lib/utils.js";
import PopoverPortal from "./popover-portal.svelte";
import type { ComponentProps } from "svelte";
type $$ComponentProps = PopoverPrimitive.ContentProps & {
    portalProps?: WithoutChildrenOrChild<ComponentProps<typeof PopoverPortal>>;
};
declare const PopoverContent: import("svelte").Component<$$ComponentProps, {}, "ref">;
type PopoverContent = ReturnType<typeof PopoverContent>;
export default PopoverContent;
