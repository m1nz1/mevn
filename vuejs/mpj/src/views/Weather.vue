<template>
  <h1>실시간 <mark>대기오염(미세먼지)</mark> 정보</h1>
  <div class="weather-container">
    <div v-for="item in junpo" :key="item.stationName" class="weather-item">
      <h3>{{ item.stationName }}의 날씨</h3>
      <div class="weather-details">
        <p>
          오존단계: <span class="grade">{{ item.o3Grade }}</span>
        </p>
        <p>
          오존농도: <span class="value">{{ item.o3Value }}</span>
        </p>
        <p>
          미세먼지농도단계(PM10):
          <span class="grade">{{ item.pm10Grade }}</span>
        </p>
        <p>
          미세먼지농도(PM10): <span class="value">{{ item.pm10Value }}</span>
        </p>
        <p>
          일산화탄소농도: <span class="value">{{ item.coValue }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      junpo: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      const url =
        'https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=rk0GSrmAVU14wuaQWH3j3EiG2KtkjhLNO4umwZjORSg22OIcO46DeBG9jLVxRdC5YxWLPpsBgZ%2Bw5d3AwnTIJQ%3D%3D&sidoName=%EB%B6%80%EC%82%B0&returnType=JSON'

      axios
        .get(url)
        .then((response) => {
          const rst = response.data.response.body.items
          this.junpo = rst
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>

<style scoped>
</style>
