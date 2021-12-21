let [arr,ranges]= [ [10, 11, 12, 3, 6, 7, 8, 9], [[4, 7], [0, 2]]]
function mathlog2(num){
  return Math.ceil(Math.log(num)/Math.log(2))
}
function arrayMaker(maxLevel){
  let temp=[]
  for(let i=0;i<=maxLevel;i++){
    let arr=[]
    temp[i]=arr
  }
  return temp
}
function pyramidMaker(arr){//NlogN만큼 사용
  let maxLevel=mathlog2(arr.length)
  let pyramid=arrayMaker(maxLevel)
  pyramid[0].push(...arr)
  let nthPyramidSize=Math.ceil(arr.length/2)
  for(let n=1;n<=+Object.keys(pyramid).slice(-1)[0];n++){
    for(let i=0;i<nthPyramidSize;i++){
      if(pyramid[n-1][i*2+1])
      pyramid[n-1][i*2]<=pyramid[n-1][i*2+1]?pyramid[n].push(pyramid[n-1][i*2]):pyramid[n].push(pyramid[n-1][i*2+1])
      else pyramid[n].push(pyramid[n-1][i*2])
    }
    nthPyramidSize=Math.ceil(pyramid[n].length/2)
  }
  return pyramid
}
function topOfpyramid(arr,ranges){
  let result=[]
  let pyramid=pyramidMaker(arr)
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
    let bottomSize=Math.abs(rare-front)-1
    let temp=bottomSize
    while(temp){
      front=Math.ceil(front/2)
      rare=Math.ceil(rare/2)
      temp--
    }
    let a=pyramid[bottomSize][front]||Number.MAX_SAFE_INTEGER
    let b=pyramid[bottomSize][rare]||Number.MAX_SAFE_INTEGER
    let c=pyramid[0][temp1]||Number.MAX_SAFE_INTEGER
    let d=pyramid[0][temp2]||Number.MAX_SAFE_INTEGER

    result.push([a,b,c,d].reduce((a,b)=>Math.min(a,b)))
  }
  return result
}
console.log(topOfpyramid(arr,ranges))