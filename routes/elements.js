const express = require('express');
const router = express.Router();

/* GET Elements listing based on a list id. */
router.get('/:listId', function(req, res, next) {
    const listId = req.params.listId;
    res.send(`This will be all the Elements of the List ${listId}`);
});

/* GET a single element based on id. */
router.get('/:id', function(req, res, next) {
    const id = req.params.id;
    res.send(`This will be the Element ${id}`);
});

/* POST an element based on a list id*/
router.post('/:listId', function(req, res, next) {
    const listId = req.params.listId;
    res.status(201).send(`This will create an element and attach it to the list ${listId} if it exists`);
});

/* DELETE an element based on an id */
router.delete('/:id', function (req, res, next) {
    const id = req.params.id;
    res.send(`This will delete the element ${id}`);
});

/* UPDATE an element based on id with the given parameters */
router.patch('/:id', function (req, res, next) {
    const id = req.params.id;
    res.send(`This will update the element ${id}`);
});

module.exports = router;
