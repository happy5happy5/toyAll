let [arr,ranges]= [randomNumberArray(500000,-100000,100000), [[0,499999], [0, 499998]]]
// let [arr,ranges]=[[10, 11, 12, 3, 6, 7, 8, 9], [[4, 7], [0, 2]]]
function randomNumberArray(num,min,max){
    
  function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
  }
  result=[]
  for(i=0;i<num;i++){
      result.push(getRandomInt(min, max))
  }
  return result
}


function mathlog2(num){
  return Math.ceil(Math.log(num)/Math.log(2))
}
function arrayMaker(maxLevel){
  let door = 'pyramid'
  for(let i=0;i<=maxLevel;i++){
    let arr=[]
    window[door+i]=arr
  }
}
function pyramidMaker(arr){
  let maxLevel=mathlog2(arr.length)
  arrayMaker(maxLevel)
  let door ='pyramid'
  pyramid0=[...arr]
  let nthPyramidSize=Math.ceil(arr.length/2)
  for(let n=1;n<=maxLevel;n++){
    for(let i=0;i<nthPyramidSize;i++){
      if(window[door+`${n-1}`][i*2+1])
      window[door+`${n-1}`][i*2]<=window[door+`${n-1}`][i*2+1]?
      window[door+`${n}`].push(window[door+`${n-1}`][i*2])
      :window[door+`${n}`].push(window[door+`${n-1}`][i*2+1])
      else window[door+`${n}`].push(window[door+`${n-1}`][i*2])
    }
    nthPyramidSize=Math.ceil(window[door+`${n}`].length/2)
  }
}


// function pyramidMaker(arr){//NlogN만큼 사용
//   let maxLevel=mathlog2(arr.length)
//   let pyramid=arrayMaker(maxLevel)
//   pyramid[0].push(...arr)
//   let nthPyramidSize=Math.ceil(arr.length/2)
//   for(let n=1;n<=+Object.keys(pyramid).slice(-1)[0];n++){
//     for(let i=0;i<nthPyramidSize;i++){
//       if(pyramid[n-1][i*2+1])
//       pyramid[n-1][i*2]<=pyramid[n-1][i*2+1]?pyramid[n].push(pyramid[n-1][i*2]):pyramid[n].push(pyramid[n-1][i*2+1])
//       else pyramid[n].push(pyramid[n-1][i*2])
//     }
//     nthPyramidSize=Math.ceil(pyramid[n].length/2)
//   }
//   return pyramid
// }
function topOfpyramid(arr,ranges){
  let result=[]
  let door ='pyramid'
  pyramidMaker(arr)
  for(let range of ranges){//앞쪽수가 짝수 뒤쪽수가 홀수가 정상
    let front=range[0]
    let rare=range[1]
    let temp1=range[0]
    let temp2=range[1]
    if(range[0]%2===1){
      front=range[0]+1
    }
    if(range[1]%2===0){
      rare=range[1]-1
    }
    // let bottomSize=Math.abs(rare-front)-1
    let bottomSize=mathlog2(Math.abs(rare-front))-1
    if(bottomSize===-1)bottomSize=0;
    front=Math.ceil(front/(2**bottomSize))
    rare=Math.ceil(rare/(2**bottomSize))
    let a=window[door+bottomSize][front]||Number.MAX_SAFE_INTEGER
    let b=window[door+bottomSize][rare]||Number.MAX_SAFE_INTEGER
    let c=pyramid0[temp1]||Number.MAX_SAFE_INTEGER
    let d=pyramid0[temp2]||Number.MAX_SAFE_INTEGER

    result.push([a,b,c,d].reduce((a,b)=>Math.min(a,b)))
  }
  return result
}
// debugger
console.log(topOfpyramid(arr,ranges))



//아래 코드 전체를 붙여넣으면 코드스테이츠 테스트가 통과됩니다.
// const rangeMinimum = function (arr, ranges) {
//   function mathlog2(num){
//     return Math.ceil(Math.log(num)/Math.log(2))
//   }
//   function arrayMaker(maxLevel){
//     let door = 'pyramid'
//     for(let i=0;i<=maxLevel;i++){
//       let arr=[]
//       global[door+i]=arr
//     }
//   }
//   function pyramidMaker(arr){
//     let maxLevel=mathlog2(arr.length)
//     arrayMaker(maxLevel)
//     let door ='pyramid'
//     pyramid0=[...arr]
//     let nthPyramidSize=Math.ceil(arr.length/2)
//     for(let n=1;n<=maxLevel;n++){
//       for(let i=0;i<nthPyramidSize;i++){
//         if(global[door+`${n-1}`][i*2+1])
//         global[door+`${n-1}`][i*2]<=global[door+`${n-1}`][i*2+1]?
//         global[door+`${n}`].push(global[door+`${n-1}`][i*2])
//         :global[door+`${n}`].push(global[door+`${n-1}`][i*2+1])
//         else global[door+`${n}`].push(global[door+`${n-1}`][i*2])
//       }
//       nthPyramidSize=Math.ceil(global[door+`${n}`].length/2)
//     }
//   }
  
//   function topOfpyramid(arr,ranges){
//     let result=[]
//     let door ='pyramid'
//     pyramidMaker(arr)
//     for(let range of ranges){//앞쪽수가 짝수 뒤쪽수가 홀수가 정상
//       let front=range[0]
//       let rare=range[1]
//       let temp1=range[0]
//       let temp2=range[1]
//       if(range[0]%2===1){
//         front=range[0]+1
//       }
//       if(range[1]%2===0){
//         rare=range[1]-1
//       }
//       let bottomSize=mathlog2(Math.abs(rare-front))-1
//       if(bottomSize===-1)bottomSize=0;
//       front=Math.ceil(front/(2**bottomSize))
//       rare=Math.ceil(rare/(2**bottomSize))
//       let a=global[door+bottomSize][front]||Number.MAX_SAFE_INTEGER
//       let b=global[door+bottomSize][rare]||Number.MAX_SAFE_INTEGER
//       let c=pyramid0[temp1]||Number.MAX_SAFE_INTEGER
//       let d=pyramid0[temp2]||Number.MAX_SAFE_INTEGER
  
//       result.push([a,b,c,d].reduce((a,b)=>Math.min(a,b)))
//     }
//     return result
//   }
//   return topOfpyramid(arr,ranges)
  
//   };
  