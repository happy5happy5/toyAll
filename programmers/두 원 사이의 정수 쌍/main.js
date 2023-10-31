function solution(r1, r2) {
    let answer = 0;
    // 정수 먼저 다 구하고 거리가 r1과 r2 사이의 거리이면 놔두고 아니면 지워버린다
    // 가장 큰원의 반지름에 해당하는 사각형 안에 있는 정수 좌표 쌍을 모두 list 에 담는다


//     한 원안에 있는 개수 부터 구하기
//     (선 포함하는 경우와 아닌 경우 나누기)


    return cic(r2,true)-cic(r1)
}


console.log(solution(2, 3))



function cic(r,flag=false){
    if(r===0)return 0
    let cnt=0;
    if(flag){
        for(let i = 1 ; i<=r ; i++){
            // Math.floor(x)
            let lenY = Math.floor(Math.sqrt(r**2-i**2))
            cnt+=lenY
        }
        cnt = cnt*4+r*4+1
    }else{
        for(let i = 1 ; i<r ; i++){
            // Math.floor(x)
            let y= Math.sqrt((r)**2-i**2)
            if(Number.isInteger(y)){
                y-=1
            }
            let lenY = Math.floor(y)
            cnt+=lenY
        }
        cnt = cnt*4+(r-1)*4+1

    }
    return cnt
}

// console.log(cic(6,true))


