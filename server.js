const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const errorHandler = require('errorhandler')

const routes = require('./routes/index')

let blog = {
    posts: [
        {
            id: 0,
            name: 'Top 10 ES6 Features every Web Developer must know',
            url: 'https://webapplog.com/es6',
            text: 'This essay will give you a quick introduction to ES6',
            comments: [
                {text: 'Comment 1'},
                {text: 'Comment 2'}
            ]
        }
    ]
}
let app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorHandler())
app.use((req,res,next)=>{
    req.blog = blog
    next()
})

app.use('/posts',routes.posts)
app.use('/posts/:postId/comments', routes.comments)

app.listen(3000)