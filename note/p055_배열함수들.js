const fun1 = (e, i) =>{
    console.log(`${i}번째 요소는 ${e}입니다.`)
}
const fun2 = (e,i) => e * 2
const fun3 = (a,c,i)=> a + c
const fun4 = e => e % 2
const arr = [1,2,3,4,5]
const a = arr.forEach(fun1)
console.log('forEach:',a)
const b = arr.map(fun2)
console.log('map:',b)
const c = arr.reduce(fun3)
console.log('reduce:',c)
const d = arr.filter(fun4)
console.log('filter:',d)