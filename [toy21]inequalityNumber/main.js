let sign = "< > > <";
sign = sign.split(" ");
result = +maxList(sign) - minList(sign);
console.log(result);

function minList(sign) {
  let queMin = [];
  for (let i = 9; i >= 9 - sign.length; i--) {
    queMin.push(9 - i);
  }
  let queNum = []; //완성품
  let waiting = []; //대기줄

  waiting.push(queMin[0]);
  for (let i = 0, j = 0, m = 0; i < sign.length; i++) {
    if (sign[i] === "<") {
      queNum.push(...waiting);
      ++m;
      j = m;
      waiting = [];
      waiting.push(queMin[j]);
    } else if (sign[i] === ">") {
      waiting = waiting.map((x) => x + 1);
      ++m;
      waiting.push(queMin[j]);
    }
  }
  queNum.push(...waiting);
  return queNum.join("");
}

function maxList(sign) {
  let queMax = [];
  for (let i = 9; i >= 9 - sign.length; i--) {
    queMax.push(i);
  }
  let queNum = []; //완성품
  let waiting = []; //대기줄
  waiting.push(queMax[0]);
  for (let i = 0, j = 0, m = 0; i < sign.length; i++) {
    if (sign[i] === "<") {
      waiting = waiting.map((x) => x - 1);
      ++m;
      waiting.push(queMax[j]);
    } else if (sign[i] === ">") {
      queNum.push(...waiting);
      ++m;
      j = m;
      waiting = [];
      waiting.push(queMax[j]);
    }
  }
  queNum.push(...waiting);
  return queNum.join("");
}


// 도시다람쥐
const inequalityNumberbySquirrel = function (signs) {
  // edge case: 연속해서 같은 부등호가 들어오는 경우
  // 애초부터 배치를 해놓고 하나씩 정렬하는 방법은 어떨까?
  // bubble sort 느낌으로..
  const list = signs.split(" ");
  const fromNine = Array.from(
    { length: list.length + 1 },
    (undefined, x) => 9 - x
  );
  const fromZero = Array.from({ length: list.length + 1 }, (undefined, x) => x);

  const inequalitySort = (list, nums) => {
    let isOn = true;
    while (isOn) {
      isOn = false;
      for (let i = 0; i < list.length; i++) {
        if (
          (list[i] === ">" && nums[i] < nums[i + 1]) ||
          (list[i] === "<" && nums[i] > nums[i + 1])
        ) {
          [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
          isOn = true;
        }
      }
    }
    return nums.join("");
  };
  const max = inequalitySort(list, fromNine);
  const min = inequalitySort(list, fromZero);
  return max - min;
};
