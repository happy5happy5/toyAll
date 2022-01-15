let jobs =    [999, 23, 234, 555, 444, 987, 123, 999, 321];
let workersNum =6;


let result=Number.MAX_SAFE_INTEGER
let memo={}
function jobAll(jobs,workersNum,temp=0,js=0,je=jobs.length-1){
    let splitIdx=1
    if(workersNum===1){
        if(memo[`${js}&${je}`]===undefined)memo[`${js}&${je}`]=jobs.reduce((a,b)=>a+b)
        result=Math.min(Math.max(memo[`${js}&${je}`],temp),result)
        return memo[`${js}&${je}`]
    }
    while(jobs.length-splitIdx>=workersNum-1){
        if(memo[`${js}&${js+splitIdx-1}`]===undefined)memo[`${js}&${js+splitIdx-1}`]=jobs.slice(0,splitIdx).reduce((a,b)=>a+b)
        if(memo[`${js}&${js+splitIdx-1}`]>temp)temp=memo[`${js}&${js+splitIdx-1}`]
        if(temp<result)jobAll(jobs.slice(splitIdx),workersNum-1,temp,js+splitIdx,je)
        splitIdx++
    }
}
  jobAll(jobs,workersNum)
  console.log(result)
  console.log(memo)







//version 1
// const jobAllocation = function (jobs, workersNum) {
//     // TODO: 여기에 코드를 작성합니다.
//     let result=Number.MAX_SAFE_INTEGER
//     let count=0
//   function jobAll(jobs,workersNum,temp){
//       if(count>1000000)return jobs.length
//       count++
//       let splitIdx=1
//       if(workersNum===1){
//           let c=jobs.reduce((a,b)=>a+b)
//           result=Math.min(Math.max(c,temp),result)
//           return c
//       }
//       while(jobs.length-splitIdx>=workersNum-1){
//           let a=jobs.slice(0,splitIdx).reduce((a,b)=>a+b)
//           if(a>temp)temp=a
//           if(temp<result)jobAll(jobs.slice(splitIdx),workersNum-1,temp)
//           splitIdx++
//       }
//   }
//     jobAll(jobs,workersNum,0)
//     return result
//   };
  
//version2
// const jobAllocation = function (jobs, workersNum) {
//     // TODO: 여기에 코드를 작성합니다.
//     let result=Number.MAX_SAFE_INTEGER
//   function pyramidbuilder(arr,ps,pe){
//       if(ps===pe)return{
//           value:arr[ps],
//           range:[ps,pe],
//       }
//       let half=parseInt((ps+pe)/2)
//       let left=pyramidbuilder(arr,ps,half)
//       let right=pyramidbuilder(arr,half+1,pe)
//       return{
//           value:left.value+right.value,
//           range:[left.range[0],right.range[1]],
//           left,
//           right
//       }
//     }
//   let pyramid=pyramidbuilder(jobs,0,jobs.length-1)
//   function pyramidFinder(pyramid,jobs,js,je){
//       if(pyramid.range[0]===js&&pyramid.range[1]===je)return pyramid.value
//       let half=parseInt((pyramid.range[0]+pyramid.range[1])/2)
//       if(je<=half)return pyramidFinder(pyramid.left,jobs,js,je)
//       if(half+1<=js)return pyramidFinder(pyramid.right,jobs,js,je)
//       if(js<=half&&half+1<=je){
//           return pyramidFinder(pyramid.left,jobs,js,half)+pyramidFinder(pyramid.right,jobs,half+1,je)
//       }
//   } 
//   function jobAll(jobs,workersNum,js,je,ori,temp){
//       let splitIdx=1
//       if(workersNum===1){
//           let b=pyramidFinder(pyramid,ori,js,je)
//           result=Math.min(Math.max(b,temp),result)
//           return b
//       }
//       while(jobs.length-splitIdx>=workersNum-1){
//           let a=pyramidFinder(pyramid,ori,js,js+splitIdx-1)
//           if(a>temp)temp=a
//           if(temp<result)jobAll(jobs.slice(splitIdx),workersNum-1,splitIdx+js,je,ori,temp)
//           splitIdx++
//       }
//   }
  
//   jobAll(jobs,workersNum,0,jobs.length-1,jobs,0)
//   return result
//   };
  

// version3
// const jobAllocation = function (jobs, workersNum) {
//     // TODO: 여기에 코드를 작성합니다.
//     let result=Number.MAX_SAFE_INTEGER
//     let memo={}
//     let count=0
//   function jobAll(jobs,workersNum,temp=0,ori=jobs,js=0,je=jobs.length-1){
//     if(count>1000000)return count
//     count++
//       let splitIdx=1
//       if(workersNum===1){
//           if(memo[`${js}${je}`]===undefined)memo[`${js}${je}`]=jobs.reduce((a,b)=>a+b)
//           result=Math.min(Math.max(memo[`${js}${je}`],temp),result)
//           return memo[`${js}${je}`]
//       }
//       while(jobs.length-splitIdx>=workersNum-1){
//           if(memo[`${js}${js+splitIdx-1}`]===undefined)memo[`${js}${js+splitIdx-1}`]=jobs.slice(0,splitIdx).reduce((a,b)=>a+b)
//           if(memo[`${js}${js+splitIdx-1}`]>temp)temp=memo[`${js}${js+splitIdx-1}`]
//           if(temp<result)jobAll(jobs.slice(splitIdx),workersNum-1,temp,ori,js+splitIdx,je)
//           splitIdx++
//       }
//   }
//     jobAll(jobs,workersNum)
//     return result 
//   };
  