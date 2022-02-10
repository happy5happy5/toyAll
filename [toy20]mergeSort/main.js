const mergeSort = function (arr) {
    // TODO: 여기에 코드를 작성합니다.
      function downTier(arr){
      if (arr.length>1){
        let half=arr.length/2
        let left=arr.splice(0,half)
        return upTier(downTier(left),downTier(arr))
      }else return arr    
    }


    function upTier(left, right){
      let arr=[]
      while(left.length&&right.length){
          if(left[0]<right[0]){
            arr.push(left.shift())
          }else if(left[0]>right[0]){
            arr.push(right.shift())
          }else {
            arr.push(left.shift())
            arr.push(right.shift())
          }
        }
        return [...arr,...left,...right]
    }
    return downTier(arr)
  };
  
