/* 주문 받은대로 처리하기 */

/* 주문1) ex 1.7초 만에 아메리카노가 나왔습니다!  [1~2초] */
/* 주문2) ex 3.5초 만에 라떼 나왔습니다!!        [2~3.5초] */
/* 주문3) ex 4.1초 만에 카푸치노 나왔습니다!!     [3~5초] */
/* 주문3) ex 2.2초 만에 에소프레소 나왔습니다!!   [2~3초] */


const am =() =>{
    const a = Math.random()*(2-1)+1
    setTimeout(()=>{
        console.log('아메리카노가 나왔습니다!!',(a))
    },a*1000)
}
const rt = () =>{
    const b = Math.random()*(3.5-2)+2
    setTimeout(()=>{
        console.log('라떼 나왔습니다!!'(b))
    },b*1000)
}
const cc = () =>{
    const c = Math.random()*(5-3)+3
    setTimeout(()=>{
        console.log('카푸치노 나왔습니다!!'(c))
    },c*1000)
}
const as = () =>{
    const d = Math.random()*(3-2)+4
    setTimeout(()=>{
        console.log('에소프레소 나왔습니다!!'(d))
    },d*1000)
}

am()
rt()
cc()
as()