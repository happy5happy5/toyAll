function orderOfPresentation (N, K) {
  function fac(n) {
    let result = 1;
    for(let i=2; i<=n; i++) result *= i;
    return n<0? 0:result;
    }
    arr=[...K]
    arrOriginal=[...K]
    let result=0;
    for (let i=0;i<N-1;i++){
        mulyplier=arr.map(x=>x<arrOriginal[i]).filter(x=>x===true).length
        arr.shift()
        result=result + mulyplier*fac(N-i-1)
    }
    return result
}
// debugger
console.log(orderOfPresentation(7, [7,3,4,2,5,1,6]))

//sudo code for BJM
// [7,3,4,2,5,1,6]
// [7,3,4,2,5,1,6]

// 6*6! [7] -->4320
// 	2*5! [3] -->240
// 		2*4! [4] -->48
// 			1*3![2] -->6
// 				1*2![5] -->2
// 					0[1]   -->0
// 						0[6]  -->0
//합하면 4616


// elinapark0818 version
function orderOfPresentation(N, K) {
  // TODO: 여기에 코드를 작성합니다.
  // N : 총 조의 개수
  // K : 발표 순서

  // 모든 경우의 수에 해당하는 값을 구한다.
  // 재귀탈출조건 : n이 0 또는 1일때
  const factorial = (n) => {
    if (n <= 1) return n;
    return n * factorial(n - 1);
  };

  // 발표순서 담을 변수
  let result = 0;

  // N개의 개수가 있는 배열을 만든다.
  // K의 값은 자연수이므로 배열요소 1개를 추가해준다.
  // N+1을 제외한 나머지 배열의 요소를 false로 채운다.
  const isUsed = Array(N + 1).fill(false);

  // 인덱스가 0부터 시작하고 K의 개수만큼 반복하여
  // K의 배열을 조회하도록 작성
  for (let i = 0; i < K.length; i++) {
    // K의 배열 요소를 인덱스 값으로
    const num = K[i];
    // 이미 사용된 거라면, true로
    isUsed[num] = true;

    // 0번째 인덱스는 false니까 slice로 없앤다
    const candidates = isUsed.slice(1, num);
    // fill 로 false를 넣어주었다.
    // false 인 값을 찾는다
    const validCount = candidates.filter((el) => el === false).length;
    // i 가 0부터 시작하기 때문에 첫 번째 경우의 수를 구할 때 -1 을 붙여준다. (=== N-1)
    const formerCount = validCount * factorial(N - i - 1);
    // 모든 경우의 수를 더한다
    result += formerCount;
  }
  return result;
}