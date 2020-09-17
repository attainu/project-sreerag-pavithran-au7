const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth');
const User = require('../../models/User');
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

// @route       GET api/users
// @desc        Test Route
// @access      Public

router.get('/', auth, async(req, res, next)=>{
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})

// @route       POST api/auth
// @desc        Authenticate User and Get Token
// @access      Public

router.post('/', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
] ,async(req, res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {email, password} = req.body;
    try {
        let user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({
                errors: [{message: 'Invalid Credentials'}]
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({
                errors: [{message: 'Invalid Credentials'}]
            }) 
        }

        // Return jwtoken
        const payload = {
            user: {
                id: user.id
            }
        }
        jwt.sign(payload, config.get('jwtsecret'), {
            expiresIn: 360000
        }, (err, token)=>{
            if(err) throw err;
            res.json({ token })
        })
        console.log(req.body)
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error')
    }
})

module.exports = router;