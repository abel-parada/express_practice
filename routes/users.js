const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('Users list');
});

//get users
router.get('/new',(req,res) => {
    res.render('users/new', {firstName:"TESTING EJS"});//we ask to render this page from the views folder
});

//post user
router.post('/', (req,res) => {
    // res.send('Create User');
    const isValid = true;
    if(isValid){
        users.push({firstName: req.body.firstName});
        res.redirect(`/users/${users.length - 1}`)
    }
    else {
        console.log("Error");
        res.render('users/new',{firstName: req.body.firstName});
    }
    // console.log(req.body.firstName);
    // res.send('Hello, I understand this!');
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