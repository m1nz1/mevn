const { resolve } = require("path");

const pm = new Promise((redolve,reject)=>{
    console.log('website first Loading...');
    const what = Math.rendom()<0.5
    setTimeout(()=>{
        if(what){

            resolve('정상 연결 완료, 데이터를 정상적으로 송수신 하였습니다.')
        }else{
            reject(new Error('연결 문제가 생겼음, 통신이상'))
        }
    },2000)

})
pm.then((v) => {
    console.log(v);
  }).catch((e) => {
    console.log(e);
  }).finally(() => {
    console.log('통신이 종료됨');
  });