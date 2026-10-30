import { type VariantProps } from "tailwind-variants";
import { type WithElementRef } from "$lib/utils.js";
import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";
export declare const buttonVariants: import("tailwind-variants").TVReturnType<{
    variant: {
        default: "";
        outline: "border bg-transparent hover:bg-current/10 active:bg-current/20";
        secondary: "bg-secondary text-secondary-foreground hover:bg-(--grey-500)";
        ghost: "hover:bg-(--grey-700) hover:text-foreground active:bg-(--grey-600)";
        destructive: "";
        link: "text-primary underline-offset-4 hover:underline";
    };
    color: {
        purple: "";
        orange: "";
        blue: "";
        light: "";
        error: "";
    };
    size: {
        default: "gap-2.5 px-4 py-3 text-sm leading-5";
        lg: "gap-2.5 px-6 py-3.5 text-base";
        icon: "size-11";
        "icon-lg": "size-12";
    };
    rounded: {
        false: "rounded-md";
        true: "rounded-full";
    };
}, undefined, "focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive font-normal focus-visible:ring-3 aria-invalid:ring-3 [&_svg:not([class*='size-'])]:size-4 group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-colors outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", {
    variant: {
        default: "";
        outline: "border bg-transparent hover:bg-current/10 active:bg-current/20";
        secondary: "bg-secondary text-secondary-foreground hover:bg-(--grey-500)";
        ghost: "hover:bg-(--grey-700) hover:text-foreground active:bg-(--grey-600)";
        destructive: "";
        link: "text-primary underline-offset-4 hover:underline";
    };
    color: {
        purple: "";
        orange: "";
        blue: "";
        light: "";
        error: "";
    };
    size: {
        default: "gap-2.5 px-4 py-3 text-sm leading-5";
        lg: "gap-2.5 px-6 py-3.5 text-base";
        icon: "size-11";
        "icon-lg": "size-12";
    };
    rounded: {
        false: "rounded-md";
        true: "rounded-full";
    };
}, undefined, import("tailwind-variants").TVReturnTypeLike<{
    variant: {
        default: "";
        outline: "border bg-transparent hover:bg-current/10 active:bg-current/20";
        secondary: "bg-secondary text-secondary-foreground hover:bg-(--grey-500)";
        ghost: "hover:bg-(--grey-700) hover:text-foreground active:bg-(--grey-600)";
        destructive: "";
        link: "text-primary underline-offset-4 hover:underline";
    };
    color: {
        purple: "";
        orange: "";
        blue: "";
        light: "";
        error: "";
    };
    size: {
        default: "gap-2.5 px-4 py-3 text-sm leading-5";
        lg: "gap-2.5 px-6 py-3.5 text-base";
        icon: "size-11";
        "icon-lg": "size-12";
    };
    rounded: {
        false: "rounded-md";
        true: "rounded-full";
    };
}, undefined>>;
export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
export type ButtonColor = VariantProps<typeof buttonVariants>["color"];
export type ButtonSize = VariantProps<typeof buttonVariants>["size"];
export type ButtonProps = WithElementRef<HTMLButtonAttributes> & WithElementRef<HTMLAnchorAttributes> & {
    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: ButtonSize;
    rounded?: boolean;
};
declare const Button: import("svelte").Component<ButtonProps, {}, "ref">;
type Button = ReturnType<typeof Button>;
export default Button;
