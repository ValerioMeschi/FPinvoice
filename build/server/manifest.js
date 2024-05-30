export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["img/logo.svg","favicon.png","defaults.json","sfx/catching.mp3"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".json":"application/json",".mp3":"audio/mpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.CA2z4yi8.js","app":"_app/immutable/entry/app.BUMejWbP.js","imports":["_app/immutable/entry/start.CA2z4yi8.js","_app/immutable/chunks/entry.D5FuvRyZ.js","_app/immutable/chunks/scheduler.BTE4Y-Vv.js","_app/immutable/entry/app.BUMejWbP.js","_app/immutable/chunks/scheduler.BTE4Y-Vv.js","_app/immutable/chunks/index.CZ2boC6D.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
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
				endpoint: __memo(() => import('./entries/endpoints/scrape/_server.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
