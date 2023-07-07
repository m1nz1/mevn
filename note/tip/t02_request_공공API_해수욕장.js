const request = require('request')

const url =  

request(url,(e,res,body)=>{
    const rst = JSON.parse(body)
    const jonpo = rst.response.body.items
    junpo.forEach(v,(i)=>{
        console.log(`${v.stationName},온도:${v.o3Value},`)
    })
})