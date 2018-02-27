const Sane = require('sane');
const debounce = require('debounce');

module.exports = function createWatcher(config, callback) {
	const distPath = config.distPath;
	const watcherOptions = config.watcherOptions || {};
	const debounceInterval = config.watcherDebounce || 100;

	const watcherInstance = new Sane(distPath, watcherOptions);

	watcherInstance.on('all', debounce(callback, debounceInterval));

	return watcherInstance;
};
