// food_times	k	result
// [3, 1, 2]	5	1

function solution(food_times, k) {
  // let table = new Map();
  // food_times.forEach((x, i) => {
  //   let idx = i; //음식번호0부터 시작
  //   if (i === food_times.length - 1) idx = -1;
  //   table.set(i, { next: idx + 1, food: x });
  //   return;
  // });
  // console.log(table);

  // const min = Math.min(...table.values());
  window.foods = new Map();
  window.table = new Map();
  food_times.forEach((x, i) => {
    let idx = i; //음식번호0부터 시작
    if (i === food_times.length - 1) idx = -1;
    table.set(i, idx + 1);
    foods.set(i, x);
  });
}
// debugger;
let n = solution([3, 1, 2], 5);

let m = [...foods.values()];
console.log(m);
