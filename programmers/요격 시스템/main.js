function solution(targets) {
    let answer = [];
    targets.sort((a,b) => {
        return b[0]-a[0]
    })
        // [[4,5],[4,8],[10,14],[11,13],[5,12],[3,7],[1,4]];
    answer.push(targets[0])
    for(let i = 1; i < targets.length; i++){
        let tx1 = targets[i][0]
        let tx2 = targets[i][1]
        for (let j = 0; j < answer.length; j++){
            let mx1 = answer[j][0]
            let mx2 = answer[j][1]
            if(mx1<=tx1&&tx1<mx2){
                answer[j][0]=tx1
                answer[j][1]=tx2<mx2?tx2:mx2
                break
            }

            if(mx1<tx2&&tx2<=mx2){
                answer[j][0]=tx1<mx1?mx1:tx1
                answer[j][1]=tx2
                break
            }
            if(tx1<=mx1&&mx2<=tx2){
                break
            }
            // 이번이 마지막이라면
            if(j+1===answer.length){
                answer.push([tx1,tx2])
                break
            }
        }
    }
    return answer.length;
}

// [[4,5],[4,8],[10,14],[11,13],[5,12],[3,7],[1,4]]	3
let tartgets = [[4,5],[4,8],[10,14],[11,13],[5,12],[3,7],[1,4]];
//result = 3


console.log(solution(tartgets));