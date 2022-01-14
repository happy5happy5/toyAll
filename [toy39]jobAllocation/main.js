// let jobs =   [200, 200, 100, 100, 200, 200, 200];
// let workersNum = 5;
let jobs =   [1, 2, 3, 4, 5, 6, 7];
let workersNum = 3;
let result=Number.MAX_SAFE_INTEGER



function jobAll(jobs,workersNum,temp){
    let splitIdx=1
    if(workersNum===1){
        let c=jobs.reduce((a,b)=>a+b)
        result=Math.min(Math.max(c,temp),result)
        return c
    }
    while(jobs.length-splitIdx>=workersNum-1){
        let a=jobs.slice(0,splitIdx).reduce((a,b)=>a+b)
        if(a>temp)temp=a
        jobAll(jobs.slice(splitIdx),workersNum-1,temp)
        splitIdx++
    }

}


debugger
jobAll(jobs,workersNum,0)
console.log(result)