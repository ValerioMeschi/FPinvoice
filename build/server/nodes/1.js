

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.XF4zwWWB.js","_app/immutable/chunks/scheduler.BTE4Y-Vv.js","_app/immutable/chunks/index.CZ2boC6D.js","_app/immutable/chunks/entry.DpIWp86w.js"];
export const stylesheets = [];
export const fonts = [];
