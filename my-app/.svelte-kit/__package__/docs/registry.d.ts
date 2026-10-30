export type PropRow = {
    name: string;
    type: string;
    default?: string;
    description: string;
};
export type PropTable = {
    title?: string;
    rows: PropRow[];
};
export type DocEntry = {
    slug: string;
    title: string;
    group: string;
    description: string;
    /** Import line shown at the top of the page. */
    importLine: string;
    tables: PropTable[];
};
export declare const groups: readonly ["Actions", "Forms", "Display", "Feedback", "Navigation", "Overlays"];
export declare const entries: DocEntry[];
export declare const bySlug: (slug: string) => DocEntry | undefined;
export declare const grouped: {
    group: "Actions" | "Forms" | "Display" | "Feedback" | "Navigation" | "Overlays";
    items: DocEntry[];
}[];
/** Flat list in sidebar order, for prev/next links. */
export declare const ordered: DocEntry[];
