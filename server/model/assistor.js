let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let assistorSchema = new Schema({
	status: Number, // 1=> 在职 2=> 离职
	name: String,
	company: String,
	department: String,
	phone: Number,
	account: String,
	password: String,
	project: [{type: Schema.Types.ObjectId, ref: 'Project'}]
});


let Assistor = mongoose.model('assistor', assistorSchema);
module.exports = Assistor;