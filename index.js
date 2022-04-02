//Mods-GLOs
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')

//Settings Exp
//app.set('views', _dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

//Control-Routes
app.use(express.urlencoded({extended: true}))
app.use('/places', require('./controllers/places'))

app.get('/', function (req, res) {
	res.render('home')	
})

app.get('*', (req, res) =>{
    res.status(404).render('error404')
})

app.listen(process.env.PORT)