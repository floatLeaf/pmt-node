let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let platformSchema = new Schema({
	name: String,
	url: String,
	use: String,
	status: Number, // 1 => 使用 2=> 已删除
});

let Platform = mongoose.model('platform', platformSchema);
module.exports = Platform;