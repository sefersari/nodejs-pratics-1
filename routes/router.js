const express   = require('express');
const router    = express.Router();
const main      = require('../services/main');
const config    = require('../config');

/* GET customers. */
router.get('/', async function(req, res, next) {
    try {
        res.json(await main.getCustomers(req.query.page,req.query.limit));
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        next(err);
    }
});

module.exports = router;
