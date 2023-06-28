/* promise 는 reject 로 예외 처리 할 수 있다.*/
/* async는 tjrow 로 예외 처리 할 수 있다.*/


function promise(){
    return new promise((resolve,reject)=>{
        reject('Promise의 예외 처리 입니다.')
    })
}
const rejectP = promErr().catch((e)=>{
    console.log(e)
})
/* async 는 throw로 예외 처리 할 수 있다. */
async function asyncErr(){
    throw 'async의 예외 처리 입니다.'
    console.log(new Date())
}
const resultA = asyncErr().catch((e)=>{
    console.log(e)
})