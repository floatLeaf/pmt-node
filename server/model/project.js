let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let projectSchema = new Schema({
	name: String,
	description: String,
	sign_time: {type: Date, default: Date.now},
	service_date_start: {type: Date, default: Date.now},
	service_date_end: {type: Date, default: Date.now},
	attachment: [{suffix: String, url: String, name: String}],
	company: String, 
	license: String,
	address: String,
	tel: String,
	legal_name: String,
	email: String,
	phone: Number,
	bank: String,
	invoice_type: Number,  // 1增票， 2普票
	manager: {type: Schema.Types.ObjectId, ref: 'User'},
	ducker: {type: Schema.Types.ObjectId, ref: 'User'},
	account: {type: Schema.Types.ObjectId, ref: 'Account'}
});

let Project = mongoose.model('project', projectSchema);
module.exports = Project;