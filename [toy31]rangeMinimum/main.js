let [arr,ranges]= [randomNumberArray(500000,10000,1000000), [[0,499999], [0, 499998]]]
// let [arr,ranges]=[[1, 3, 2, 7, 9, 11], [[1, 4], [0, 3]]]
function randomNumberArray(num,min,max){
    
  function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
  }
  let result=[]
  for(i=0;i<num;i++){
      result.push(getRandomInt(min, max))
  }
  return result
}
const rangeMinimum = function (arr, ranges) {
  // TODO: 여기에 코드를 작성합니다.

  function pyramidbuilder(arr,ps,pe){
    if(ps===pe)return{value:arr[ps]}
    let half=parseInt((ps+pe)/2)
    let left=pyramidbuilder(arr,ps,half)
    let right=pyramidbuilder(arr,half+1,pe)
    return{
      value:left.value<right.value?left.value:right.value,
      left,
      right
    }
  }
  let pyramid=pyramidbuilder(arr,0,arr.length-1)
  // function treasureHunter(pyramid,ps,pe,rs,re){
  //   if(rs<=ps&&pe<=re)return pyramid.value
  //   if (pe < rs || re < ps) {
  //     return Number.MAX_SAFE_INTEGER;
  //   }
  //   let half=parseInt((ps+pe)/2)
  //   return Math.min(
  //     treasureHunter(pyramid.left,ps,half,rs,re),
  //     treasureHunter(pyramid.right,half+1,pe,rs,re)
  //   );
  // }

function pyramidTOP(pyramid,ps,pe,rs,re){
  if(ps===rs&&pe===re)return pyramid.value
  let half=parseInt((ps+pe)/2)

  if(re<=half)return pyramidTOP(pyramid.left,ps,half,rs,re)
  
  else if(half<rs)return pyramidTOP(pyramid.right,half+1,pe,rs,re)

  else if(rs<=half&&half<re){
    return Math.min(
      pyramidTOP(pyramid.left,ps,half,rs,half),
      pyramidTOP(pyramid.right,half+1,pe,half+1,re)
      )
  }
  else console.log('wth')

}
  let result=[]
  for(let range of ranges){
    // result.push(treasureHunter(pyramid,0,arr.length-1,range[0],range[1]))
    result.push(pyramidTOP(pyramid,0,arr.length-1,range[0],range[1]))

  }
return result
};
