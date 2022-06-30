const mysql = require("mysql");
const connection = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "v3nu55upp1y",
  database: "meeting_room",
  charset: "utf8",
});

connection.getConnection((err, conectn) => {

    if(err != null){
        console.log(err)
    }else{
        console.log('MySQL Connect Database success!!')
    }
});

module.exports = connection;