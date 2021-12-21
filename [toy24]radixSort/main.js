let arr= [20, 29]
let power=0;

function radix(_arr,power){
    let arr=[..._arr]
    let arrNext=[]
    let arrNeg=[]
    let powerNext;
    let digit;
    let bucket ={
        '0':[],
        '1':[],
        '2':[],
        '3':[],
        '4':[],
        '5':[],
        '6':[],
        '7':[],
        '8':[],
        '9':[],
    }
    let bucketNext ={
        '0':[],
        '1':[],
        '2':[],
        '3':[],
        '4':[],
        '5':[],
        '6':[],
        '7':[],
        '8':[],
        '9':[],
    }

    while(arr.length>0){
        
        digit=(''+parseInt(arr.slice(-1)/(10**power))).slice(-1)
        powerNext=(''+arr.slice(-1)).length-1
        if(arr.slice(-1)<0){
            arrNeg.push(-arr.pop())
        }else if(powerNext-power===0){
            bucket[digit].push(arr.pop())
        }else{
            bucketNext[digit].push(arr.pop())
        }
    }
    for(let i=9;i>=0;i--){
        arr.push(...bucket[i].reverse())
    }
    for(let i=9;i>=0;i--){
        arrNext.push(...bucketNext[i].reverse())
    }
    if(arrNeg.length>1){
        arrNeg=[...radix(arrNeg,0)].reverse().map(x=>x=-x)
    }
    if (arrNext.length>0) return [...radix(arrNext,power+1),...arr,...arrNeg]
    
    else return [...arr,...arrNeg]
}

// debugger
console.log(radix(arr,power).reverse())