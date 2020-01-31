const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const Users = require('../helpers/user-model')
const restricted = require('../middleware/restricted')

router.get('/', (req, res)=>{
    Users.find()
        .then(usersList=>{
            res.status(200).json(usersList)
        })
        .catch(()=>{
            res.status(500).json({message: 'failed to get users'})
        })
})



module.exports = router;