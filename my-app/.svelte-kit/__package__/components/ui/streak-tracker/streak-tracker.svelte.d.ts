type $$ComponentProps = {
    title: string;
    subtitle?: string;
    /** Shown at the right of the subtitle row, e.g. "11x". */
    count?: string;
    /** One entry per day, true = completed. */
    days: boolean[];
    columns?: number;
    class?: string;
};
declare const StreakTracker: import("svelte").Component<$$ComponentProps, {}, "">;
type StreakTracker = ReturnType<typeof StreakTracker>;
export default StreakTracker;
