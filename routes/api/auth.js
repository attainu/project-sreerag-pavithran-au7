const express = require('express');
const router = express.Router();

// @route       GET api/users
// @desc        Test Route
// @access      Public

router.get('/', (req, res, next)=>{
    res.send('Auth Route')
})

module.exports = router;