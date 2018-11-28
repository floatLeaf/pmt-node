var path = require('path');

module.exports = {
	server: {
		port: 7000,
		url: 'http://localhost:7000',
		dburl: 'mongodb://127.0.0.1:27017/pmt',
		secret: 'pmt',
	},

	redis: {
		host: '127.0.0.1',
		port: 6379,
		// expire: 1 * 24 * 60 * 60 * 1000,
		expire: 10000,
	}
}