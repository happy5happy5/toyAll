// food_times	k	result
// [3, 1, 2]	5	1

function solution(food_times, k) {
  // let m = food_times.sort((a, b) => a - b);
  let sum = 0;
  let m = food_times.map((food, idx) => {
    sum += food;
    return { food, idx };
  });
  if (k > sum) return k % m.length;
  m.sort((a, b) => a.food - b.food);
  let minusSum = 0;
  let len = m.length;
  let i = 0;
  for (; i < m.length; i++) {
    // console.log(k - (m[i].food * len + minusSum) > 0);

    if (k - (m[i].food * len + minusSum) >= 0) {
      minusSum += m[i].food;
      // console.log(m[i].food);
      m[i].food = 0;
      k = k - (m[i].food * len + minusSum);
    } else if (k - minusSum >= 0) {
      k = k - minusSum;
      m[i].food -= minusSum;
    } else console.log("wtf");
  }
  m = m.filter((x) => !!x.food).sort((a, b) => a.idx - b.idx);
  // for (let i = 0; i < m.length; i++) {
  //   if (k - minusSum >= 0) {
  //     m[i].food -= minusSum;
  //     k = k - minusSum;
  //     // console.log(minusSum);
  //   } else break;
  // }
  // m.sort((a, b) => a.idx - b.idx);
  // while (k - m.length >= 0) {
  //   k -= m.length;
  //   m = m.map((x) => {
  //     return {
  //       food: x.food - minusSum,
  //       idx: x.idx,
  //     };
  //   });
  // }

  console.log(m);

  return m[k % m.length].idx;
}
// debugger;
let n = solution([3, 1, 2], 5);

console.log(n);
