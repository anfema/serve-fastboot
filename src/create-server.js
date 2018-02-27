const FastBootAppServer = require('fastboot-app-server');
const createWatcher = require('../src/create-watcher');

module.exports = function createServer(config) {
	const server = new FastBootAppServer(
		Object.assign({}, config, {
			notifier: {
				subscribe(notify) {
					createWatcher(config, notify);

					return Promise.resolve();
				},
			},
		})
	);

	return server;
};
