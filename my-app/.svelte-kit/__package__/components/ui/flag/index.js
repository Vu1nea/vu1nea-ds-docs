import { toast } from "svelte-sonner";
import Flag, { flagVariants } from "./flag.svelte";
/** Show a Flag toast. Needs <Toaster /> mounted once in the layout. */
function flag(type, message, duration = 5000) {
    return toast.custom(Flag, { duration, componentProps: { type, message, duration } });
}
export { Flag, flag, flagVariants };
