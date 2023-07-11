const request = require('request')
require('dotenv').config()
const key = process.env.okey

const gugun = encodeURIComponent('부산광역시 금정구')
const url = `https://apis.data.go.kr/6260000/BusanPopulationStaticService/getPopulationInfo?serviceKey=${key}&numOfRows=5&pageNo=1&resultType=JSON&gugun=${gugun}`

request(url, (e, res, body) => {
  const result = JSON.parse(body)
  const show = result.getPopulationInfo.body.items.item
  show.forEach((v, i) => {
    console.log('=================================')
    console.log('지역명 : ', v.gugun)
    console.log('제공연도-월 : ', v.rateYear)
    console.log('동수 : ', v.dongCnt)
    console.log('세대수 : ', v.houseCnt)
    console.log('총인구수 : ', v.totPopCnt)
    console.log('남성인구수 : ', v.mPopCnt)
    console.log('여성인구수 : ', v.fPopCnt)
    console.log('시 전체 인구비율 : ', v.popRatio)
    console.log('인구밀도 : ', v.popDensity)
    i === show.length - 1
      ? console.log('=================================')
      : ''
  })
})
