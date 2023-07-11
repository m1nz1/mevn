<template>
  <div class="container">
    <h1 class="title">파파고 <mark>번역기</mark></h1>
    <div class="input-container">
      <select v-model="slt1" class="select">
        <option value="ko">한국어</option>
      </select>
      <input
        id="input-text"
        type="text"
        v-model="txt"
        class="input"
        placeholder="번역하실 문장을 입력해주세요."
      />
      <button @click="ppg" class="button">번역하기</button>
    </div>
    <div class="output-container">
      <label class="label">출력 언어: 영어</label>
      <h4>{{ rst }}</h4>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
  data() {
    return {
      rst: '언어 번역을 합니다.',
      txt: '',
      slt1: 'ko', // Set default value to Korean
      slt2: 'en' // Set default value to English
    }
  },
  methods: {
    ppg() {
      this.rst = '번역 중...'

      // 동일한 언어를 선택한 경우에는 번역 요청을 보내지 않음
      if (this.slt1 === this.slt2) {
        this.rst = this.txt
        return
      }

      const params = {
        input: this.txt,
        source: this.slt1,
        target: this.slt2
      }

      axios
        .get('/ppg', { params })
        .then((res) => {
          this.rst = res.data
        })
        .catch((error) => {
          console.error(error)
          this.rst = '번역 에러 발생'
        })
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

.title {
  font-family: 'Jua', sans-serif;
  font-size: 24px;
  margin-bottom: 20px;
}

.input-container {
  margin-bottom: 20px;
}

.select {
  padding: 6px 12px;
  font-size: 16px;
}

.input {
  width: 100%;
  padding: 8px 12px;
  font-size: 16px;
  margin-top: 8px;
}

.button {
  padding: 8px 16px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

.output-container {
  margin-top: 20px;
}

h4 {
  margin-top: 10px;
  font-size: 25px;
}

</style>
