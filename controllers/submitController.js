const City = require("../models/cityModel")


let createNewPost = (cityName) => {
   
    return City.create({cityName: cityName})
}
module.exports = createNewPost