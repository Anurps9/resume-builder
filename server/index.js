const express = require('express')
const app = express()
const path = require('path')
const user = require('./routes/user')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fs = require('fs')
require('dotenv').config()
const pdf = require('html-pdf')
const resume = require('./routes/resume')

// main()
// .then(() => {
//     console.log('Connected to database');
// })
// .catch((err) => {
//     throw err
// })

// async function main(){
//     await mongoose.connect(process.env.DATABASE_URL)
// }

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '../client/build')))
app.use(express.json())
app.use('/user', user)
app.use('/resume', resume)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
})