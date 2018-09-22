const express = require('express')
const router = express.Router()
const postsController = require('../controllers/posts')

router.get('/', (req,res)=> {
    postsController.getPosts(req,res)
})
router.post('/', (req,res)=>{
    postsController.addPost(req,res)
})
router.put('/:id', (req,res)=>{
    postsController.updatePost(req,res)
})
router.delete('/:id', (req,res)=>{
    postsController.removePost(req,res)
})
module.exports = router