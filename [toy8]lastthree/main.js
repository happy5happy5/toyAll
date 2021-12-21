let arrOri= [2, 3, -11, 7, 5, -13]
// arr=_arr.map(x=>Math.abs(x)).sort((a,b)=>b-a)
//arr=[10000, 999, 5, 4, 3, 1]

function threeProduct(arrOri){
    if (arrOri.length<3)return arrOri[0]*arrOri[1]*arrOri[2]

    let arrPlus=arrOri.filter(x=>x>0).sort((a,b)=>b-a)
    let arrMinus=arrOri.filter(x=>x<0).sort((a,b)=>a-b)
    let arrMinusReverse=arrOri.filter(x=>x<0).sort((a,b)=>b-a)
    num1=arrPlus[0]*arrPlus[1]*arrPlus[2]
    num2=arrPlus[0]*arrMinus[0]*arrMinus[1]
    num3=arrMinusReverse[0]*arrMinusReverse[1]*arrMinusReverse[2]
    if (arrOri.indexOf(0)===-1)result=[num1,num2,num3]
    else result=[num1,num2,num3,0]
    result=result.filter(x=>!isNaN(x))
    return Math.max(result)
}


console.log(threeProduct(arrOri))

//플러스중 가장 큰것 3개 곱한값
//플러스중 가장 큰것 1개 곱하기 마이너스중 절대값 가장큰 2개 곱한값
//0
//마이너스중 가장 작은것 3개 곲한값
//어떤 배열이 나와도 이 범위 안벋어남


