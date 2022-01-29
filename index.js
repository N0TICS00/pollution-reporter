import 'sequelize'
//REQUIRE
const  express = require("express")
const bodyParser = require("body-parser")
const mysql = require("mysql")

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