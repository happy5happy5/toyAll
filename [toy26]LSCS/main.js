arr = [-7, -6, -9];

function sumArrLargest(arr) {
  let max = -Infinity;
  let temp = 0;

  for (let i = 0; i < arr.length; i++) {
    //max는 +만 합한거
    //temp는 전부 합한거
    if (arr[i] >= 0) {
      temp += arr[i];
      if (temp > max) {
        max = temp;
      }
    } else if (arr[i] < 0) {
      temp += arr[i];
      if (temp > max) {
        max = temp;
        temp = 0;
      } else if (temp < 0) temp = 0;
    }
  }
  return max;
}
debugger;

console.log(sumArrLargest(arr));

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
