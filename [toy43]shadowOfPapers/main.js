Array.prototype.mergeSort = function(cal=(a,b)=>a-b){
  let arr=this;
  function downtier(arr){
      if(arr.length<=1)return arr
      let half=parseInt(arr.length/2)
      return uptier(downtier(arr.slice(0,half)),downtier(arr.slice(half)))
  }
  function uptier(left,right,arr=[]){
      while(left.length&&right.length){
      if(cal(left[0],right[0])<0)arr.push(left.shift())
      else if(cal(left[0],right[0])>0)arr.push(right.shift())
      else{
          arr.push(left.shift())
          arr.push(right.shift())
      }}
      return [...arr,...left,...right]
  }
  return downtier(arr)
}

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
  [9, 3, 12, 7],
  [6, 1, 9, 3],
  [17, 7, 6, 5],
  [25, 2, 3, 10],
  [16, 7, 4, 7],
  [3, 8, 10, 4],
];
// 0: (4) [0, 4, 0, 4]
// 1: (4) [1, 6, 5, 8]
// 2: (4) [2, 4, 1, 7]
// 3: (4) [2, 5, 2, 5]
const deepCopy=(arr2D)=>JSON.parse(JSON.stringify(arr2D));
papers=papers.map(x=>[x[0],x[0]+x[2],x[1],x[1]+x[3]]).mergeSort((a,b)=>{
  if(a[0]-b[0])return a[0]-b[0]
  else return a[1]-b[1]
})
console.log(papers)
const scaner=(papers,config,call=(a)=>[a[0+config*2],a[1+config*2]])=>{
  let laser=call(papers[0])[0]
  let laserT=call(papers[0])[0]
  let idx=0;
  let idxT=0;
  return ()=>{
    let minLaser=Number.MAX_SAFE_INTEGER;
    while(idx<papers.length&&call(papers[idx])[1]<laser){
      ++idx
      // if(idx>=papers.length-1)return console.log('done')
    }
    let que=[]
    for(let i=idx;i<papers.length;i++){
      if(call(papers[i])[0]<=laser&&laser<call(papers[i])[1]){
        minLaser>call(papers[i])[1]?minLaser=call(papers[i])[1]:0
        idxT=i
        que.push(i)
        continue;
      }else if(call(papers[i])[1]<=laser){
        continue;
      }else if(laser<call(papers[i])[0]){
        minLaser>call(papers[i])[0]?minLaser=call(papers[i])[0]:0
        break;
      }else{
        console.log(wtf)
      }
    }
    let temp=laser
    // [laser,laserT]=[minLaser,minLaser]
    laserT=minLaser
    laser=minLaser
    if(laserT>1000000)return false
    // console.log(laserT)
    //범위 temp~laserT 인덱스범위 idx~idxT
    return [temp,laserT,...que]
  }
}
let temp=scaner(papers,0)
// let temp2=scaner(papers,1)
let sum=0
// debugger
while(1){
    let a=temp()
    if(!a)break
    // console.log('전체',a)
    let leg=a[1]-a[0]
    let ques=a.slice(2)
    // console.log('길이',leg)
    // console.log('해당 인덱스',ques)
    // console.log('높이',areaY(papers, ques))
    sum+=leg*areaY(papers, ques)
  }
  function areaY(papers, ques){//해당 인덱스를 받아서 중복없는 구간 반환
    let sum=0;
    let papersY=[]
    for(let i=0;i<ques.length;i++){
      // let [,,s,e]=papers[ques[i]]
      papersY.push(papers[ques[i]])
    }
    papersY=papersY.mergeSort((a,b)=>{
      if(a[2]-b[2])return a[2]-b[2]
      else return a[3]-b[3]
    })
    // console.log(papersY)
    if(papersY.length){
      let temp=scaner(papersY,1)
      while(1){
        let a=temp()
        if(!a)break
        // console.log('전체',a)
        let leg=a[1]-a[0]
        if(a.length>2)sum+=leg
        // let ques=a.slice(2)
        // console.log('길이',leg)
        // console.log('해당 인덱스',ques)
      }
    }
    return sum
  }

// console.log(sum)



//happy5happy5
// Array.prototype.mergeSort = function(cal=(a,b)=>a-b){
//   let arr=this;
//   function downtier(arr){
//       if(arr.length<=1)return arr
//       let half=parseInt(arr.length/2)
//       return uptier(downtier(arr.slice(0,half)),downtier(arr.slice(half)))
//   }
//   function uptier(left,right,arr=[]){
//       while(left.length&&right.length){
//       if(cal(left[0],right[0])<0)arr.push(left.shift())
//       else if(cal(left[0],right[0])>0)arr.push(right.shift())
//       else{
//           arr.push(left.shift())
//           arr.push(right.shift())
//       }}
//       return [...arr,...left,...right]
//   }
//   return downtier(arr)
// }
// function shadowOfPapers(papers) {
//   const deepCopy=(arr2D)=>JSON.parse(JSON.stringify(arr2D));
// papers=papers.map(x=>[x[0],x[0]+x[2],x[1],x[1]+x[3]]).mergeSort((a,b)=>{
//   if(a[0]-b[0])return a[0]-b[0]
//   else return a[1]-b[1]
// })
// // console.log(papers)
// const scaner=(papers,config,call=(a)=>[a[0+config*2],a[1+config*2]])=>{
//   let laser=call(papers[0])[0]
//   let laserT=call(papers[0])[0]
//   let idx=0;
//   let idxT=0;
//   return ()=>{
//     let minLaser=Number.MAX_SAFE_INTEGER;
//     while(idx<papers.length&&call(papers[idx])[1]<laser){
//       ++idx
//       // if(idx>=papers.length-1)return console.log('done')
//     }
//     let que=[]
//     for(let i=idx;i<papers.length;i++){
//       if(call(papers[i])[0]<=laser&&laser<call(papers[i])[1]){
//         minLaser>call(papers[i])[1]?minLaser=call(papers[i])[1]:0
//         idxT=i
//         que.push(i)
//         continue;
//       }else if(call(papers[i])[1]<=laser){
//         continue;
//       }else if(laser<call(papers[i])[0]){
//         minLaser>call(papers[i])[0]?minLaser=call(papers[i])[0]:0
//         break;
//       }else{
//         console.log(wtf)
//       }
//     }
//     let temp=laser
//     // [laser,laserT]=[minLaser,minLaser]
//     laserT=minLaser
//     laser=minLaser
//     if(laserT>1000000)return false
//     // console.log(laserT)
//     //범위 temp~laserT 인덱스범위 idx~idxT
//     return [temp,laserT,...que]
//   }
// }
// let temp=scaner(papers,0)
// // let temp2=scaner(papers,1)
// let sum=0
// while(1){
//     let a=temp()
//     if(!a)break
//     // console.log('전체',a)
//     let leg=a[1]-a[0]
//     let ques=a.slice(2)
//     // console.log('길이',leg)
//     // console.log('해당 인덱스',ques)
//     // console.log('높이',areaY(papers, ques))
//     sum+=leg*areaY(papers, ques)
//   }
//   function areaY(papers, ques){//해당 인덱스를 받아서 중복없는 구간 반환
//     let sum=0;
//     let papersY=[]
//     for(let i=0;i<ques.length;i++){
//       // let [,,s,e]=papers[ques[i]]
//       papersY.push(papers[ques[i]])
//     }
//     papersY=papersY.mergeSort((a,b)=>{
//       if(a[2]-b[2])return a[2]-b[2]
//       else return a[3]-b[3]
//     })
//     // console.log(papersY)
//     if(papersY.length){
//       let temp=scaner(papersY,1)
//       while(1){
//         let a=temp()
//         if(!a)break
//         // console.log('전체',a)
//         let leg=a[1]-a[0]
//         if(a.length>2)sum+=leg
//         // let ques=a.slice(2)
//         // console.log('길이',leg)
//         // console.log('해당 인덱스',ques)
//       }
//     }
//     return sum
//   }

// return(sum)
// }
