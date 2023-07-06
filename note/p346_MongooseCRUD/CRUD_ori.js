require('dotenv').config()
const mongoose = require('mongoose')
const USER = process.env.dbid
const PWD = process.env.dbpw
const HOST = process.env.dbhost
const DB = 'd1'
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`
mongoose.set(`strictQuery`,false)
mongoose
    .connect(mongodbURL,{useNewUrlParser:true})
    .then(()=>{console.log('Connection successful !!')})
    .catch((e)=>console.error(e))
const mycol = require('./schema.js')
module.exports = mycol