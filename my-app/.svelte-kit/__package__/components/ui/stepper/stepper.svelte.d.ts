type $$ComponentProps = {
    steps: {
        label?: string;
    }[];
    /** Zero-based index of the active step. Steps up to and including it are filled. */
    current?: number;
    orientation?: "vertical" | "horizontal";
    class?: string;
};
declare const Stepper: import("svelte").Component<$$ComponentProps, {}, "">;
type Stepper = ReturnType<typeof Stepper>;
export default Stepper;
