const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('Users list');
});

//get users
router.get('/new',(req,res) => {
    res.send('Users new form');
});

//post user
router.post('/', (req,res) => {
    res.send('Create User');
});

//get by id
router.get('/:id',(req,res) => {
    const userId = req.params.id
    res.send(`Get User with id: ${req.params.id}`);
});

module.exports = router;