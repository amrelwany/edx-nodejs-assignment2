module.exports = {
    getPosts(req, res) {
        res.status(200).send(req.blog.posts)
    },
    addPost(req, res) {
        let newPost = req.body
        let postId = req.blog.posts.length
        newPost.id= postId
        req.blog.posts.push(newPost)
        res.status(200).send({postId: postId})
    },
    updatePost(req, res) {
        req.blog.posts[req.params.id]= req.body
        res.status(200).send(req.blog.posts[req.params.id])
  
    },
    removePost(req, res) {
        req.blog.posts.splice(req.params.id,1)
        res.status(204).send()
    }
  }