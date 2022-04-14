function solution(id_list, report, k) {
  let m = {};
  for (let i = 0; i < id_list.length; i++) {
    m[id_list[i]] = {
      out: 0,
      from: {},
    };
  }
  for (let i = 0; i < report.length; i++) {
    let temp = report[i].split(" ");
    if (!m[temp[1]].from[temp[0]]) {
      m[temp[1]].out++;
      m[temp[1]].from[temp[0]] = true;
    }
  }

  let result = [];
  result.length = id_list.length;
  result.fill(0);
  //   console.log(result);

  let n = Object.keys(m).filter((x) => m[x].out >= k);
  for (let id of n) {
    // console.log(id);
    let temp = m[id].from;
    Object.keys(temp).forEach((x) => {
      let idx = id_list.indexOf(x);
      result[idx]++;
    });
  }
  return result;
}

solution(
  ["muzi", "frodo", "apeach", "neo"],
  ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
  2
);
