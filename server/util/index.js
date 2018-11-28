
let md5 = require('js-md5');
let config = require('../../config').server;

exports.createCookie = (data) => {
	let date = new Date();
	return md5(`{${data._id} + ${date} + ${config.secret}`);
}