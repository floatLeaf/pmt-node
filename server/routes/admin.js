let express = require('express');
let router = express.Router();
let redis = require("redis");
let redisConfig = require('../../config').redis;
let client = redis.createClient(redisConfig); 

// 服务端验证token是否过期
function authorToken(req, res, next) {
	client.get('token', (err, data) => {
		if (!err && data) {
			next();
		} else {
			res.jerror(err, '402');
		}
	});
}

let {
	system,
	user,
} = require('../controller');


router.post('/system/login', system.login); 
router.get('/user/cookie', user.cookie); 

module.exports = router;