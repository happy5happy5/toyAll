function orderOfPresentation (N, K) {
    
  function fac(n) {
    let result = 1;
    for(let i=2; i<=n; i++) result *= i;
    return n<0? 0:result;
    }


    // N=7, K=[7,3,4,2,5,1,6]
    //arr=[7,3,4,2,5,1,6]
    arr=[...K]
    arrOriginal=[...K]
    let result=0;
    for (let i=0;i<N-1;i++){
        mulyplier=arr.map(x=>x<arrOriginal[i]).filter(x=>x===true).length
        arr.shift()
        result=result + mulyplier*fac(N-i-1)
    }
    return result

// K.map(x=>x<7).filter(x=>x===true).length
// [false, true, true, true, true, true, true]
}