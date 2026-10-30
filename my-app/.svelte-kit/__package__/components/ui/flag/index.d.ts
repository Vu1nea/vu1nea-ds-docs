import Flag, { flagVariants, type FlagType } from "./flag.svelte";
/** Show a Flag toast. Needs <Toaster /> mounted once in the layout. */
declare function flag(type: FlagType, message: string, duration?: number): string | number;
export { Flag, flag, flagVariants, type FlagType };
