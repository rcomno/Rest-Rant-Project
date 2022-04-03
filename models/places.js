const mongoose = require('mongoose')
const placeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    pic: String,
    cuisines: {type: String, required: true},
    city: {type: String, default: 'Anytown'},
    state: {type: String, default: 'USA'},
    founded: Number
})

module.exports = mongoose.model('Place', placeSchema)

/*
module.exports = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'public/images/FL18Beach1.jpg'
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'https://placekitten.com/250/250'
}, {
    name: 'Placeholder',
    city: 'Anytown',
    state: 'AL',
    cuisines: 'Generic',
    pic: 'https://placekitten.com/250/250'
}]
*/