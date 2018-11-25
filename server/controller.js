const bcrypt = require ('bcrypt-nodejs')

module.exports={

  register: (req, res) => {
    const {firstname, lastname, email, username, password, state, bio, url} = req.body
    const db = req.app.get('db');
    db.findUser(username)
    .then(user => {
      console.log(user[0])
      if (!user[0]){
        bcrypt.hash(req.body.password, null, null, (err, hash) => {
          if(err){
              return res.send('did not hash')
          }
          db.addUser([firstname, lastname, email, username, hash, state, bio, url])
          .then(() => {
              res.status(200).send("User has been created")
          })
          .catch((err) => {
              res.status(500).send(err)
          })

      })}
      else {return res.status(500).send('user already exist')}
    }) 
    .catch(err => {
      console.log('error', err)
    }) 
},

login: (req, res) => {
  const db = req.app.get('db')
  db.findUser([req.body.username])
      .then(user => {
          bcrypt.compare(req.body.password, user[0].password, function(err, isCorrectPassword) {
              if(err){
                  return res.send(err)
              }
              if(isCorrectPassword){
                  // req.session.user = user[0]
                  res.send('log in successful')
              }else{
                  res.send('username or password is wrong')
              }
          });
      })
      .catch((err) => {
          res.status(500).send('wrong username or password')
      })
}




}