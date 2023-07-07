require('dotenv').config()
const request = require('request')

const { XMLParser } = require("fast-xml-parser");
const parser = new XMLParser()

const url = 'http://apis.data.go.kr/6260000/BusanBIMS/bitArrByArsno?arsno=05713&serviceKey='
const key = process.env.okey
// const bstop = encodeURI('05713')  // < - > decodeurl()
// const opt = '?arsno=' + bstop

const urlTotal = url + key

console.log(urlTotal)

request(urlTotal, (e,res , body) => {
    const rst = parser.parse(body)
    const _ = rst.response.body.items
    console.log(_)
})
