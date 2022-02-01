//REQUIRE
const  express = require("express")
const bodyParser = require("body-parser")
const City = require("./models/cityModel")
const createNewPost = require("./controllers/submitController")
const sequelize = require("./server")
//SERVER
sequelize.sync({force: true}).then(result => {
    console.log(result)
}).catch(err=>{
    console.log(err)
})

let app = express()
let urlencodedParser = bodyParser.urlencoded({ extended: false })
app.set('view engine' , 'ejs' )
app.use('/assets/', express.static("assets"))
app.get("/",(req,res) => {
    let posts = City.findAll()

    res.render("index", {data : posts})
 
})
app.post("/", urlencodedParser, (req,res)=>{    
    createNewPost(req.body.city)

    res.render("index" ) 

})

app.listen(8081)