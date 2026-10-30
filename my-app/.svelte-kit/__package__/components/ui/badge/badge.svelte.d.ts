import { type VariantProps } from "tailwind-variants";
export declare const badgeVariants: import("tailwind-variants").TVReturnType<{
    variant: {
        light: "";
        dark: "";
    };
    color: {
        purple: "";
        orange: "";
        blue: "";
        light: "";
    };
    rounded: {
        false: "rounded-sm";
        true: "rounded-2xl";
    };
}, undefined, "gap-2 px-3 py-1.5 text-xs leading-4 font-medium transition-colors [&>svg]:size-3! group/badge inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap focus-visible:ring-[3px] focus-visible:ring-ring/50 [&>svg]:pointer-events-none", {
    variant: {
        light: "";
        dark: "";
    };
    color: {
        purple: "";
        orange: "";
        blue: "";
        light: "";
    };
    rounded: {
        false: "rounded-sm";
        true: "rounded-2xl";
    };
}, undefined, import("tailwind-variants").TVReturnTypeLike<{
    variant: {
        light: "";
        dark: "";
    };
    color: {
        purple: "";
        orange: "";
        blue: "";
        light: "";
    };
    rounded: {
        false: "rounded-sm";
        true: "rounded-2xl";
    };
}, undefined>>;
export type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];
export type BadgeColor = VariantProps<typeof badgeVariants>["color"];
import { type WithElementRef } from "$lib/utils.js";
import type { HTMLAnchorAttributes } from "svelte/elements";
type $$ComponentProps = WithElementRef<HTMLAnchorAttributes> & {
    variant?: BadgeVariant;
    color?: BadgeColor;
    rounded?: boolean;
    indicator?: boolean;
};
declare const Badge: import("svelte").Component<$$ComponentProps, {}, "ref">;
type Badge = ReturnType<typeof Badge>;
export default Badge;
