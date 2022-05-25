const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDb = require('./config/conn');

// rest variable
const app = express();

// config dotenv
dotenv.config();

// db config
connectDb();

// middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan("dev"));

//PORT
const PORT = 3000 || process.env.PORT;

//listen
app.listen(PORT,()=>{
    console.log(`App is running on PORT ${PORT}`);
})