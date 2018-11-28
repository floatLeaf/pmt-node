let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let externalSchema = new Schema({
	name: String,
	phone: Number,
	status: Number, // 1=> 在职 2=> 离职
	content: String
});

let External = mongoose.model('external', externalSchema);
module.exports = External;