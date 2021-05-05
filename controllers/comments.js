const express = require('express');
const commentsRouter = express.Router({mergeParams: true});

const models = require('../models');
const Comment = models.Comment;
const Bookmark = models.Bookmark;

commentsRouter.get('/new', async (req, res) => {
    const bookmark = await Bookmark.findOne({ 
        where: { 
            id: req.params.bookmarkId 
        } 
    });

    res.render('comments/new', { bookmark: bookmark });
})

commentsRouter.post('/', async (req, res) => {
    await Comment.create({
      text: req.body.text,
      BookmarkId: req.params.bookmarkId
    })
  
    res.redirect('/')
})

module.exports = commentsRouter;
