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
//마이너스중 절대값 가장 작은것 3개 곱한값 
//어떤 숫자 조합이 나와도 이 범위 안벋어남


//elinapark0818
const largestProductOfThree = function (arr) {
    // TODO: 여기에 코드를 작성합니다.
    // 오름차순 정렬해서
    const newArr = arr.slice().sort((a, b) => a - b);
    // 상대적으로 큰 3개의 값을 배열에 담는다
  
    // 모두 양수일 때 마지막 3개의 요소를 곱한다
    const result1 =
      newArr[newArr.length - 1] *
      newArr[newArr.length - 2] *
      newArr[newArr.length - 3];
    // 가장 작은 2개의 요소와 마지막 요소를 곱한다
    const result2 = newArr[0] * newArr[1] * newArr[newArr.length - 1]
  
    // 둘 중 더 큰 값을 리턴한다
    return Math.max(result1, result2);
  };


//OverFlowBIN
  const largestProductOfThree = function (arr) {
  
    const getCombinations = function (arr, selectNumber) {
      const results = [];
      if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return
  
      arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
        const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
        const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
        results.push(...attached); // 배열 spread syntax 로 모두다 push
      });
  
      return results; // 결과 담긴 results return
    }
  
    let comb = getCombinations(arr, 3);
    // for(let el of comb) {
    //   el = el.reduce((pre, cur) => pre * cur)
    // }
    for(let i = 0; i < comb.length; i++) {
      comb[i] = comb[i].reduce((pre, cur) => pre * cur)
    }
    
    return Math.max(...comb)
  
  };