var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "our_user",
  password: "7777",
  database:'files_directory'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});  
module.exports = con;  
// con.end();


