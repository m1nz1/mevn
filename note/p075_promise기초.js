const a = (c= '나가자')=> {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`${c}`)
        },1000)
    })
}
a().then((result)=>{
    console.log(result)
    return a('싸우자')
}).then((result)=>{
    console.log(result)
    return a('이기자')
}).then((result=>{
    console.log(result)
}))