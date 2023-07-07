const mongoose = require('mongoose')
const Photos = require('./photo.js')
const fs = require('fs')
const path = require('path')
const mongoDB = 'mongodb://127.0.0.1/my_database'


    // .connect(mongoDB,{useNewUrlParser:true}) //6.0이후부터 자동관리
mongoose.set('strictQuery',false)
mongoose
    .connect(mongoDB,{useNewUrlParser:true})
    .then(()=>{console.log('Connection successfull !!!')})
    .catch((err)=>{console.log(err)})

const _path = path.join(__dirname, './photos.json')
const main = async()=>{
    const t = JSON.parse(fs.readFileSync(_path).toString())
    console.time('5000건의 데이터 삽입')
    Photos.insertMany(t).then(()=>{
        console.timeEnd('5000건의 데이터 삽입')
    })
}
main()