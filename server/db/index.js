let mongoose = require('mongoose');
let config = require('../../config').server;
 
mongoose.connect(config.dburl);
let connection = mongoose.connection;

connection.on('open', function() {
	console.log('数据库链接成功！');
});

connection.on('error', (err) => {
	console.log('数据库链接出错：' + err);
});

connection.on('close', () => {
	console.log('数据库链接断开');
});