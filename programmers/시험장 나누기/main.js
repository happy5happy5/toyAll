let num = [12, 30, 1, 8, 8, 6, 20, 7, 5, 10, 4, 1];
let links = [
  [-1, -1], //0
  [-1, -1], //1
  [-1, -1], //2
  [-1, -1], //3
  [8, 5], //4
  [2, 10], //5
  [3, 0], //6
  [6, 1], //7
  [11, -1], //8
  [7, 4], //9
  [-1, -1], //10
  [-1, -1], //11
];
let k = 4;

//1 최상위 컴포넌트를 찾아야한다 모든 링크 다 더하고 인덱스를 다 빼면 최상위 인덱스 나온다.
let topIdx = 0;
let sum = 0;
links.forEach((x, i) => {
  let [a, b] = x;
  topIdx -= (a === -1 ? 0 : a) + (b === -1 ? 0 : b);
  topIdx += i;
  sum += num[i];
});

//이제 이 배열에 해당하는 노드가 선택되었을때의 최대인원수를 반환
let sumNode = new Map();
let pNode = new Map();
pNode.set(topIdx, ["top", 1]); //얘가 1세대 다음부터 2세대
const sumValue = (p, c = links[p]) => {
  let [c1, c2] = c;
  let level = pNode.get(p)[1];
  let [sum1, sum2] = [0, 0];
  if (c1 !== -1) {
    pNode.set(c1, [p, level + 1]);
    sum1 = sumValue(c1, links[c1]);
  }
  if (c2 !== -1) {
    pNode.set(c2, [p, level + 1]);
    sum2 = sumValue(c2, links[c2]);
  }
  sumNode.set(p, num[p] + sum1 + sum2);
  return num[p] + sum1 + sum2;
};
// debugger;
sumValue(topIdx);
// console.log(sumNode); //각 노드의 자기 자신과 자식 노드들의 모든 합
// console.log(pNode); //아빠가 누구니?
const isChild = (p, c) => {
  //p의 후손에 c가 있니?
  // if (pNode.get(c)[1] >= pNode.get(p)[1]) return false;
  let papa = pNode.get(c)[0];
  if (papa === "top") {
    return false;
  } else if (papa === p) {
    return true;
  } else {
    return isChild(p, papa);
  }
};
const findMax = (que) => {
  let sumN = [];
  que.forEach((x) => {
    sumN.push(sumNode.get(x));
  });
  // que=[9, 0, 7,6]

  for (let i = 0; i < que.length; i++) {
    let [papa, papaLevel] = pNode.get(que[i]);
    for (let j = i + 1; j < que.length; j++) {
      let [papa2, papaLevel2] = pNode.get(que[j]);
      // if(papa)
      if (papaLevel < papaLevel2 && isChild(que[i], que[j])) {
        sumN[i] -= sumN[j];
      } else if (papaLevel2 < papaLevel && isChild(que[j], que[i])) {
        sumN[j] -= sumN[i];
      }
    }
  }
  // console.log(sumN);
  return sumN.reduce((a, b) => Math.max(a, b));
};
let min = sum;
const makeNCR = (k, idx = 0, que = [topIdx]) => {
  for (let i = idx; i < num.length; i++) {
    if (i === topIdx) continue;
    if (que.length === k) {
      let temp = findMax(que);
      if (temp < min) min = temp;
      return 0;
    }
    makeNCR(k, i + 1, que.concat(i));
  }
};
// debugger;
makeNCR(3);
console.log(min);

// debugger;
// findMax([9, 7, 8, 10]);
