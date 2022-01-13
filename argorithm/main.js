function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}
function randomNumberArray(num,min,max){
    let result=[]
    for(i=0;i<num;i++){
        result.push(getRandomInt(min, max))
    }
    return result
}
//1-1
// 세 수 중 최솟값
// 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하
// 세요.(정렬을 사용하면 안됩니다)
// ▣ 입력설명
// 첫 번째 줄에 100이하의 세 자연수가 입력된다.
// ▣ 출력설명
// 첫 번째 줄에 가장 작은 수를 출력한다.
// ▣ 입력예제 1
// 6 5 11
// ▣ 출력예제 1
// 5

// let arr=[]
// for(let i=0;i<3;i++)arr.push(getRandomInt(0,100))

// function arr3MinNum(arr){
//     let result=Number.MAX_SAFE_INTEGER
//     for(let i=0;i<arr.length;i++){
//         if(result>arr[i])result=arr[i]
        
//     }
//     return result
// }
// console.log(...arr)
// console.log(arr3MinNum(arr))

//1-2
// 삼각형 판별하기
// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있
// 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.
// ▣ 입력설명
// 첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.
// ▣ 출력설명
// 첫 번째 줄에 “YES", "NO"를 출력한다.
// ▣ 입력예제 1
// 6 7 11
// ▣ 출력예제 1
// YES
// ▣ 입력예제 1
// 13 33 17
// ▣ 출력예제 1
// NO

// let arr=[]
// for(let i=0;i<3;i++)arr.push(getRandomInt(0,100))

// function triangleChecker(arr){
//     function arr3MaxNum(arr){
//         let result=Number.MIN_SAFE_INTEGER
//         for(let i=0;i<arr.length;i++)result<arr[i]?result=[arr[i],i]:0
//         return result
//     }
//     let max=arr3MaxNum(arr)
//     let rest=0;
//     for(let i=0;i<3;i++){
//         if(i!==max[1])rest+=arr[i]
        
//     }
//     if(max[0]<rest)return 'YES'
//     else return 'NO'
// }
// console.log(...arr)
// console.log(triangleChecker(arr))

//1-3
// 연필 개수
// 연필 1 다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수
// 를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 1000 이하의 자연수 N이 입력된다.
// ▣ 출력설명
// 첫 번째 줄에 필요한 다스 수를 출력합니다.
// ▣ 입력예제 1
// 25
// ▣ 출력예제 1
// 3
// ▣ 입력예제 2
// 178
// ▣ 출력예제 2
// 15

// let n=getRandomInt(0,1000)
// const das=12
// function maxDas(n){
//     return Math.ceil(n/das) 
// }
// console.log(n)
// console.log(maxDas(n))

//1-4
// 1부터 N까지 합 출력하기
// 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 20이하의 자연수 N이 입력된다..
// ▣ 출력설명
// 첫 번째 줄에 1부터 N까지의 합을 출력한다.
// ▣ 입력예제 1
// 6
// ▣ 출력예제 1
// 21
// ▣ 입력예제 2
// 10
// ▣ 출력예제 2
// 55

// function summing(n){
//     if(n===1)return 1
//     return n+summing(n-1)
// }
// let n=getRandomInt(0,1000)
// console.log('n=',n)
// console.log(summing(n))

//1-5
// 최솟값 구하기
// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 7개의 수가 주어진다.
// ▣ 출력설명
// 첫 번째 줄에 가장 작은 값을 출력한다.
// ▣ 입력예제 1
// 5 3 7 11 2 15 17
// ▣ 출력예제 1
// 2

// let arr=randomNumberArray(10,0,1000)
// console.log('10개의 숫자=',arr)
// console.log(arr.reduce((a,b)=>Math.min(a,b)))


//1-6
// 홀수
// 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들
// 중 최소값을 찾는 프로그램을 작성하세요.
// 예를 들어, 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면 이들 중 홀수는 77, 41, 53,
// 85이므로 그 합은
// 77 + 41 + 53 + 85 = 256
// 이 되고,
// 41 < 53 < 77 < 85
// 이므로 홀수들 중 최소값은 41이 된다.
// ▣ 입력설명
// 첫 번째 줄에 자연수 7개가 주어진다. 주어지는 자연수는 100보다 작다. 홀수가 한 개 이상
// 반드시 존재한다.
// ▣ 출력설명
// 첫째 줄에 홀수들의 합을 출력하고, 둘째 줄에 홀수들 중 최소값을 출력한다.
// ▣ 입력예제 1
// 12 77 38 41 53 92 85
// ▣ 출력예제 1
// 256
// 41

// let arr=randomNumberArray(10,0,1000)
// console.log('100개의 숫자=',arr)
// let result=0
// let min=Number.MAX_SAFE_INTEGER
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2===1){
//         result+=arr[i]
//         if(arr[i]<min)min=arr[i]
//     }
// }
// console.log('홀수의합=',result)
// console.log('최솟값은=',min)

//1-7
// 10부제
// 서울시는 6월 1일부터 교통 혼잡을 막기 위해서 자동차 10부제를 시행한다. 자동차 10부제는
// 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행을 금
// 지하는 것이다. 예를 들어, 자동차 번호의 일의 자리 숫자가 7이면 7일, 17일, 27일에 운행하
// 지 못한다. 또한, 자동차 번호의 일의 자리 숫자가 0이면 10일, 20일, 30일에 운행하지 못한
// 다.
// 여러분들은 일일 경찰관이 되어 10부제를 위반하는 자동차의 대수를 세는 봉사활동을 하려고
// 한다. 날짜의 일의 자리 숫자가 주어지고 7대의 자동차 번호의 끝 두 자리 수가 주어졌을 때
// 위반하는 자동차의 대수를 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 줄에는 날짜의 일의 자리 숫자가 주어지고 두 번째 줄에는 7대의 자동차 번호의 끝 두 자
// 리 숫자가 주어진다.
// ▣ 출력설명
// 주어진 날짜와 자동차의 일의 자리 숫자를 보고 10부제를 위반하는 차량의 대수를 출력합니
// 다.
// ▣ 입력예제 1
// 3
// 25 23 11 47 53 17 33
// ▣ 출력예제 1
// 3
// ▣ 입력예제 2
// 0
// 12 20 54 30 87 91 30
// ▣ 출력예제 2
// 3

// let arr=randomNumberArray(7,10,100)
// console.log('입력','\n','자동차 번호 뒷자리 2개=',arr)
// let dateNum=getRandomInt(0, 9)
// let count=0
// for(let i=0;i<arr.length;i++){
//     if(dateNum===+arr[i].toString()[1])count++
// }
// console.log('오늘 날짜 일의 자리=',dateNum)
// console.log('출력','\n',count,'대')

// 1-8
// 일곱 난쟁이
// 왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다.
// 일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다.
// 아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다. 뛰어난
// 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을
// 기억해 냈다.
// 아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시
// 오.
// ▣ 입력설명
// 아홉 개의 줄에 걸쳐 난쟁이들의 키가 주어진다. 주어지는 키는 100을 넘지 않는 자연수이며,
// 아홉 난쟁이의 키는 모두 다르며, 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다.
// ▣ 출력설명
// 입력된 순서대로 일곱 난쟁이의 키를 출력한다.
// ▣ 입력예제 1
// 20 7 23 19 10 15 25 8 13
// ▣ 출력예제 1
// 20 7 23 19 10 8 13

// function unique9Num(){//합이 100이되는 7개의 숫자를 포함하는 9개의 100이하의 중복없는 숫자 배열
//     let arr=[1,1,1,1,1,1,1]
//     let sum=7;
//     while(sum!==100){
//         let i=parseInt(7*Math.random())
//         arr[i]++
//         sum++
//         if(sum===100){
//             for(let i=0;i<arr.length;i++){
//                 arr.forEach((x,j)=>{
//                     if(i!==j&&arr[i]===x){
//                         arr[parseInt(7*Math.random())]--
//                         sum--
//                     }
//                 })
//             }
//         }
//     }
//     while(arr.length!==9){
//         let a=getRandomInt(0, 100)
//         if(arr.indexOf(a)===-1){
//             let i=parseInt(arr.length*Math.random())
//             arr.splice(i,0,a)
//         }
//     }
//     return arr
// }

// let arr=unique9Num()
// console.log('입력','\n',arr)

// let target=arr.reduce((a,b)=>a+b)-100
// let answer=[]
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         if(i!==j&&arr[i]+arr[j]===target){
//             target=[i,j]
//         }    
//     }
// }
// [arr[target[0]],arr[target[1]]]=[]
// console.log('출력','\n',arr.filter(x=>x))

//1-9
// A를 #으로
// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 'A'를 모두 '#'으로 바꾸어 출력하는
// 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 문자열이 입력된다.
// ▣ 출력설명
// 첫 번째 줄에 바뀐 단어를 출력한다.
// ▣ 입력예제 1
// BANANA
// ▣ 출력예제 1
// B#N#N#


// function randomAlphabet(n){//랜덤한 알파벳 n개 생성
//     const god='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     let size=parseInt(n*Math.random())
//     let temp=''
//     for(let i=0;i<size;i++){
//         let j=parseInt(god.length*Math.random())
//         temp+=god[j]
//     }
//     return temp
// }
// let example=randomAlphabet(100)
// console.log('입력','\n',example)

// let exc='A'
// example= example.split('')
// while(example.indexOf(exc)!==-1){
//     example[example.indexOf(exc)]=`#` 
// }
// console.log('출력','\n',example.join(''))
