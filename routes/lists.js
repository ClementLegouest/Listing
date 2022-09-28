const express = require('express');
const router = express.Router();
const ListModel = require('../models/list');

/* GET lists listing. */
router.get('/', async function(req, res, next) {
    const lists = await ListModel.find();
    res.status(200).send(lists);
    // res.send(`This will be all the Lists`);
});

/* GET a single list based on id. */
router.get('/:id', function (req, res, next) {
    const id = req.params.id;
    res.send(`This will be List ${id}`);
});

/* POST a new list */
router.post('/', function (req, res, next) {
    const list = new ListModel({name: `test`});
    list.save( (err) => {
        if (err) return handleError(err);
    });
    res.send(`Hello`);
    // res.send(`This will create a list`);
});

/* DELETE a List based on an id */
router.delete('/:id', function (req, res, next) {
    const id = req.params.id;
    res.send(`This will delete the list ${id}`);
});

/* UPDATE a list based on id with the given parameters */
router.patch('/:id', function (req, res, next) {
    const id = req.params.id;
    res.send(`This will update the list ${id}`);
});

module.exports = router;
