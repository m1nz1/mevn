<template>
  <div>
    <select name="" id="sl" v-model="selData">
      <option v-for="(city, key) in cities" :key="key" :value="city">
        {{ city }}
      </option>
    </select>
    <br />
    <h4>선택하신 배송지역은: {{ selData }}</h4>
    <span>※ 제주산간지방은 5,000원이 추가됩니다.</span>
  </div>
  <br />
  <table>
    <tr>
      <th>No.</th>
      <th>카테고리</th>
      <th>제품명</th>
      <th>가격</th>
      <th>배송료</th>
      <th>수량</th>
      <th>합계</th>
    </tr>
    <tr v-for="(item, i) in productList" :key="i">
      <td>{{ i + 1 }}</td>
      <td>{{ item.category }}</td>
      <td>{{ item.name }}</td>
      <td class="iprice">
        <input v-model.number="item.price" style="width: 80px" />
      </td>
      <td>
        {{ selData === '제주' ? item.shippingFee + 5000 : item.shippingFee }}
      </td>
      <td><input type="number" min="0" v-model="수량[i]" /></td>
      <td>
        {{
          (total[i] = item.price * 수량[i]) +
          (수량[i] > 0
            ? selData === '제주'
              ? item.shippingFee + 5000
              : item.shippingFee
            : 0)
        }}
      </td>
    </tr>
    <tr>
      <td
        id="sum-title"
        colspan="6"
        style="background-color: #f6b0db; font-weight: bold">
        총합
      </td>
      <td>{{ (sum = total.reduce((a, c) => a + c, 0)) }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  data() {
    return {
      수량: [0, 0, 0, 0, 0],
      sum: 0,
      total: [],
      cities: {
        부산: '부산',
        서울: '서울',
        제주: '제주',
        창원: '창원',
        대구: '대구'
      },
      selData: '',
      productList: [
        {
          category: '악세사리',
          name: '기계식키보드',
          price: 100000,
          shippingFee: 5000,
          quantity: 0,
          total: 0
        },
        {
          category: '악세사리',
          name: '무선마우스',
          price: 12000,
          shippingFee: 3000,
          quantity: 0,
          total: 0
        },
        {
          category: '노트북/테블릿',
          name: '아이패드',
          price: 7250000,
          shippingFee: 8000,
          quantity: 0,
          total: 0
        },
        {
          category: '노트북/테블릿',
          name: '태블릿PC',
          price: 350000,
          shippingFee: 10000,
          quantity: 0,
          total: 0
        },
        {
          category: '악세사리',
          name: '무선충전기',
          price: 42000,
          shippingFee: 3000,
          quantity: 0,
          total: 0
        }
      ]
    }
  }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
  border-radius: 10px;
  border-style: hidden;
  box-shadow: 0 0 0 1px #000;
}
tr,
th {
  border: 1px solid #000000;
  text-align: center;
  padding: 8px;
}
td {
  border: 1px solid #000000;
  text-align: center;
  padding: 8px;
  border-radius: 0 0 0 10px;
}
th {
  background-color: #c58aff;
}
.colspan {
  background-color: #f6b0db;
  font-weight: bold;
}
.tP {
  font-weight: bold;
}
tr:first-child th:first-child {
  border-top-left-radius: 10px;
  background-color: #c58aff;
}

tr:first-child th:last-child {
  border-top-right-radius: 10px;
  background-color: #c58aff;
}
#sl {
  padding: 5px;
}
input {
  width: 40px;
}
</style>
