const router = require('express').Router();
const {
    index,
    namedReport
} = require('../controllers/default_controller');

router.get('/', index);

router.get('/name/:name', namedReport);

module.exports=router;