const express = require('express');
const router = express.Router();
//test
router.get('/', (req, res) => {
    const str = [{
        "name:": "Vic",
        "msg": "Hello!",
        "username": "VicHello6"
    }];
    res.end(JSON.stringify(str));
})

router.post('/add', (req, res) => {
    res.end('NA');
});

module.exports = router;