const express = require ('express');
const bodyParser = require ('body-parser');
const controller = require ('./controller');
const cors = require ('cors');
const massive = require ('massive');
const logger = require('morgan')
require('dotenv').config();

const app = express ();

app.use(cors ())
app.use( bodyParser.json() );
app.use(logger('tiny'))

massive(process.env.db)
.then(db => {
  app.set('db', db)
 console.log("db connected")
 require ('./session')(app, db)
}) 


app.post('/api/register',controller.register)
app.post('/api/login',controller.login)
// app.post('/api/joinGroup',controller.joinGroup)
app.get('/api/session', controller.getSession)
app.post('/api/logout', controller.logout)




const port = process.env.PORT || 8080
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );