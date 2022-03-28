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

//get/put/delete by id
router.route('/:id')
    .get((req,res) => {
        console.log(req.user)
        const userId = req.params.id;
        res.send(`Get User with id: ${req.params.id}`);
    })
    .put((req,res) => {
        const userId = req.params.id;
        res.send(`Update User with id: ${req.params.id}`);
    })
    .delete((req,res) => {
        const userId = req.params.id;
        res.send(`Delete User with id: ${req.params.id}`);
    });

const users = [{name:"Jose"},{name:"Abel"}]
router.param('id', (req,res,next,id) => {
    // console.log(id);
    req.user = users[id];
    next();//this continues on with the rest of our code, starting in the get method (line 20)
})


module.exports = router;