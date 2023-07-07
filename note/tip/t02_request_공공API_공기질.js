const request = require('request')

const url =  ''

request(url,(e,res,body)=>{
    const rst = JSON.parse(body)
    console.log(rst.response.body.items[4])
})