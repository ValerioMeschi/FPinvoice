export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["sfx/catching.mp3","img/logo.svg","favicon.png"]),
	mimeTypes: {".mp3":"audio/mpeg",".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.Cd8sfk4d.js","app":"_app/immutable/entry/app.LP9FZN7j.js","imports":["_app/immutable/entry/start.Cd8sfk4d.js","_app/immutable/chunks/entry.DpIWp86w.js","_app/immutable/chunks/scheduler.BTE4Y-Vv.js","_app/immutable/entry/app.LP9FZN7j.js","_app/immutable/chunks/scheduler.BTE4Y-Vv.js","_app/immutable/chunks/index.CZ2boC6D.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./server/nodes/0.js')),
			__memo(() => import('./server/nodes/1.js')),
			__memo(() => import('./server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/scrape",
				pattern: /^\/scrape\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./server/entries/endpoints/scrape/_server.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export const prerendered = new Set([]);
