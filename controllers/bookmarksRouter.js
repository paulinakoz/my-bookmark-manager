require('dotenv').config();
const express = require('express');
const bookmarksRouter = express.Router();

const { Bookmark } = require('../models');

bookmarksRouter.get('/', async (req, res) => {
    const bookmarks = await Bookmark.findAll();
    
    res.render('bookmarks/index', {
        bookmarks: bookmarks,
    }); 
});

bookmarksRouter.get('/:bookmarkId/edit', async (req, res) => {
    const bookmarks = await Bookmark.findOne({
        where: {
            id: req.params.bookmarkId
        }
    });
    
    res.render('bookmarks/edit', {
        bookmarks: bookmarks,
    }); 
});

bookmarksRouter.post('/', async (req, res) => {
    let url = req.body.url
    let comment = req.body.comment
    let tags = req.body.tags

    console.log(comment)

    await Bookmark.create({
        url: url, 
        comments: comment, 
        tags: tags
    })

    const bookmarks = await Bookmark.findAll();
    
    res.render('bookmarks/index', {
        bookmarks: bookmarks,
    });  
})

bookmarksRouter.delete('/:bookmarkId', async (req, res) => {
    const id = req.params.bookmarkId

    await Bookmark.destroy({
        where: {
           id: id
        }
    })

    const bookmarks = await Bookmark.findAll();

    res.render('bookmarks/index', {
        bookmarks: bookmarks,
    }); 
})

bookmarksRouter.put('/:bookmarkId', async (req, res) => {
    const id = req.params.bookmarkId

    await Bookmark.update(
        {url: req.body.url},
        {where: {
            id: id
        }
    })

    const bookmarks = await Bookmark.findAll();

    res.render('bookmarks/index', {
        bookmarks: bookmarks,
    }); 
})

module.exports = bookmarksRouter;