
// let jobs = [999, 23, 234, 555, 444, 987, 123, 999, 321]
// let workersNum =6;
let jobs = []
let workersNum =5;
jobs.length=10
jobs.fill(1)
jobs[jobs.length-3]=894
jobs[jobs.length-2]=456
jobs[jobs.length-1]=123
let memo=[]
// [1, 1, 1, 1, 1, 1, 1, 894, 456, 123]
for(let i=0;i<workersNum;i++)memo.push(Array(jobs.length).fill(0))

    
    // console.log(memo)
  // memo[i][j]는 i번째 워커가 j부터 끝까지 짐을 처리할 때 최소값

function comparing(jobs,lastworkerIdx,i,j){
    let sum=0
    let min=Number.MAX_SAFE_INTEGER
    for(let k=j;k<=jobs.length-1-(lastworkerIdx-i);k++){
        sum+=jobs[k]
        min=Math.min(Math.max(memo[i+1][k+1],sum),min)
    }
    return min
}


function workSpliter(jobs,lastworkerIdx,i,j){
    if(lastworkerIdx===i){//셋팅
        if(jobs.length-1===j)
        if(!memo[i][j])return memo[i][j]=jobs[jobs.length-1] 
        if(!memo[i][j])return memo[i][j]=workSpliter(jobs,lastworkerIdx,i,j+1)+jobs[j]
    }
    else if(lastworkerIdx>i){//본게임
        
        if(!memo[i+1][j+1])workSpliter(jobs,lastworkerIdx,i+1,j+1)
        if(!memo[i+1][j+1]||j===jobs.length-1-(lastworkerIdx-i)){
            let jtemp=j
            while(i<=jtemp){
                memo[i][jtemp]=comparing(jobs,lastworkerIdx,i,jtemp)
                jtemp--
            }
        }
        else workSpliter(jobs,lastworkerIdx,i,j+1)
    }
}
debugger
workSpliter(jobs,workersNum-1,0,0)
console.log(memo)

















// const jobAllocation = function (jobs, workersNum) {
//     let memo=[]
//     for(let i=0;i<workersNum;i++)memo.push(Array(jobs.length).fill(0))
    
//       // memo[i][j]는 i번째 워커가 j부터 끝까지 짐을 처리할 때 최소값
    
//     function comparing(jobs,lastworkerIdx,i,j){
//         let sum=0
//         let min=Number.MAX_SAFE_INTEGER
//         for(let k=j;k<=jobs.length-1-(lastworkerIdx-i);k++){
//             sum+=jobs[k]
//             min=Math.min(Math.max(memo[i+1][k+1],sum),min)
//         }
//         return min
//     }
//     function workSpliter(jobs,lastworkerIdx,i,j){
//         if(lastworkerIdx===i){//셋팅
//             if(jobs.length-1===j)
//             if(!memo[i][j])return memo[i][j]=jobs[jobs.length-1] 
//             if(!memo[i][j])return memo[i][j]=workSpliter(jobs,lastworkerIdx,i,j+1)+jobs[j]
//         }
//         else if(lastworkerIdx>i){//본게임
//             if(!memo[i+1][j+1])workSpliter(jobs,lastworkerIdx,i+1,j+1)
//             if(!memo[i+1][j+1]||j===jobs.length-1-(lastworkerIdx-i)){
//                 let jtemp=j
//                 while(i<=jtemp){
//                     memo[i][jtemp]=comparing(jobs,lastworkerIdx,i,jtemp)
//                     jtemp--
//                 }
//             }
//             else workSpliter(jobs,lastworkerIdx,i,j+1)
//         }
//     }
//     workSpliter(jobs,workersNum-1,0,0)
//     return memo[0][0]
//     };