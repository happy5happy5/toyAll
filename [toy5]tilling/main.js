//happy5happy5
let tiling = function (n) {
  function fac(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return n < 0 ? 0 : result;
  }
  function nCr(n, r) {
    if (n - r >= 0) return fac(n) / fac(n - r) / fac(r);
    else return 0;
  }
  function answer(n, r) {
    if (n - r >= 0) return nCr(n, r) + answer(n - 1, r + 1);
    else return 0;
  }

  return Math.round(answer(n, 0));
};

//OverFlowBIN
const memo = [1, 2];
// let tiling = function(n) {
//   if (n > 2) {
//     memo[memo.length] = memo[memo.length - 1] + memo[memo.length - 2];
//   }

//   return memo[n - 1] !== undefined ? memo[n - 1] : tiling(n);
// }

//elinapark0818
// let tiling = function (n) {
//   // 2 * n 개의 타일로 보드를 채우는 방법 :
//   // n이 3이상이라면, 2(n-1) + 2(n-2) 피보나치로 구할 수 있다.

//   // 일단, 보드의 크기 중 가장 작은 값들을 담은 배열 arr
//   const arr = [0, 1, 2]
//   if (n <= 2) return arr[n]

//   // n 이 3이상이라면,
//   for (let i = 3; i <= n; i++) {
//     // 피보나치 적용
//     arr[i] = arr[i - 1] + arr[i - 2]
//   }
//   return arr[n];
// };
