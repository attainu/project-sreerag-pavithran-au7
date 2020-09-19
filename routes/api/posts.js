const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const auth = require('../../middlewares/auth');

const Post = require('../../models/Post');
const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route       POST api/post
// @desc        Create a Post
// @access      Private

router.get('/', [auth, 
   [ check('text', 'Text is Required').not().isEmpty()]
] ,async(req, res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ message: errors.array() })
    }

    try {
        const user = await (await User.findById(req.user.id)).isSelected('-password');
        const newPost = {
            text: req.body.text,
            name: user.name,
            avatar: user.avatar,
            user: req.user.id
        }
        const post = await newPost.save();
        res.json(post)

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;