function solution(price, money, count) {
  var answer = 0;
  let temp = money;
  for (let i = 0; i < count; i++) {
    temp -= price * (i + 1);
    if (temp < 0) answer = -temp;
  }

  return answer;
}
