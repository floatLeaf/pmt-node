let mongoose = require('mongoose'); 
let UserModel = require('../model').User;
let redis = require("redis");
let redisConfig = require('../../config').redis;
let client = redis.createClient(redisConfig); 

class UserCtrl {

	cookie(req, res, next) {
		try {
			let token = req.query.token;
			client.get(token, (err, reply) => {
				res.jsend(reply);
			})
		}catch(e) {
			res.jerror(e)
		}
		
	}
}

module.exports = new UserCtrl();