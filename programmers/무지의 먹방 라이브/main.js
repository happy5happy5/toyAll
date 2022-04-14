// food_times	k	result
// [3, 1, 2]	5	1
//[2,0,1] 2
//[1,0,0] 0
//1. 인덱스를 포함하는 새로운 객체 만든다.
//2. 벨류로 솔트한다.
//3. k가 음수가 안된다면 객체 크기만큼 k에서 빼준다
//4. 가장 작은 값과 minusSum의 차이를 minusSum에 더하고 0으로만든다.
//5. k가 음수가 된다면 나머지 모든 곳에서 minnusSum만큼 모두 빼준다.k는 그대로 유지
//6. 남아있는 객체에서 벨류가 0인걸 제외하고 인덱스 순으로 정렬한다.
//7. 지금부터는 테이블을 k가 0이 될때까지 돌려도 어떤 음식도 0이 되지않는다.
//8. k% m.length 에 -1을 한 객체값의 인덱스를 반환하면 정답.
function solution(food_times, k) {
  let m = food_times.map((food, idx) => {
    //1
    return { food, idx: idx + 1 };
  });
  let sum = m.reduce((a, b) => {
    return a + b.food;
  }, 0);
  if (k >= sum) return -1;

  m.sort((a, b) => a.food - b.food); //2
  // let minusSum = 0;
  let len = m.length;
  // let acc=0;
  // let door = true;
  for (let i = 0; i < m.length; i++) {
    let temp = m[i].food;
    if (k - temp * len >= 0) {
      if (temp) {
        k = k - temp * len;
        m = m.map((x) => {
          if (x.food - temp === 0) len--;
          if (x.food === 0) return x;
          return { food: x.food - temp, idx: x.idx };
        });
      }
    } else {
      break;
    }
  }
  m = m.filter((x) => !!x.food).sort((a, b) => a.idx - b.idx);
  // console.log(m);
  // console.log(k);

  return m[k % m.length].idx;
}
// debugger;
let n = solution([52, 62, 22, 2, 2, 2, 102], 100);

console.log(n);
// [52, 62, 22, 2, 2, 2, 102], 100
// [50, 60, 20, 0, 0, 0, 100], 86
// [30, 40, 0, 0, 0, 0, 80], 6

// [4, 5, 1, 0, 0, 0, 9], 2
// [4, 5, 1, 0, 0, 0, 9], 2
// [3, 4, 1, 0, 0, 0, 9], 0
