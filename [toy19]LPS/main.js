let str='codecodecode'

const LPS = function (str) {
    if (str.length<2)return 0
    for(let half=parseInt(str.length/2);half>1;half--){
      if(str.slice(0,half)===str.slice(str.length-half)){
          return(half)
          }
      }
    return 0
  }