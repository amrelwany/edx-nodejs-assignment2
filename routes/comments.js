const express = require('express')
const router = express.Router({ mergeParams: true })
const commentsController= require('../controllers/comments')

router.get('/',(req,res)=>{
    commentsController.getComments(req,res)
})
router.post('/',(req,res)=>{
    commentsController.addComment(req,res)
})
router.put('/:commentId',(req,res)=>{
    commentsController.updateComment(req,res)
})
router.delete('/:commentId',(req,res)=>{
    commentsController.removeComment(req,res)
})





module.exports = router