const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Routes = require('./routes/route');

const app = express();


//Middlewares
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

//Routes
app.use('/',Routes);

//connecting to database

// const DB_CONNECTION = {ADD DATABSE COONECTON TO MONGODB}

mongoose.connect(DB_CONNECTION,{
    useNewUrlParser: true,
    useUnifiedTopology: true,  
}).then(console.log("connected to db"))
.catch(err=>console.log(err));


app.get('/',(req,res) =>{
    res.json("welcome to crud applicaton");
})


PORT = process.env.PORT || 3006;
app.listen(PORT,()=> console.log(`server is running on port ${PORT}`));