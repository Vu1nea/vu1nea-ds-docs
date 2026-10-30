<script lang="ts" module>
	import { tv, type VariantProps } from "tailwind-variants";

	export const avatarVariants = tv({
		base: "bg-card text-foreground relative inline-flex shrink-0 select-none items-center justify-center overflow-hidden rounded-full font-bold",
		variants: {
			size: {
				sm: "size-8 text-xs leading-4",
				default: "size-10 text-sm leading-5",
				lg: "size-14 text-base leading-6",
			},
		},
		defaultVariants: { size: "default" },
	});

	export type AvatarSize = VariantProps<typeof avatarVariants>["size"];
</script>

<script lang="ts">
	import { Avatar as AvatarPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		src,
		alt = "",
		fallback = "",
		size = "default",
		class: className,
		...restProps
	}: Omit<AvatarPrimitive.RootProps, "children"> & {
		src?: string;
		alt?: string;
		fallback?: string;
		size?: AvatarSize;
	} = $props();
</script>

<AvatarPrimitive.Root
	bind:ref
	data-slot="avatar"
	data-size={size}
	class={cn(avatarVariants({ size }), className)}
	{...restProps}
>
	<AvatarPrimitive.Image {src} {alt} data-slot="avatar-image" class="aspect-square size-full object-cover" />
	<AvatarPrimitive.Fallback data-slot="avatar-fallback" class="flex size-full items-center justify-center">
		{fallback}
	</AvatarPrimitive.Fallback>
</AvatarPrimitive.Root>
