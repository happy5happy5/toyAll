
  function fibonacci(n) {//정방향 진행하면서 콜스택
  
    function comeagain(a,b,n){
      if (n===0)return a
      else if (n===1)return b
      return comeagain(b,a+b,n-1)
    }
    return comeagain(0,1,n)
  }


//   function fibonacci(n) {//역방향 진행하면서 콜스택
   
//     let some = [0, 1];
//     let thing = (n) => {
//       if(some[n] !== undefined ) { 
//         return some[n]
//       }
//       some[n] = thing(n-2) + thing(n-1); 
//       return some[n]
//     }
//     return thing(n)
//   }