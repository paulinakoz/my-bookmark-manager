require('dotenv').config();
const express = require('express');
const bookmarksRouter = express.Router();

const { Bookmark } = require('../models');
const { Comment } = require('../models');
const { Tag } = require('../models');
const { BookmarkTag } = require('../models');

bookmarksRouter.get('/', async (req, res) => {
    const bookmarks = await Bookmark.findAll({ include: { all: true }});
    
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
    const tags = await Promise.all(tagNames.map(tagName => Tag.findOrCreate({
        where: { 
            name: tagName 
        }
    })));

    const bookmark = await Bookmark.create({ 
        url: req.body.url 
    });

    tags.forEach(tag => tag[0].addBookmark(bookmark));

    res.redirect('/');
});

bookmarksRouter.delete('/:bookmarkId', async (req, res) => {
    const id = req.params.bookmarkId;

    await Bookmark.destroy({
        where: {
           id: id
        }
    });

    res.redirect('/');  
});

bookmarksRouter.put('/:bookmarkId', async (req, res) => {
    const id = req.params.bookmarkId;

    await Bookmark.update(
        {url: req.body.url},
        {where: {
            id: id
        }
    });

    res.redirect('/');
});

module.exports = bookmarksRouter;