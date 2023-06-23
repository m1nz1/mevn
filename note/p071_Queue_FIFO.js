class Queue{
    constructor(){
        this.a=[]
    }
    front(){
        if(this.a.length===0){
            console.log('Queue is empty(front)')
            return
        }else return console.log(this.a[0])
    }
    enqueue(value){
        this.a.push(value)
    }
    dequeue(){
        if(this.a.length === 0){
            console.log('Queue is empty(dequeue)')
            return
        }
        this.a.shift()  //배열의 맨 앞 삭제
    }
}
const q = new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
for(let i = 0; i<4; i++){
    q.front() 
    q.dequeue() // a에 있는 첫번째 삭제
}