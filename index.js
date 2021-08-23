const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()

const indexRoute = require('./routes')
const {body} = require('express-validator')

const app = express()
 const dbUri = process.env.DB_URI

 mongoose.connect(dbUri, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
},() => console.log('Connected to database'))


//CONNECT TO MONGODB
//const port = 9300
//mongoose.connect('mongodb://localhost:27017/crud_application', {useNewUrlParser: true,useUnifiedTopology: true });
//const db = mongoose.connection;
//db.on('error',() => console.log('something went wrong to connect to database'))
//db.once('open',() =>{
 // console.log('DB connection has been made successfully');
//});

//MIDDLEWARE
app.set('view engine', 'ejs')
app.use(express.static('public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 

//ROUTING
app.use('/',indexRoute)
//app.listen(port, () => {
 // console.log(`Server running on http://localhost:${port}`)
//})


app.listen(8555,() => console.log('Server running on port 8555'))