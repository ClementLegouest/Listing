const express = require('express');
const router = express.Router();

/* GET lists listing. */
router.get('/', function(req, res, next) {
    res.send(`This will be all the Lists`);
});

/* GET a single list based on id. */
router.get('/:id', function (req, res, next) {
    const id = req.params.id;
    res.send(`This will be List ${id}`);
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
