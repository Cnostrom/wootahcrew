const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const cors = require('cors');
const massive = require('massive');
const path = require('path');

const logger = require('morgan')
require('dotenv').config();

const app = express();

app.use(express.static(`${__dirname}/../build`));
app.use(cors())
app.use(bodyParser.json());
app.use(logger('tiny'))

massive(process.env.db)
  .then(db => {
    app.set('db', db)
    console.log("db connected")
    require('./session')(app, db)

    app.post('/api/register', controller.register)
    app.post('/api/login', controller.login)
    app.get('/api/session', controller.getSession)
    app.post('/api/logout', controller.logout)
    app.post('/api/post', controller.post)
    app.post('/api/comment', controller.comment)
    app.get('/api/getPost', controller.getPost)
    app.delete('/api/deletePost/:id', controller.deletePost)
    app.get('/api/News', controller.getNews)
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../build/index.html'));
    });
    const port = process.env.PORT || 8080
    app.listen(port, () => { console.log(`Server listening on port ${port}`); });
  })

  
