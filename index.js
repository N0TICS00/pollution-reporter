//REQUIRE
let express = require("express")
let bodyParser = require("body-parser")
let mysql = require("mysql")
//SERVER
let connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "pollution-reporter"
})
connection.connect()
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });
  connection.end();

let app = express()
let urlencodedParser = bodyParser.urlencoded({ extended: false })
app.set('view engine' , 'ejs' )
app.use('/assets/', express.static("assets"))
app.get("/",(req,res) => {
 
    res.render("index")
    
})
app.post("/", urlencodedParser, (req,res)=>{
    let city = req.body
    res.render("index", city)
})





app.listen(8081)