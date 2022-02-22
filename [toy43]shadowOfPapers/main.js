// let papers=[
//      [ 1, 1, 5000, 4000 ],
//      [ 901, 323, 1200, 700 ],
//      [ 1212, 211, 675, 36 ],
//      [ 2, 4, 3000, 3000 ],
//      [ 5512, 2123, 3768, 4591 ],
//      [ 4, 3, 4000, 3000 ],
//      [ 0, 0, 3000, 2000 ],
//      [ 512, 1631, 6123, 5123 ],
//      [ 7, 5, 2000, 2000 ],
//      [ 1632, 789, 400, 712 ]
//   ];
let papers=[
  [0, 0, 4, 4],
  [2, 1, 2, 6],
  [1, 5, 5, 3],
  [2, 2, 3, 3],
]
// 0: (5) [0, 3, 0, 3, 16]
// 1: (5) [1, 5, 5, 7, 15]
// 2: (5) [2, 3, 1, 6, 12]
// 3: (5) [2, 4, 2, 4, 9]
const deepCopy=(arr2D)=>JSON.parse(JSON.stringify(arr2D));
papers=mergeSort(papers.map(x=>[x[0],x[0]+x[2]-1,x[1],x[1]+x[3]-1]),(a,b)=>{
  if(a[0]-b[0])return a[0]-b[0]
  else return a[1]-b[1]
})
console.log(papers)
//[xStart,sEnd,yStart,yEnd]
function mergeSort(arr,cal=(a,b)=>a-b){
  function downtier(arr){
    if(arr.length<=1)return arr
    let half=parseInt(arr.length/2)
    return uptier(downtier(arr.slice(0,half)),downtier(arr.slice(half)))
  }
  function uptier(left,right){
    let arr=[]
    while(left.length&&right.length){
      if(cal(left[0],right[0])<0){
        arr.push(left.shift())
      }else if(cal(left[0],right[0])>0){
        arr.push(right.shift())
      }else{
        arr.push(left.shift())
        arr.push(right.shift())
      }
    }
    return [...arr,...left,...right]
  }
  return downtier(arr)
}

// console.log(papers)

function scaner(papers,xs=0,idx=0){
  let xe=xs;
  let i=idx;
  //xs가 구간안에 있는가?
  while(1){
    if(papers){
      
    }
  }
  console.log('xs=',xs)
  console.log('xe=',xe)
  console.log('i=',i)

}
// scaner(papers)