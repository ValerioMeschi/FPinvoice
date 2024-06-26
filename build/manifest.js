export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["defaults.json","favicon.png","img/logo.svg","sfx/catching.mp3"]),
	mimeTypes: {".json":"application/json",".png":"image/png",".svg":"image/svg+xml",".mp3":"audio/mpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.DIglKAYW.js","app":"_app/immutable/entry/app.C9Z-ztW4.js","imports":["_app/immutable/entry/start.DIglKAYW.js","_app/immutable/chunks/entry.B_X3f54A.js","_app/immutable/chunks/scheduler.BTE4Y-Vv.js","_app/immutable/entry/app.C9Z-ztW4.js","_app/immutable/chunks/scheduler.BTE4Y-Vv.js","_app/immutable/chunks/index.CZ2boC6D.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
