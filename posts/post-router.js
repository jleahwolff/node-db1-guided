const express = require('express');

// database access using knex
const db = require('../data/db-config.js');

const router = express.Router();

// List of posts ✅
router.get('/', (req, res) => {
// Select from posts
// all database operations return a promise
db.select('*').from('posts').then(posts => {
    res.status(200).json(posts);
})
.catch(err => {
    console.log(err);
    res.status(500).json({ error: "Failed to get list of posts"})
})
});

// Add post by id ✅
router.get('/:id', (req, res) => {
db('posts').where({ id: req.params.id })
.then(posts => {
    res.status(200).json(posts[0]);
})
.catch(err => {
    console.log(err);
    res.status(500).json({ err: "failed to get list by id"})
})
});

// add post ✅
router.post('/', (req, res) => {
// insert into posts () value ()
db("posts")
    .insert(req.body, "id") //will generate a warning on console when using sqlite, ignore that
    .then (ids => {
        res.status(201).json(ids);
})
    .catch(err => {
    res.status(500).json({ error: "Unable to add" })
})
});

// update post ✅
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    db("posts")
    .where({ id }) // remember to filter or all records will be updated (BAD!)
    .update(changes)
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({ error: "Unable to add" })
    })
});

// remove a post ✅
router.delete('/:id', (req, res) => {
const id = req.params.id;
    db("posts")
    .where({ id }) // remember to filter or all records will be removed! (BAD!)
    .del()
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({ error: "Unable to add" })
    })
});

module.exports = router;