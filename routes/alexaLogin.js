var express = require('express');
var session = require('express-session');
var router = express.Router();
var dbConnector = require('../Helper/DatabaseConnector');
var db = dbConnector.connection;
var sess;
var state;
var client_id;
var redirect_uri;


router.get('/', function(req, res, next) {
	state = req.query.state;
	client_id = req.query.client_id;
	redirect_uri = req.query.redirect_uri
	res.render('alexaLogin', {connected : true});
});


router.post('/', function(req, res, next) {
	sess = req.session;
	db.any("select * from clients where Login=$1", req.body.login)
    	.then(function (data) {
    		//Si le nom d'utilisateur n'existe pas
    		if (isEmptyObject(data)) {							
				console.log("Nom d'utilisateur inexistant");
				res.render('connexion', {connected : false});
			} else {
				if (req.body.password != data[0].password) {
					console.log("Password erroné");
					res.render('connexion', {connected : false});
				} else {
					console.log("Connecté : " + req.body.login);
					var token = generateToken();

					db.none("update clients set Token = $1 where Login = $2", [token, req.body.login])
				    .then(function () {
				    	var uri = redirect_uri + '/?#state=' + state + '&access_token=' + token + '&token_type=Bearer';
						console.log(uri);
						res.redirect(uri);
				    })
				    .catch(function (error) {
				        console.error("Unable to update item. Error JSON:", error);
						res.render('/connexion', { sess: sess });
				    });		
				}
			}
    	})
	    .catch(function (error) {
	    	console.log("ERROR:", error.message || error);
	        res.render('connexion', {connected : false});
	    });
});

function isEmptyObject(obj) {
	return !Object.keys(obj).length;
}

function generateToken() {
	return require('crypto').randomBytes(64).toString('hex');
}


module.exports = router;
