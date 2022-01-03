let arr = [20, 29];
let power = 0;

function radix(_arr, power) {
  let arr = [..._arr];
  let arrNext = [];
  let arrNeg = [];
  let powerNext;
  let digit;
  let bucket = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
  };
  let bucketNext = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
  };

  while (arr.length > 0) {
    digit = ("" + parseInt(arr.slice(-1) / 10 ** power)).slice(-1);
    powerNext = ("" + arr.slice(-1)).length - 1;
    if (arr.slice(-1) < 0) {
      arrNeg.push(-arr.pop());
    } else if (powerNext - power === 0) {
      bucket[digit].push(arr.pop());
    } else {
      bucketNext[digit].push(arr.pop());
    }
  }
  for (let i = 9; i >= 0; i--) {
    arr.push(...bucket[i].reverse());
  }
  for (let i = 9; i >= 0; i--) {
    arrNext.push(...bucketNext[i].reverse());
  }
  if (arrNeg.length > 1) {
    arrNeg = [...radix(arrNeg, 0)].reverse().map((x) => (x = -x));
  }
  if (arrNext.length > 0)
    return [...radix(arrNext, power + 1), ...arr, ...arrNeg];
  else return [...arr, ...arrNeg];
}

// debugger
console.log(radix(arr, power).reverse());

// 도시다람쥐
function radixSortBySquirrel(arr) {
  // LSD: 1의 자리 부터 시작해 자릿수별로 정렬한다.
  const negative = [];
  const positive = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negative.push(Math.abs(arr[i]));
    } else positive.push(arr[i]);
  }

  //? 최대 자릿수를 먼저 구한다.
  function rad(arr) {
    let maxDigit = 0;
    for (let i = 0; i < arr.length; i++) {
      const leng = arr[i].toString().length;
      if (maxDigit < leng) maxDigit = leng;
    }
    // 1의 자리 정보를 뽑아 해당하는 bucket에 담는다.
    // arr[i] (/ 1) % 10
    // let bucket = Array.from(Array(10), () => Array())
    let res = arr.slice();
    // 이것을 자릿수 만큼 반복한다.
    for (let d = 0; d < maxDigit; d++) {
      let bucket = Array.from(Array(10), () => Array());
      let temp = [];
      for (let i = 0; i < res.length; i++) {
        bucket[Math.floor((res[i] / 10 ** d) % 10)].push(res[i]);
      }
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i].length !== 0) {
          temp.push(...bucket[i]);
        }
      }
      res = temp.slice();
    }
    //? 내부에서 계수정렬은 언제 사용되는거?
    //! bucket에 담아 정렬하는 방법 자체가 계수정렬일듯?

    return res;
  }

  if (negative.length === 0) return rad(positive);
  else {
    const neg = rad(negative)
      .map((e) => -e)
      .reverse();
    return [...neg, ...rad(positive)];
  }
  // 음수에 적용시킬 방안
  // 음수를 따로 골라내어 양수화시킨 후 해당 코드를 돌린다
  // 이후 다시 음수화하여 reverse한다.
}
