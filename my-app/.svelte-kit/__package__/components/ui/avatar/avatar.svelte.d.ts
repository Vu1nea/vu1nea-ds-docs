import { type VariantProps } from "tailwind-variants";
export declare const avatarVariants: import("tailwind-variants").TVReturnType<{
    size: {
        sm: "size-8 text-xs leading-4";
        default: "size-10 text-sm leading-5";
        lg: "size-14 text-base leading-6";
    };
}, undefined, "bg-card text-foreground relative inline-flex shrink-0 select-none items-center justify-center overflow-hidden rounded-full font-bold", {
    size: {
        sm: "size-8 text-xs leading-4";
        default: "size-10 text-sm leading-5";
        lg: "size-14 text-base leading-6";
    };
}, undefined, import("tailwind-variants").TVReturnTypeLike<{
    size: {
        sm: "size-8 text-xs leading-4";
        default: "size-10 text-sm leading-5";
        lg: "size-14 text-base leading-6";
    };
}, undefined>>;
export type AvatarSize = VariantProps<typeof avatarVariants>["size"];
import { Avatar as AvatarPrimitive } from "bits-ui";
type $$ComponentProps = Omit<AvatarPrimitive.RootProps, "children"> & {
    src?: string;
    alt?: string;
    fallback?: string;
    size?: AvatarSize;
};
declare const Avatar: import("svelte").Component<$$ComponentProps, {}, "ref">;
type Avatar = ReturnType<typeof Avatar>;
export default Avatar;
