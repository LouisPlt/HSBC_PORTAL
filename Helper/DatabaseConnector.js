var pgp = require('pg-promise')(/*options*/);
require('dotenv').config();

var cn = {
  host: process.env.DB_HOST,
  databse: process.env.DB_NAME,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  ssl: true
};

console.log(cn);
// Constructor
function DatabaseConnector() {
	this.connection = pgp(cn);
}

var db = new DatabaseConnector();

// export the class
module.exports = db;
