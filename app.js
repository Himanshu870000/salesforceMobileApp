/**
 * Author : Himanshu Tripathi
 * description: entry point for the node app
 */

const express = require('express');
const app = express();
const dotenv = require('dotenv')
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan')
dotenv.config({ path: './config.env' })

//Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));


// Postgres Database Conection
const client = require('./database/connection');


//app specifc routes TODO:
const authRoutes = require("./routes/auth");



// My Routes
app.use("/api", authRoutes);


app.get('/', (req, res) => {
    res.json({ success: true, messge: 'Welcome to backend Zone' });
})


// PORT

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`server is running at the ${port}`);
})