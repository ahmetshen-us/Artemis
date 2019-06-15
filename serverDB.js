var mysql = require('mysql');

var con = mysql.createConnection({
  host: "35.238.128.54",
  user: "team25_user",
  password: "code is life",
  database:"team25_db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

});
         // sql = "CREATE TABLE tutorials_tbl( "+
         //    "tutorial_id INT NOT NULL AUTO_INCREMENT, "+
         //    "tutorial_title VARCHAR(100) NOT NULL, "+
         //    "tutorial_author VARCHAR(40) NOT NULL, "+
         //    "submission_date DATE, "+
         //    "PRIMARY KEY ( tutorial_id )); ";

var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  var sql = "INSERT INTO customers2 (name, address) VALUES ?";
  var values = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633']
  ];


  // con.query(sql, [values], function (err, result) {
  //   if (err) throw err;
  //   console.log("Table created");
  // });

// var sql = "CREATE TABLE customers2 (name VARCHAR(255) PRIMARY KEY, address VARCHAR(255))";
//     con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });

var insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';
var query = mysql.format(insertQuery,["customers2","name","address","heyo","meyo"]);


  con.query(query, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

    var selectQuery = 'SELECT * FROM ?? WHERE ?? = ?';    
    var query = mysql.format(selectQuery,["customers","name", "heyo"]);

  con.query(query, function (err, result) {
    if (err) throw err;
    console.log(result);
  });

// con.query("select * from customers", function(err, rows, fields) {
//   if (!err){
//     console.log('The solution is: ', rows);
//     // console.log('The solution is: ', fields);
//   }
//   else
//     console.log('Error while performing Query.');
// });

con.end();
