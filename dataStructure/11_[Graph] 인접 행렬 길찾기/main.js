function getDirections(matrix, from, to) {
    function serch(matrix,from,to){
      
      function idxArr(arr){
        return arr.reduce((a,e,i)=>{
          if(e===1)a.push(i)
          return a;},[])}
  
      let fromIndex=idxArr(matrix[from]) 
      if(fromIndex.includes(to))return true
      if(matrix.every(x=>x[to]===0))return false
    
  
      for(let i=0;i<fromIndex.length;i++){
        if (fromIndex[i]===from)return false
        if(serch(matrix,fromIndex[i],to))return true
      }
      return false
    }
    return serch(matrix,from,to)
  }




  

function getDirections(matrix, from, to, memo={}) {
    if(matrix[from][to]===1)return true
    let que=[]
    matrix[from].forEach((x,i)=>{
        if(!memo[`${from}&${i}`]&&x===1){
            que.push(i)
            memo[`${from}&${i}`]=true
        }
    })
    
    for(let i=0;i<que.length;i++){
        if(matrix[que[i]][to])return true
        else if(getDirections(matrix,que[i],to,memo))return true
    }
    return false
  }


    const result = getDirections(
        [
            [0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0],
            [0, 1, 0, 0, 0],
            [0, 1, 1, 0, 0],
            [1, 1, 1, 1, 0],
        ],
        1,
        4
    );

    console.log(result); // false