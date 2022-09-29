const express = require('express');
const router = express.Router();
const Element = require('../models/element');

/* GET Elements listing based on a list id. */
router.get('/:listId', function(req, res, next) {
    const listId = req.params.listId;
    Element.find({list: listId}, (err, elements) => {
        if (err) return handleError(err);
        res.status(200).send(elements);
    });
    // res.send(`This will be all the Elements of the List ${listId}`);
});

/* GET a single element based on id. */
router.get('/:id', function(req, res, next) {
    const id = req.params.id;
    res.send(`This will be the Element ${id}`);
});

/* POST an element based on a list id*/
router.post('/', function(req, res, next) {
    console.log(req.body);
    const element = new Element(req.body);
    element.save( (err) => {
        if (err) return handleError(err);
    });
    res.status(201).send(`Created`);
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
