const rc = require('rc');

const config = rc('fastboot', {
	distPath: 'dist',
	gzip: true,
	host: '127.0.0.1',
	port: 4000,
	sandboxGlobals: {},
	chunkedResponse: true,
	watcherOptions: { poll: false },
	watcherDebounce: 100,
});

module.exports = config;
