let _ = require('lodash');
let mongoose = require('mongoose'); 
let redis = require("redis");
let UserModel = require('../model').User;
let formidable = require('formidable');
let util = require('../util'); 
let redisConfig = require('../../config').redis;
let client = redis.createClient(redisConfig); 

function validateLogin(data) {
	let message = '';
	if (_.trim(data.username) == '' || _.trim(data.password)) {
		message = '用户名或密码不能为空';
	}

	if (message) {
		throw Error(message);
	}
}

class SystemCtrl {

	login(req, res, next) {
		let form = new formidable.IncomingForm();
		
		form.parse(req, async(err, fields, files) => { 
			// 登录表单校验
			try {
				let message = '';
				if (_.trim(fields.username) == '' || _.trim(fields.password) == '') {
					message = '用户名或密码不能为空';
				} 

				if (message) {
					throw new Error(message);
				}
			} catch (err) {
				return res.jerror(err);
			}

			let data = {
				username: fields.username,
				password: fields.password
			};

			try {
				let doc = await UserModel.findOne(data, 'name company department phone username'); 

				if (doc) {
					let token = util.createCookie(doc);  
					client.set(token, JSON.stringify(doc), 'EX', 10);
					doc._doc.token = token;  
					res.jsend(doc);
				} else {
					res.jerror('用户名或密码错误！');
				}
			} catch(error) {
				res.jerror(error);
			}
		}) 
	}
}


module.exports = new SystemCtrl();