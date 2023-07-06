const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PhotoSchema = new Schema({
    albumId:Number,
    id:Number,
    title:String,
    url:String,
    thumbnaiUrl:String
})
module.exports = mongoose.model('Photo',PhotoSchema,'Photo')