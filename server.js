//This server renders a static html page
const express = require('express');
const app = express();
const port = 3000;
const host = 'http://localhost';

//we specify the middleware we want to use to serve static pages

app.use(express.static('public'));//it takes the name of the folder where all static files are (by default, and in our case, public)
app.use(express.urlencoded({extended:true}));//this allows us to access info coming from forms
app.use(express.json());//when you make a call from an API with fetch, it will allow us to parse the date into json format 

app.set('view engine', 'ejs')

const userRouter = require('./routes/users');

app.use('/users',userRouter);

app.listen((host,port), () => {console.log(`Server up and running in ${host}:${port}`)});