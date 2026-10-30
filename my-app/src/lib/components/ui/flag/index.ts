import { toast } from "svelte-sonner";
import Flag, { flagVariants, type FlagType } from "./flag.svelte";

/** Show a Flag toast. Needs <Toaster /> mounted once in the layout. */
function flag(type: FlagType, message: string, duration = 5000) {
	return toast.custom(Flag, { duration, componentProps: { type, message, duration } });
}

export { Flag, flag, flagVariants, type FlagType };
