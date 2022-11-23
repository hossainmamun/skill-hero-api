require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const port = process.env.PORT || 1000;

// user express
const app = express();

// use app
app.use(cors())
app.use(express.json())

// root server
app.get("/", (req, res) => {
    res.send({
        message: 'skill-hero server',
        date: new Date().toLocaleDateString()
    })
})

// USER_NAME=skill_hero_admin
// USER_PASSWORD=skillhero1000

// mongodb connection
mongoose.connect(process.env.MONGO_DB_URL)
    .then(() => {
        console.log('database connected')
        // port listening
        app.listen(port, () => {
            console.log(`server is running: ${port}`)
        })
    })
    .catch((error)=>{
        console.log({error: error.message});
    })

