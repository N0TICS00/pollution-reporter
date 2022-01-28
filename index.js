let express = require("express")
let bodyParser = require("body-parser")
let app = express()
let urlencodedParser = bodyParser.urlencoded({ extended: false })
app.set('view engine' , 'ejs' )
app.use('/assets/', express.static("assets"))
app.get("/",(req,res) => {
 
    res.render("index")
    
})
app.post("/", urlencodedParser, (res,req)=>{
    let city = req.body
    console.log(city)
})





app.listen(8081)