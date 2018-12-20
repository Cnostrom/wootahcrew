const bcrypt = require('bcrypt-nodejs');
const NewsAPI = require('newsapi');
const apiKey = 'e2b75f2704184310b81fc98cfb21d66d'
const newsapi = new NewsAPI(apiKey)

module.exports = {

    register: (req, res) => {
        const { firstname, lastname, email, username, password, state, yearjoined, url } = req.body
        const db = req.app.get('db');
        db.findUser(username)
            .then(([user]) => {
                if (!user) {
                    bcrypt.hash(password, null, null, (err, hash) => {
                        if (err) {
                            return res.send('did not hash')
                        }
                        db.addUser([firstname, lastname, email, username, hash, state, yearjoined, url])
                            .then(() => {
                                res.status(200).send("User has been created")
                            })
                            .catch((err) => {
                                res.status(500).send(err)
                            })
                    })
                }
                else { return res.status(500).send('user already exist') }
            })
            .catch(err => {
                console.log('error', err)
            })
    },

    login: (req, res, next) => {
        const db = req.app.get('db')
        db.findUser([req.body.username])
            .then(([user]) => {
                bcrypt.compare(req.body.password, user.password, function (err, isCorrectPassword) {
                    if (err) {
                        return res.send(err)
                    }
                    if (!isCorrectPassword) {
                        res.status(401).send('username or password is wrong')
                    } else {
                        req.login(user, err => {
                            if (err) return next(err);
                            res.send({
                                id: user.id,
                                firstname: user.firstname,
                                lastname: user.lastname,
                                email: user.email,
                                username: user.username,
                                state: user.state,
                                yearjoined: user.yearjoined,
                                url: user.url
                            })
                        })
                    }
                });
            })
            .catch((err) => {
                res.status(500).send('wrong username or password')
            })
    },

    logout: (req, res) => {
        req.logout();
        res.status(200).send('logged out');
    },

    post: (req, res) => {
        const db = req.app.get('db')
        const { title, url, content } = req.body
        const { username, id: user_id } = req.user[0]
        db.newPost([title, url, content, username, user_id])
            .then(() => res.send('complete'))
            .catch(err => console.log(err))
    },

    comment: (req, res) => {
        const db = req.app.get('db')
        const { comment } = req.body
        const { username, id: user_id } = req.user[0]
        db.newComment([comment, username, user_id])
            .then(() => res.send('complete'))
            .catch(err => console.log(err))
    },

    getPost: (req, res) => {
        const db = req.app.get('db')
        db.get()
            .then(post => res.send(post))
            .catch(err => console.log(err))
    },

    deletePost: (req, res) => {
        const db = req.app.get('db')
        const id = req.params.id
        db.delete(id)
            .then(() => res.send("deleted"))
            .catch(err => console.log(err))
    },

    getSession: (req, res) => {
        if (req.user) {
            res.send({
                id: req.user[0].id,
                firstname: req.user[0].firstname,
                lastname: req.user[0].lastname,
                email: req.user[0].email,
                username: req.user[0].username,
                state: req.user[0].state,
                yearjoined: req.user[0].yearjoined,
                url: req.user[0].url
            })
        }
        else { res.status(401).send('session not found') }
    },

    getNews: (req, res) => {
        newsapi.v2.topHeadlines({
            pageSize: 20,
            category: 'technology',
            language: 'en',
            country: 'us'
        }).then(response => {
            res.send(response)
        })
            .catch(err => console.log(err))
    }
}