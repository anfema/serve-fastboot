const rc = require('rc');

const config = rc('anfema-website-server', {
	distPath: '',
	gzip: true,
	host: '127.0.0.1',
	port: 4000,
	sandboxGlobals: {},
	debounceDelay: 1000,
	saneOptions: {},
});

if (!config.distPath) {
	throw Error('No dist path sepcified');
}

module.exports = config;
