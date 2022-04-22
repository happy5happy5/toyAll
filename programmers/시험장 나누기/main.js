// let num = [12, 30, 1, 8, 8, 6, 20, 7, 5, 10, 4, 1];
// let links = [
//   [-1, -1],
//   [-1, -1],
//   [-1, -1],
//   [-1, -1],
//   [8, 5],
//   [2, 10],
//   [3, 0],
//   [6, 1],
//   [11, -1],
//   [7, 4],
//   [-1, -1],
//   [-1, -1],
// ];
// let num = [13, 2, 18, 14];
// let links = [
//   [1, 2],
//   [3, -1],
//   [-1, -1],
//   [-1, -1],
// ];

function getRandomInt(min = 1, max = 10000000) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}
let LEN = 10000;
let k = 1000;
let num = new Array(LEN).fill(0).map((x, i) => getRandomInt());
let links = new Array(LEN).fill(0).map((x, i) => {
  // let temp = [i * 2 + 1, i * 2 + 2];
  let a, b;
  i * 2 + 1 < num.length ? (a = i * 2 + 1) : (a = -1);
  i * 2 + 2 < num.length ? (b = i * 2 + 2) : (b = -1);
  return [a, b];
});
console.log(num);
console.log(links);

//1.인덱스를 키로 하는 맵 객체 만든다.
//2.아래쪽 트리순회로 합쳐서 가장 적게 뜯어내는 선에서 n이하인 개별트리를 만든다.
//3.총 트리의 수가 조건에 만족하는지 보고 적으면 더 내리고 많으면 더 올린다.
let topIdx = 0;
// let pMax = 0;
links.forEach((x, i) => {
  let [a, b] = x;
  topIdx -= (a === -1 ? 0 : a) + (b === -1 ? 0 : b);
  topIdx += i;
  // if (num[i] > pMax) pMax = num[i];
});

const spliter = (k, num, links, n) => {
  // let limit = num.length * 10000;
  // let memo = new Map();
  // let n = 30;
  // let max = 0;
  function downTire(p) {
    if (p === -1) return { value: 0, cnt: 0 };
    let [a, b] = links[p];
    let ans = upTire(p, downTire(a), downTire(b));
    if (!ans) {
      return false; //여기서 절반 서치 시작
    }
    // if (ans.value > max) max = ans.value;
    if (p === topIdx) return ans.cnt + 1;
    // return { max: Math.max(ans.max, ans.value), cnt: ans.cnt + 1 };
    return ans; //이놈 형태는 {value:q,cnt:r}이 되어야한다.
  }
  function upTire(p, l, r) {
    let pValue = num[p];
    // let max = l.max > r.max ? l.max : r.max;
    //0. 객체중에 하나라도 리미트를 넘을때 false반환
    //1. 전부 다 더해도 리미트가 안될때
    //
    if (!l || !r || l.value > n || r.value > n || pValue > n) return false;
    if (l.value + r.value + pValue <= n)
      return { value: l.value + r.value + pValue, cnt: l.cnt + r.cnt };

    if (r.value + pValue <= n || l.value + pValue <= n) {
      if (l.value > r.value) {
        return {
          value: r.value + pValue,
          cnt: l.cnt + r.cnt + 1,
          // max: Math.max(max, l.value),
        };
      } else {
        return {
          value: l.value + pValue,
          cnt: l.cnt + r.cnt + 1,
          // max: Math.max(max, r.value),
        };
      }
    }

    return {
      value: pValue,
      cnt: l.cnt + r.cnt + 2,
      // max: Math.max(max, l.value, r.value),
    };
  }
  return downTire(topIdx);
};
const finder = (k, s = 1, e = num.length * 10000) => {
  let ccc = 1000;
  let memo = new Map();
  while (ccc--) {
    let n = parseInt((s + e) / 2);
    let ans = spliter(k, num, links, n);
    // console.log(n, s, e);
    if (typeof ans === "number") {
      if (memo.has(ans)) {
        if (memo.get(ans) > n) memo.set(ans, n);
      } else memo.set(ans, n);
      if (e - s <= 1) break;
    }

    if (!ans || ans > k) {
      s = n;
    } else {
      e = n;
    }
  }
  // console.log(memo);
  let temp = k;
  let ansTemp = memo.get(temp);
  while (!ansTemp) {
    --temp;
    ansTemp = memo.get(temp);
  }
  return ansTemp;
};
// let limit = num.length * 10000;
// let k = 4;
// debugger;
let res = finder(k);
console.log(res);
// let ans = spliter(k, num, links, 60000);
// console.log(ans);

//1~limit 사이의 값을 탐색한다.
//1. 1과 limit의 중간값을 선택하고 돌린다.
//1-1 값이 false가 나오면 현재값과 limit사이의 값을 돌린다.
//1-2 cnt가 k 보다 작다면 1과 현재값 사이의 값을 돌린다.
//1-3 cnt를 확인하고 cnt가 k와 같다면 max값을 반환한다.
