module.exports = {
    getComments(req, res) {
        res.status(200).send(req.blog.posts[req.params.postId].comments)      
    }, 
    addComment(req, res) {
        let newComment = req.body
        req.blog.posts[req.params.postId].comments.push(newComment)
        res.status(200).send(req.blog.posts[req.params.postId].comments)
    },
    updateComment(req, res) {
        req.blog.posts[req.params.postId].comments[req.params.commentId]=req.body
        res.status(200).send(req.blog.posts[req.params.postId].comments)    
    },
    removeComment(req, res) {
      req.blog.posts[req.params.postId].comments.splice(req.params.commentId,1)
      res.status(200).send(req.blog.posts[req.params.postId].comments)
    }  
  }