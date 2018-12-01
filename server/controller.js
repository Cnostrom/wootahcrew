const bcrypt = require ('bcrypt-nodejs')

const compare = require('./helpers/compare')
const hash = require('./helpers/hash')

module.exports={

  register: (req, res) => {
    const {firstname, lastname, email, username, password, state, bio, url} = req.body
    const db = req.app.get('db');
    db.findUser(username)
    .then(([user]) => {
      console.log(user[0])
      if (!user){
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
// login: (req,res,next) => {
//     const db = req.app.get('db')
//     db.wootahusers.find({username : req.body.username})
//         .then(([user]) => {
//             if (!user){
//                 res.status(401).send('no user')
//             }else {
//                 compare(req.body.password, user.password)
//                 .then(correct => {
//                     if(!correct){
//                         res.status(401).send('Wrong password')
//                     }else{
//                         req.login(user, err => {
//                             if(err) return next(err)
//                             console.log(user)
//                         });
//                     }
//                 })
//                 .catch(error => console.log(error))
//             }
//         })
//         .catch(error => console.log(error))
//     },

login: (req, res,next) => {
  const db = req.app.get('db')
  db.findUser([req.body.username])
      .then(user => {
          bcrypt.compare(req.body.password, user[0].password, function(err, isCorrectPassword) {
              if(err){
                  return res.send(err)
              }
              if(!isCorrectPassword){
                  res.send('username or password is wrong')
                  
                }else{
                    // req.login(user, err => {
                    //     if(err) return next(err);
                    //     console.log(user)
                    // })
                    
                    console.log('hit')
                    
              }
          });
      })
      .catch((err) => {
          res.status(500).send('wrong username or password')
      })
},
logout: (req, res) => {
    delete req.session.user;
    res.status(200).json('logged out');
},
getSession: (req, res) => {
    if (req.user){
        res.send(req.user)
    }
    else {res.status(401).send('session not found')}

},

// joinGroup: (req, res) => {
//     const db = req.app.get('db')
//     db.findGroup([req.body.username])
//         .then(user => {
//             bcrypt.compare(req.body.groupPassword, user[0].groupPassword, function(err, isCorrectPassword) {
//                 if(err){
//                     return res.send(err)
//                 }
//                 if(isCorrectPassword){
//                     res.send('log in successful')
//                 }else{
//                     res.send('password is wrong')
//                 }
//             });
//         })
//         .catch((err) => {
//             res.status(500).send('wrong password')
//         })
// }

}