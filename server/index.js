const express = require ('express');
const bodyParser = require ('body-parser');
const controller = require ('./controller');
const cors = require ('cors');
const massive = require ('massive');
require('dotenv').config();

const app = express ();

app.use(cors ())
app.use( bodyParser.json() );

massive(process.env.db)
.then(db => {
  app.set('db', db)
  // db.newTable()
 console.log("db connected")
}) 


app.post('/api/register',controller.register)
app.post('/api/login',controller.login)
// app.get('/api/logout', controller.logout)
// app.post('/api/add',controller.post)
// app.get('/api/get',controller.getData)


const port = process.env.PORT || 8080
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );