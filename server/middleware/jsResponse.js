function jsend(data, message = null) {
	this.json({
		code: 20000,
		data: data,
		message: message
	});
}


function jerror(error, code = '') {
	error = error || null;

	if (code == '402') {
		this.json({code: code, data: null, message: 'token已过期'})
	}

	else if (error instanceof Error) {
		if (error.name === 'FetchError') {
	      this.json({code: error.name, data: null, message: 'FetchError'});

	    } else {
	    	this.json({
				code: error.code || error.name,
				message: error.message,
				data: null,
			});
	    }
	}

	else if (typeof error === 'string'){
		this.json({code: '', data: null, message: error})
	}

	else {
		this.json({code: -1, data: null, message: `未解析的错误, ${error.toString()}`});
	}
}

module.exports = (req, res, next) => {
	res.jsend = jsend;
	res.jerror = jerror;
	next();
}