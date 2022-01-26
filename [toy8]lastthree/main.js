//happy5happy5
const largestProductOfThree = function (arr) {
    let result=[]
    if (arr.length<3)return arr.reduce((a,b)=>a*b)
    let arrPlus=arr.filter(x=>x>0).sort((a,b)=>b-a)
    let arrMinus=arr.filter(x=>x<0).sort((a,b)=>a-b)
    let num1=arrPlus[0]*arrPlus[1]*arrPlus[2]
    let num2=arrPlus[0]*arrMinus[0]*arrMinus[1]
    let num3=arrMinus[arrMinus.length-1]*arrMinus[arrMinus.length-2]*arrMinus[arrMinus.length-3]
    if (arr.indexOf(0)===-1)result=[num1,num2,num3]
    else result=[num1,num2,num3,0]
    return Math.max(...result.filter(x=>!isNaN(x)))   
};
console.log(largestProductOfThree(arr))

//[1등]arrPlus*arrPlus*arrPlus
//플러스중 가장 큰것 3개 곱한값 

//[2등]arrPlus*arrMinus*arrMinus
//플러스중 가장 큰것 1개 곱하기 마이너스중 절대값 가장큰 2개 곱한값 

//[3등]0
//제로

//[4등]arrMinus*arrMinus*arrMinus
//마이너스중 가장 작은것 3개 곲한값 

//어떤 숫자 조합이 나와도 이 범위 안벋어남


