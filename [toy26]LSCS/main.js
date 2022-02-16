//happy5happy5
const LSCS = function (arr) {
  function sumArrLargest(arr){
      let max=Number.MIN_SAFE_INTEGER//max는 +만 합한거
      let temp=0;//temp는 전부 합한거
      for(let i=0; i<arr.length;i++){
          if(arr[i]>=0){
              temp+=arr[i]
              if(temp>max){
                max=temp
              }
          }else if(arr[i]<0){
              temp+=arr[i]
              if(temp>max){
                  max=temp
                  temp=0;
              }else if(temp<0)temp=0;
          }
      }
      return max
  }
return sumArrLargest(arr)
};


// 도시다람쥐: 양수 부분합을 이용한 풀이
const LSCSBySquirrel = function (arr) {
  //모두 음수일 경우
  if (arr.every((e) => e < 0)) {
    return Math.max(...arr);
  }

  let sumToIdx = 0,
    min = 0,
    res = arr[0];
  for (let i = 0; i < arr.length; i++) {
    sumToIdx += arr[i];
    // if(max < sumToIdx) max = sumToIdx;
    // if(min > sumToIdx) min = sumToIdx;
    min = Math.min(sumToIdx, min);
    res = Math.max(res, sumToIdx - min);
  }

  return res;
};


//elinapark0818
const LSCS = function (arr) {
  //TODO: 여기에 코드를 작성합니다.
  // LSCS = 주어진 배열의 연속된 부분배열의 합을 구할 때 가장 큰 값
  let max = -1000000
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if(sum > max) {
      max = sum;
    }
    if(sum < 0) {
      sum = 0;
    }
  }
  return max;
};