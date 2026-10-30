

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DUeG_hJn.js","_app/immutable/chunks/umTCdD-Z.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/DcmLSlAq.js"];
export const stylesheets = ["_app/immutable/assets/0.C0kBSzTH.css"];
export const fonts = ["_app/immutable/assets/instrument-sans-latin-ext-wght-normal.B5bTHO_g.woff2","_app/immutable/assets/instrument-sans-latin-wght-normal.BbzFLZTg.woff2"];
