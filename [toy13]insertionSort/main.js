arrOrigin=[20, -10, -11, 2, 29]
// callback=x=>x*x
callback=undefined
  function insertion(arr,callback){
      let arrForCallback=[...arr];
    if(typeof callback==='function'){
        arrForCallback=arrForCallback.map(x=>callback(x))
    }


    for(let i=1;i<arr.length;i++){
        if(arrForCallback[i-1]>arrForCallback[i]){
            let temp = arr.splice(i,1)
            let tempForCallback = arrForCallback.splice(i,1)
            for(let j=i-1;j>=0;j--){
                if(arrForCallback[j]>tempForCallback[0]){
                    if(j===0){
                        arr.splice(0,0,temp[0])
                        arrForCallback.splice(0,0,tempForCallback[0])
                        break;
                    }
                }else {
                    arr.splice(j+1,0,temp[0])
                    arrForCallback.splice(j+1,0,tempForCallback[0])
                    break;
                }

            }
        
        }
        
    }
    return arr
}


let result = insertion(arrOrigin,callback)
console.log(result)