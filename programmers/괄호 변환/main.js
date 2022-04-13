let p = ")))(()((";
// let p = "()))((()";

const spliter = (str) => {
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      ++cnt;
    } else {
      --cnt;
    }
    if (!cnt) {
      return [str.slice(0, i + 1), str.slice(i + 1)];
    }
  }

  return [str];
};
const transfomer = (str) => {
  if (str.length)
    str = str
      .slice(1, str.length - 1)
      .split("")
      .map((x) => (x === "(" ? ")" : "("))
      .join("");
  return str;
};
const isRight = (str) => {
  let cnt = 0;
  if (str[0] == !"(") return false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ")") --cnt;
    else cnt++;
    if (cnt < 0) return false;
  }
  return cnt === 0;
};

function solution(p) {
  if (!p) return ""; //1.
  if (isRight(p)) return p;
  let [u, v] = spliter(p); //2.

  if (isRight(u)) {
    return u + solution(v); //3.
  }
  //4
  else return "(" + solution(v) + ")" + transfomer(u); //4.1 4.2 4.3 4.4 4.5
}
// debugger;
let m = solution(p);
console.log(m);
