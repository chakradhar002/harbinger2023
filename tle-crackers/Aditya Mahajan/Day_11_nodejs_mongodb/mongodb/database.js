const mongoose = require('mongoose')
const express = require('express')
const url = 'mongodb://localhost/test1' // mongo db database url
var app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection
con.on('open', () => {
    console.log('connected...')
})


const alienSchema = new mongoose.Schema({

        name: String,
        age: Number
})

module.exports = mongoose.model('Alien',alienSchema)

