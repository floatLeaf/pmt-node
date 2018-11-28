let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let accountSchema = new Schema({
	name: String,
	platform: {type: Schema.Types.ObjectId, ref: 'Platform'},
	url: String,
	account: String,
	password: String,
	effect_date_start: Date,
	effect_date_start: Date,
	effect_long: {type: Number, default: 2}, // 1=>长期有效　２专用
	username: String,
	phone: Number,
	project_type: Number, // 1=>共用　２专用
	project_id: {type: Schema.Types.ObjectId, ref: 'Project'}
});

let Account = mongoose.model('account', accountSchema);
module.exports = Account;