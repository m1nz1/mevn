<template>
  <div>
    <select name="" id="sl" v-model="selData">
      <option v-for="city in Object.keys(obj)" :key="city" :value="obj[city]">
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
    <tr v-for="(product, index) in products" :key="index">
      <td>{{ index + 1 }}</td>
      <td>{{ product.category }}</td>
      <td>{{ product.name }}</td>
      <td>{{ product.price }}</td>
      <td>{{ product.shippingFee }}</td>
      <td>
        <input type="number" v-model="product.quantity" @input="updateTotal" />
      </td>
      <td>{{ product.total }}</td>
    </tr>
    <tr>
      <td colspan="6" class="colspan-cell">총합</td>
      <td class="tP">{{ totalPrice }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  data() {
    return {
      selData: '',
      obj: {
        부산: '부산',
        서울: '서울',
        제주: '제주',
        창원: '창원',
        대구: '대구'
      },
      products: [
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
      ],
      totalPrice: 0
    }
  },
  methods: {
    updateTotal() {
      let total = 0
      let shippingFeeAdded = false

      for (let i = 0; i < this.products.length; i++) {
        const product = this.products[i]
        product.total = product.price * product.quantity

        if (product.quantity > 0 && !shippingFeeAdded) {
          product.total += product.shippingFee
          shippingFeeAdded = true
        }

        total += product.total
      }

      this.totalPrice = total
    }
  }
}
</script>

<style>
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
.colspan-cell {
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
