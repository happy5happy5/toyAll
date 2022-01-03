function primeFinder(num) { //배열인 [1,2,3,4]를 받아서 4자리 소수인지 true false반환
    if (num === 2) return true
    let checkLimit = parseInt(Math.sqrt(num));
    let checker = 1
    for (let i = 2; i <= checkLimit; i++) {
        if (num % i === 0) {
            checker = 0;
            break;
        }
    }
    return !!checker
}

function plusOne(num, place) { //한자리숫자입력 +1했을때의 결과 place는 자리수이다 예)plusOne(9,0)->1 
    let digit = Number(num) + 1
    if(place) digit > 9 ? digit = 0 : 0;
    else  digit > 9 ? digit = 1 : 0; 
    return digit.toString()
}

function waitingDigit(num,digit){//반환값은 digit자리수의 숫자가 소수인 숫자목록
    let numArr=numToArr(num) 
    let que=[]
    let indexMax=0;
    digit===0?indexMax=8:indexMax=9;
    for(let i=0;i<indexMax;i++){
        numArr[digit]=plusOne(numArr[digit],digit)
        let _num=arrToNum(numArr)
        if (primeFinder(_num))que.push(numArr[digit])
    }
    for(let i=0;i<que.length;i++){
        numArr[digit]=que[i]
        que[i]=[...numArr]
    }
    que=que.map(x=>arrToNum(x))
    return que;
}

function numToArr(num) { //숫자를 배열로
    let numArr = num.toString().split('');
    return numArr
}

function arrToNum(numArr) { //배열을 숫자로
    let num = numArr.join('');
    return num
}


//9787, 9923
let [now, want] = [9787,9923]


function primeObjector(now, want, count) {
        let limit=10;
        if(obj[want])limit=obj[want]
        if(count>=limit)return console.log('done')
        let nextQue=[]
        for(let i=0;i<4;i++){//자릿수한번씩 바꾸기 
            let que=waitingDigit(now,i)
            for(let j=0;j<que.length;j++){
                if(obj[que[j]]===undefined||obj[que[j]]>count){
                    obj[que[j]]=count;
                    nextQue.push(que[j])
                }
            }
        }
        // let nextQue = [];
        // let keys=Object.keys(obj)
        // let values=Object.values(obj)
        // for(let i=0;i<values.length;i++){
        //     if(values[i]===count)nextQue.push(keys[i])
        // }

        for(let i=0;i<nextQue.length;i++){//다음층 이동
            if(obj[nextQue[i]]===count||obj[nextQue[i]]+1<limit){
                console.log(obj)
                console.log(nextQue)

                if(count>=limit)return console.log('done')
                else primeObjector(nextQue[i], want, obj[nextQue[i]]+1)
            }else return console.log('nextQue ' , i )
        }
        return console.log('one cycle done')
   
}
let obj=new Object();
obj[now]=0;
let ct=1
// debugger
// primeObjector(now, want, ct)
// debugger
// primeChanger(now,want)
// primeFinder(['1', '1', '0', '9'])



//완성 코드
// const primePassword = (curPwd, newPwd) => {

//     function primeFinder(num) { //배열인 [1,2,3,4]를 받아서 4자리 소수인지 true false반환
//         if (num === 2) return true
//         let checkLimit = parseInt(Math.sqrt(num));
//         let checker = 1
//         for (let i = 2; i <= checkLimit; i++) {
//             if (num % i === 0) {
//                 checker = 0;
//                 break;
//             }
//         }
//         return !!checker
//     }
    
//     function plusOne(num, place) { //한자리숫자입력 +1했을때의 결과 place는 자리수이다 예)plusOne(9,0)->1 
//         let digit = Number(num) + 1
//         if(place) digit > 9 ? digit = 0 : 0;
//         else  digit > 9 ? digit = 1 : 0; 
//         return digit.toString()
//     }
    
//     function waitingDigit(num,digit){//반환값은 digit자리수의 숫자가 소수인 숫자목록
//         let numArr=numToArr(num) 
//         let que=[]
//         let indexMax=0;
//         digit===0?indexMax=8:indexMax=9;
//         for(let i=0;i<indexMax;i++){
//             numArr[digit]=plusOne(numArr[digit],digit)
//             let _num=arrToNum(numArr)
//             if (primeFinder(_num))que.push(numArr[digit])
//         }
//         for(let i=0;i<que.length;i++){
//             numArr[digit]=que[i]
//             que[i]=[...numArr]
//         }
//         que=que.map(x=>arrToNum(x))
//         return que;
//     }
    
//     function numToArr(num) { //숫자를 배열로
//         let numArr = num.toString().split('');
//         return numArr
//     }
    
//     function arrToNum(numArr) { //배열을 숫자로
//         let num = numArr.join('');
//         return num
//     }
    
//     function primeObjector(now, want, count) {
//             let limit=10;
//             if(obj[want])limit=obj[want]
//             if(count>=limit)return false
//             let nextQue=[]
//             for(let i=0;i<4;i++){//자릿수한번씩 바꾸기 
//                 let que=waitingDigit(now,i)
//                 for(let j=0;j<que.length;j++){
//                     if(obj[que[j]]===undefined||obj[que[j]]>count){
//                         obj[que[j]]=count;
//                         nextQue.push(que[j])
//                     }
//                 }
//             }
    
//             for(let i=0;i<nextQue.length;i++){//다음층 이동
//                 if(obj[nextQue[i]]===count||obj[nextQue[i]]+1<limit){
//                     if(count>=limit)return false
//                     else primeObjector(nextQue[i], want, obj[nextQue[i]]+1)
//                 }else return false
//             }
//             return false
//     }
    
//     let [now, want, obj, ct] = [curPwd, newPwd, new Object(), 1]
//     obj[now]=0;
    
//     primeObjector(now, want, ct)
//     return obj[want]
//     };

