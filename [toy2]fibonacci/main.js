/*----------------------------------------------------------------------- */
//happy5happy5


  function fibonacci(n) {//정방향 진행하면서 콜스택
  
    function comeagain(a,b,n){
      if (n===0)return a
      else if (n===1)return b
      return comeagain(b,a+b,n-1)
    }
    return comeagain(0,1,n)
  }


  function fibonacci(n) {//역방향 진행하면서 콜스택
   
    let some = [0, 1];
    let thing = (n) => {
      if(some[n] !== undefined ) { 
        return some[n]
      }
      some[n] = thing(n-2) + thing(n-1); 
      return some[n]
    }
    return thing(n)
  }


  

/*----------------------------------------------------------------------- */
//elinapark0818

// 초기값 설정
// * 피보나치 수열 중 n번째 수 리턴하기

// todo : 그냥 반복문으로 만드는 피보나치
// ? 반복문(for, while 사용 금지)
function fibonacci(n) {
  // 피보나치 수열의 0번째 인덱스는 0이다.
  if (!n) {
    return n; // 그대로 0 리턴
  }
  // 피보나치 수열 = 0, 1, 1, 2, 3, 5, 8, 13 ...
  // 피보나치 수열 인덱스 1, 2 까지는 1이다.
  let num1 = 1;
  let num2 = 1;
  // 피보나치수열의 3번째 인덱스는 2.
  // 2부터(3번째 인덱스~) 구하기
  for (let i = 3; i <= n; i++) {
    let fib = num1 + num2;
    num1 = num2;
    num2 = fib;
  }
  return num2;
}

// todo : 재귀
// ? 실행시간 초과
function fibonacci(n) {
  // 0, 1 이라면 자신을 리턴하고
  // 그렇지 않으면 재귀로 계산(점화식)
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

// todo : 메모이제이션
// 초기값 설정
const memo = [0, 1, 1]; // [0, 1] 까지만 해도 무방. n-1, n-2
// 피보나치수열 = 0, 1, 1, 2, 3, 5, 8, 13 ...
function fibonacci(n) {
  // 초기값에 해당하지 않을 때 (1보다 클때)
  if (n > 1) {
    // 피보나치 점화식 적용 F(n) = F(n-1) + F(n-2)
    // memo[2] = memo[1] + memo[0]
    // memo[3] = memo[2] + memo[1]
    // memo[4] = memo[3] + memo[2]
    memo[memo.length] = memo[memo.length - 1] + memo[memo.length - 2];
  }
  // 초기값에 있는 애들이라면 해당하는 인덱스의 피보나치 수 출력
  // 그렇지 않을 경우, 피보나치 계산ㄱㄱ
  return memo[n] !== undefined ? memo[n] : fibonacci(n);
}

// todo : 메모이제이션2
const memo = [];

function fibonacci(n) {
  // 일단 memo 에 아무것도 없으니까 추가해주기?
  if (memo[n] !== undefined) {
    return memo[n];
  }
  // 피보나치 수열에서 0번째 인덱스는 0이다.
  else if (n === 0) {
    return (memo[n] = 0);
  }
  // 피보나치 수열에서 1, 2 번째 인덱스는 1이다.
  else if (n <= 2) {
    return (memo[n] = 1);
  }
  // 피보나치 3번째 인덱스부터는 점화식 계산ㄱㄱ
  else {
    return (memo[n] = fibonacci(n - 1) + fibonacci(n - 2));
  }
}



/*----------------------------------------------------------------------- */
//OverFlowBIN
function fibonacci(n) {
  // base case 작성
  if(n <= 2) return 1;
  // n 이 1, 2일 때의 값을 저장
  let fib = [0, 1, 1];

  // 반복문을 이용
    // 저장된 값을 이용하여 이후 값을 하나씩 저장
  for(let i = 3; i <= n; i++) {
      fib[i] = fib[i-1] + fib[i-2];
      // n >= 3 부터는 앞서 배열에 저장해 놓은 값들을 이용하여
      // n번째 피보나치 수를 구한 뒤 배열에 저장 후 리턴한다 
  }
  return fib[n];
}
