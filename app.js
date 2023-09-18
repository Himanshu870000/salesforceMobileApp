/**
 * Author : Himanshu
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


// Sf Connections

const force = require("./sfConnection/DevOrg");


//app specifc routes TODO:
const authRoutes = require("./routes/auth");
const GetUsers = require("./routes/index");
const createLead = require("./routes/lead");
const createAccount = require("./routes/account");
const createContact = require("./routes/contact");
const createOpportunity = require("./routes/opportunity")



// My Routes
app.use("/api", authRoutes);
app.use("/api", GetUsers);
app.use("/api", createLead);
app.use("/api", createAccount);
app.use("/api", createContact);
app.use("/api", createOpportunity);


app.get('/', (req, res) => {
    res.json({ success: true, messge: 'Welcome to backend Zone' });
})


// PORT

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`server is running at the ${port}`);
})