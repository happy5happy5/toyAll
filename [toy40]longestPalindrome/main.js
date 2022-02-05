//happy5happy5
let longestPalindrome = function (str) {
  // TODO: 여기에 코드를 작성합니다.
const god = str.length;
if(god<1)return god
let maxLen=1;
let memo = Array(god)
.fill(1)
.map(() => Array(god).fill(false))
.map((x,i)=>{x[i]=true;return x})

for (let i = 0; i < god - 1; i++) {
    if (str[i] === str[i + 1]) {
      memo[i][i + 1] = true;
      maxLen = 2;
    }
}
for (let len=3;len<=god;len++){
  for (let i = 0; i < god-len+1; i++) {
    if (memo[i+1][len+i-2]&&str[i]===str[len+i-1]) {
      memo[i][len+i-1]=true
      len>maxLen?maxLen=len:0
    }
  }
}
return maxLen
};
