var express = require('express');
var router = express.Router();
var survey = require('../action/survey');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.post('/survey', survey.commit);

module.exports = router;
