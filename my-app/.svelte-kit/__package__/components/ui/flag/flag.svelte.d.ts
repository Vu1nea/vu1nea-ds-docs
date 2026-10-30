import { type VariantProps } from "tailwind-variants";
export declare const flagVariants: import("tailwind-variants").TVReturnType<{
    type: {
        info: {
            icon: string;
            timer: string;
        };
        success: {
            icon: string;
            timer: string;
        };
        warning: {
            icon: string;
            timer: string;
        };
        danger: {
            icon: string;
            timer: string;
        };
    };
}, {
    icon: string;
    timer: string;
}, undefined, {
    type: {
        info: {
            icon: string;
            timer: string;
        };
        success: {
            icon: string;
            timer: string;
        };
        warning: {
            icon: string;
            timer: string;
        };
        danger: {
            icon: string;
            timer: string;
        };
    };
}, {
    icon: string;
    timer: string;
}, import("tailwind-variants").TVReturnTypeLike<{
    type: {
        info: {
            icon: string;
            timer: string;
        };
        success: {
            icon: string;
            timer: string;
        };
        warning: {
            icon: string;
            timer: string;
        };
        danger: {
            icon: string;
            timer: string;
        };
    };
}, {
    icon: string;
    timer: string;
}>>;
export type FlagType = NonNullable<VariantProps<typeof flagVariants>["type"]>;
type $$ComponentProps = {
    type?: FlagType;
    message: string;
    /** ms the bottom timer takes to run out. Match the toast duration. */
    duration?: number;
    closeToast?: () => void;
    class?: string;
};
declare const Flag: import("svelte").Component<$$ComponentProps, {}, "">;
type Flag = ReturnType<typeof Flag>;
export default Flag;
