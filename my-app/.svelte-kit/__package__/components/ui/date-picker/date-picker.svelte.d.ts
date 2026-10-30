import { type DateValue } from "@internationalized/date";
type $$ComponentProps = {
    value?: DateValue | undefined;
    label?: string;
    required?: boolean;
    minValue?: DateValue;
    maxValue?: DateValue;
    class?: string;
};
declare const DatePicker: import("svelte").Component<$$ComponentProps, {}, "value">;
type DatePicker = ReturnType<typeof DatePicker>;
export default DatePicker;
