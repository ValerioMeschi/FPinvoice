

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CFtfwBUf.js","_app/immutable/chunks/scheduler.BTE4Y-Vv.js","_app/immutable/chunks/index.CZ2boC6D.js"];
export const stylesheets = ["_app/immutable/assets/2.C23kMPnl.css"];
export const fonts = [];
