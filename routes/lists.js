const express = require('express');
const router = express.Router();
const List = require('../models/list');

/* GET lists listing. */
router.get('/', async function(req, res, next) {
    const lists = await List.find();
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
    const list = new List(req.body);
    list.save( (err) => {
        if (err) return handleError(err);
    });
    res.send(`Hello`);
    // res.send(`This will create a list`);
});

/* DELETE a List based on an id */
router.delete('/:id', function (req, res, next) {
    const id = req.params.id;
    List.deleteOne({"_id": id}, function (err) {
        if(err) res.status(500).send({"message": err});
        res.status(200).send({"message": "Successful deletion"});
    });
});

/* UPDATE a list based on id with the given parameters */
router.patch('/:id', function (req, res, next) {
    const id = req.params.id;
    res.send(`This will update the list ${id}`);
});

module.exports = router;
