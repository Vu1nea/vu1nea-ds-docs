import { type WithElementRef } from "$lib/utils.js";
import type { HTMLTextareaAttributes } from "svelte/elements";
declare const Textarea: import("svelte").Component<WithElementRef<HTMLTextareaAttributes>, {}, "ref" | "value">;
type Textarea = ReturnType<typeof Textarea>;
export default Textarea;
