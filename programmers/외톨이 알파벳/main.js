

let result1 = "RR RR RR RR ";
let result2 = "RR Rr Rr rr ";
let result3 = "rr rr rr rr ";
let generation1 ="Rr"
let generation2 ="RR Rr Rr rr"
let generation3 ="RR RR RR RR RR Rr Rr rr RR Rr Rr rr rr rr rr rr"
let generation4 =" RR RR RR RR RR * 4 generation3 *2 rr rr rr rr * 4"

function solution(queries) {
    let ans=[]
    for(let i=0;i<queries.length;i++){
        ans.push(solution_(queries[i][0],queries[i][1]))
    }
    return ans;
}

function solution_(n,p){
    if(n===1)return "RR"
    if(n===2){
        if(p===1)return "RR"
        if(p===2)return "Rr"
        if(p===3)return "Rr"
        if(p===4)return "rr"
    }
    let temp=Math.ceil(p/(4**(n-2)))
    if(temp===1){
        return "RR"
    }
    else if(temp===4){
        return "rr"
    }
    return solution_(n-1,p-(4**(n-2))*(temp-1))

}