

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DhMtKmDf.js","_app/immutable/chunks/scheduler.BTE4Y-Vv.js","_app/immutable/chunks/index.CZ2boC6D.js"];
export const stylesheets = [];
export const fonts = [];
