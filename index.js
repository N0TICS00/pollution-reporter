//REQUIRE
const  express = require("express")
const bodyParser = require("body-parser")
const City = require("./models/cityModel")
const createNewPost = require("./controllers/submitController")
const sequelize = require("./server")

sequelize.sync().then(result => {
    console.log(result)
}).catch(err=>{
    console.log(err)
})





let app = express()
let urlencodedParser = bodyParser.urlencoded({ extended: false })
app.set('view engine' , 'ejs' )
app.use('/assets/', express.static("assets"))
app.get("/",(req,res) => {
 
    res.render("index")
    
})
app.post("/", urlencodedParser, (req,res)=>{    
    createNewPost(req.body.city)
    let data = City.findAll({order : [["createdAt"]]}).then(cities => cities.map(city => { return city}))
    console.log(data)
    res.render("index", {data}) 
})





app.listen(8081)