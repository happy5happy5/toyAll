//happy5happy5
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
function shadowOfPapers(papers) {
  papers=papers
  .map(x=>[x[0],x[0]+x[2],x[1],x[1]+x[3]])
  .mergeSort((a,b)=>a[0]-b[0]?a[0]-b[0]:a[1]-b[1])
  const scaner=(papers,config,call=(a)=>[a[0+config*2],a[1+config*2]])=>{
    let [laser,laserT,idx]=[call(papers[0])[0],call(papers[0])[0],0]
    return ()=>{
      let minLaser=Number.MAX_SAFE_INTEGER;
      let que=[]
      while(idx<papers.length&&call(papers[idx])[1]<laser)++idx
      for(let i=idx;i<papers.length;i++){
        if(call(papers[i])[0]<=laser&&laser<call(papers[i])[1]){
          if(minLaser>call(papers[i])[1])minLaser=call(papers[i])[1]
          que.push(i)
        }else if(laser<call(papers[i])[0]){
          if(minLaser>call(papers[i])[0])minLaser=call(papers[i])[0]
          break;
        }else console.log('very wrong act')
      }
      let temp=laser
      laserT=minLaser
      laser=minLaser
      if(laserT>1000000)return false
      return [temp,laserT,...que]
    }
  }
  function areaY(papers, ques){//해당 인덱스를 받아서 중복없는 구간 반환
    let sum=0;
    let papersY=[]
    for(let i=0;i<ques.length;i++)papersY.push(papers[ques[i]])
    if(!papersY.length)return 0
    let closure=scaner(papersY.mergeSort((a,b)=>a[2]-b[2]?a[2]-b[2]:a[3]-b[3]),1)
    while(1){
      let aux=closure()
      if(!aux)break
      if(aux.length>2)sum+=aux[1]-aux[0]
    }
    return sum
  }

  let closure=scaner(papers,0)
  let sum=0
  while(1){
    let aux=closure()
    if(!aux)break
    sum+=(aux[1]-aux[0])*areaY(papers, aux.slice(2))
  }
  return sum
}

// example test code
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

// let papers=[
//   [9, 3, 12, 7],
//   [6, 1, 9, 3],
//   [17, 7, 6, 5],
//   [25, 2, 3, 10],
//   [16, 7, 4, 7],
//   [3, 8, 10, 4],
// ];
// // const deepCopy=(arr2D)=>JSON.parse(JSON.stringify(arr2D));
// papers=papers.map(x=>[x[0],x[0]+x[2],x[1],x[1]+x[3]]).mergeSort((a,b)=>{
//   if(a[0]-b[0])return a[0]-b[0]
//   else return a[1]-b[1]
// })
// // console.log(papers)
// const scaner=(papers,config,call=(a)=>[a[0+config*2],a[1+config*2]])=>{
//   let [laser,laserT,idx,idxT] = [call(papers[0])[0],call(papers[0])[0],0,0]
//   return ()=>{
//     while(idx<papers.length&&call(papers[idx])[1]<laser)++idx
//     let minLaser=Number.MAX_SAFE_INTEGER;
//     let que=[]
//     for(let i=idx;i<papers.length;i++){
//       if(call(papers[i])[0]<=laser&&laser<call(papers[i])[1]){
//         minLaser>call(papers[i])[1]?minLaser=call(papers[i])[1]:0
//         idxT=i
//         que.push(i)
//       }else if(call(papers[i])[1]<=laser){
//       }else if(laser<call(papers[i])[0]){
//         minLaser>call(papers[i])[0]?minLaser=call(papers[i])[0]:0
//         break;
//       }else{
//         console.log('real significant error')
//       }
//     }
//     let temp=laser
//     // laserT=minLaser
//     // laser=minLaser
//     [laser,laserT]=[minLaser,minLaser]
//     console.log(laserT,laser)
//     if(laserT>1000000)return false
//     // console.log(laserT)
//     //범위 temp~laserT 인덱스범위 idx~idxT
//     return [temp,laserT,...que]
//   }
// }
// let temp=scaner(papers,0)
// // let temp2=scaner(papers,1)
// let sum=0
// debugger
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
// console.log(sum)
