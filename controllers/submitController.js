import User from '../models/reportModel'


let createNewPost = (cityName) => {
    let User = new User({cityName:cityName})
    User.save()
}
module.exports = createNewPost