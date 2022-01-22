

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
memo[0][jobs.length-1]=jobs[jobs.length-1]
for(let j=1;j<=jobs.length-workersNum;j++)
memo[0][jobs.length-j-1]=memo[0][jobs.length-j]+jobs[jobs.length-j-1]
    
// console.log(memo)
  // memo[i][j]는 i+1명의 워커가 있고 인덱스 j부터 끝까지 짐이있을때 최소값


function hardest(jobs,workersNum){
    for(let i=1;i<workersNum;i++){
        for(let j=workersNum-i-1;j<jobs.length-i;j++){
           let temp=jobs.length-1-j
           let sum=0;
           let max=Number.MAX_SAFE_INTEGER
           for(let k=temp;k>0;k--){
            sum+=jobs[jobs.length-1-k]
            max=Math.min(Math.max(memo[i-1][jobs.length-k]||max,sum),max)
           }//만약memo[i-1][jobs.length-k]가 0이라면 참조하지 않는다
           memo[i][j]=max
        }
    }
}
// debugger
hardest(jobs,workersNum)
console.log(memo[workersNum-1][0])



//test case pass code
// const jobAllocation = function (jobs, workersNum) {
//     let memo=[]
//     for(let i=0;i<workersNum;i++)memo.push(Array(jobs.length).fill(0))
//     memo[0][jobs.length-1]=jobs[jobs.length-1]
//     for(let j=1;j<=jobs.length-workersNum;j++)
//     memo[0][jobs.length-j-1]=memo[0][jobs.length-j]+jobs[jobs.length-j-1]
        
//     function hardest(jobs,workersNum){
//         for(let i=1;i<workersNum;i++){
//             for(let j=workersNum-i-1;j<jobs.length-i;j++){
//                let temp=jobs.length-1-j
//                let sum=0;
//                let max=Number.MAX_SAFE_INTEGER
//                for(let k=temp;k>0;k--){
//                 sum+=jobs[jobs.length-1-k]
//                 max=Math.min(Math.max(memo[i-1][jobs.length-k]||max,sum),max)
//                }
//                memo[i][j]=max
//             }
//         }
//     }
//     // debugger
//     hardest(jobs,workersNum)
//     return (memo[workersNum-1][0])
//     };