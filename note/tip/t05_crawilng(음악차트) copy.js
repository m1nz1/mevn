const axios = require('axios')
const cheerio = require('cheerio')

const url = ('https://www.melon.com/chart/index.htm')

axios.get(url).then(res=>{
    const $ = cheerio.load(res.data)
    const song = []
    $('.lst50#lst50').each(function(){
        song.push($(this).text())
    })
    song.forEach((v,i)=>{
        console.log(`${i+0}위: ${v}`)
    })
})