import { type VariantProps } from "tailwind-variants";
export declare const alertVariants: import("tailwind-variants").TVReturnType<{
    variant: {
        default: "bg-info-muted text-(--info-100) *:[svg]:text-info";
        info: "bg-info-muted text-(--info-100) *:[svg]:text-info";
        success: "bg-success-muted text-(--success-100) *:[svg]:text-success";
        destructive: "bg-danger-muted text-(--danger-100) *:[svg]:text-(--danger-300)";
        warning: "bg-warning-muted text-(--warning-100) *:[svg]:text-warning";
    };
}, undefined, "grid gap-0.5 px-4 py-4 pl-10 text-left text-base leading-6 has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-4 *:[svg]:row-span-2 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-8 group/alert relative w-full items-center", {
    variant: {
        default: "bg-info-muted text-(--info-100) *:[svg]:text-info";
        info: "bg-info-muted text-(--info-100) *:[svg]:text-info";
        success: "bg-success-muted text-(--success-100) *:[svg]:text-success";
        destructive: "bg-danger-muted text-(--danger-100) *:[svg]:text-(--danger-300)";
        warning: "bg-warning-muted text-(--warning-100) *:[svg]:text-warning";
    };
}, undefined, import("tailwind-variants").TVReturnTypeLike<{
    variant: {
        default: "bg-info-muted text-(--info-100) *:[svg]:text-info";
        info: "bg-info-muted text-(--info-100) *:[svg]:text-info";
        success: "bg-success-muted text-(--success-100) *:[svg]:text-success";
        destructive: "bg-danger-muted text-(--danger-100) *:[svg]:text-(--danger-300)";
        warning: "bg-warning-muted text-(--warning-100) *:[svg]:text-warning";
    };
}, undefined>>;
export type AlertVariant = VariantProps<typeof alertVariants>["variant"];
import { type WithElementRef } from "$lib/utils.js";
import type { HTMLAttributes } from "svelte/elements";
type $$ComponentProps = WithElementRef<HTMLAttributes<HTMLDivElement>> & {
    variant?: AlertVariant;
};
declare const Alert: import("svelte").Component<$$ComponentProps, {}, "ref">;
type Alert = ReturnType<typeof Alert>;
export default Alert;
