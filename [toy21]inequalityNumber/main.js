//happy5happy5
const inequalityNumber = function (signs) {
 
  function minList(sign){
      let queMin = []
      for (let i = 9; i >= 9 - sign.length; i--) {
          queMin.push(9 - i)
      }
      let queNum = [] //완성품
      let waiting = [] //대기줄
      
      waiting.push(queMin[0])
      for (let i = 0, j = 0, m = 0; i < sign.length; i++) {
          if (sign[i] === '<') {
              queNum.push(...waiting)
              ++m
              j = m
              waiting = []
              waiting.push(queMin[j])
      
          } else if (sign[i] === '>') {
              waiting = waiting.map(x => x + 1)
                  ++m
              waiting.push(queMin[j])
          }
      }
      queNum.push(...waiting)
      return queNum.join('')
  }
  function maxList(sign) {
      let queMax = []
      for (let i = 9; i >= 9 - sign.length; i--) {
          queMax.push(i)
      }
      let queNum = [] //완성품
      let waiting = [] //대기줄
      waiting.push(queMax[0])
      for (let i = 0, j = 0, m = 0; i < sign.length; i++) {
          if (sign[i] === '<') {
              waiting = waiting.map(x => x - 1)
                  ++m
              waiting.push(queMax[j])
          } else if (sign[i] === '>') {
              queNum.push(...waiting)
                  ++m
              j = m
              waiting = []
              waiting.push(queMax[j])
          }
      }
      queNum.push(...waiting)
      return queNum.join('')
  }
//모든 경우 다 찾을 필요없다.
//가장 큰것 가장 작은것 반복없이 한번만 찾는게 가장 빠르다
  letsign = signs.split(' ')
  result=+maxList(sign)- minList(sign)
  return result
};



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


//OverFlowBIN

const getMaxNumber = (signs) => {
  let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let max = '';
  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === '>') {
      max += String(num.pop())
    } else if (signs[i] === '<') {
      let count = 1;
      for (let j = i + 1; j < signs.length; j++) {
        if (signs[j] === '<') count++
        else break
      }
      max += String(num.splice(num.length - 1 - count, 1))
    }
  }
  max += num.pop()
  return max
}

const getMinNumber = (signs) => {
  let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let min = '';
  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === '<') {
      min += String(num.shift())
    } else if (signs[i] === '>'){
      let count = 1;
      for (let j = i + 1; j < signs.length; j++) {
        if (signs[j] === '>') count++
        else break
      }
      min += String(num.splice(count, 1))
    }

  }
  min += num.shift()
  return min
}

function inequalityNumber (signs) {
  return getMaxNumber(signs) - getMinNumber(signs)
}


//elinapark0818
const inequalityNumber = function (signs) {
  const digits = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  const arr = signs.split(" ");
  let isUsed = new Array(10).fill(false);

  const isVaild = (str) => {
    if (str.length === 1) return true;

    for (let i = 0; i < str.length - 1; i++) {
      if (arr[i] === ">" && Number(str[i]) <= Number(str[i + 1])) return false;
      if (arr[i] === "<" && Number(str[i]) >= Number(str[i + 1])) return false;
    }
    return true;
  };

  const dfs = (str, digits) => {
    if (str.length === arr.length + 1) {
      return str;
    }

    for (let i = 0; i < digits.length; i++) {
      const num = digits[i];
      if (isVaild(str + num) && !isUsed[num]) {
        isUsed[num] = true;

        const result = dfs(str + num, digits);

        if (result) {
          return result;
        } else {
          isUsed[num] = false;
        }
      }
    }
    return null;
  };

  const max = dfs("", digits);
  isUsed = new Array(10).fill(false);
  const min = dfs("", digits.reverse());

  return max - min;
};