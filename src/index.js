//importing required modules
const express = require('express')
const app = require('./app.js')
const mongoose = require('mongoose')
const port = process.env.PORT || 3000 

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE
const DATABASE_URL = "mongodb://localhost/subscribers";
mongoose.connect("mongodb+srv://navin:student123@cluster0.uzq32jx.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))
 
