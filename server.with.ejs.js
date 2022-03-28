const express = require('express');
const res = require('express/lib/response');
const app = express(); //we create an app that helps as set the entire server

app.set('view engine', 'ejs')

const port = 3000;

//we set the routes
app.get('/', (req,res) => {
    // res.download('server.js');
    // res.json({message:"Error"});
    // res.send('Moi :). You are the best')
    res.render('index', {textv2:'World'})
});


const userRouter = require('./routes/users');

app.use('/users',userRouter);

app.listen(port, () => {console.log(`Server up and running in port: ${port}`)})