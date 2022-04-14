function solution(answers) {
  const a = (answers) => {
    let temp = answers.filter((x, i) => {
      let n = (i + 1) % 5;
      //   console.log(n);
      return x === (n ? n : 5);
    });
    return temp.length;
  };

  const b = (answers) => {
    //홀수면 2
    //짝수면 x/
    // [2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5];
    let temp = answers.filter((x, i) => {
      let n;
      let arr = [1, 3, 4, 5];
      //   console.log(!(i % 2));
      if (!(i % 2)) {
        n = 2;
        // console.log(n);
      } else {
        n = arr[parseInt(i / 2) % 4];
        // console.log(n);
      }
      //   console.log(n);
      return x === (n ? n : 5);
    }).length;
    return temp;
  };

  const c = (answers) => {
    //3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5
    let arr = [3, 1, 2, 4, 5];
    return answers.filter((x, i) => {
      //   console.log(arr[parseInt(i / 2) % 5]);
      return x === arr[parseInt(i / 2) % 5];
    }).length;
  };

  let result = [
    [1, a(answers)],
    [2, b(answers)],
    [3, c(answers)],
  ].sort((x, y) => y[1] - x[1]);
  let max = result[0][1];
  return result
    .map((x, i, k) => {
      if (x[1] >= max) return x[0];
      else return false;
    })
    .filter((x) => x);
}
let n = solution([
  1, 3, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 1, 1, 1, 1,
]);
console.log(n);
