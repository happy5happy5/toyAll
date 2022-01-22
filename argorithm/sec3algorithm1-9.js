//1번

// 문제
// 김코딩과 박해커는 사무실 이사를 위해 짐을 미리 싸 둔 뒤, 짐을 넣을 박스를 사왔다. 박스를 사오고 보니 각 이사짐의 무게는 들쭉날쭉한 반면, 박스는 너무 작아서 한번에 최대 2개의 짐 밖에 넣을 수 없었고 무게 제한도 있었다.

// 예를 들어, 짐의 무게가 [70kg, 50kg, 80kg, 50kg]이고 박스의 무게 제한이 100kg이라면 2번째 짐과 4번째 짐은 같이 넣을 수 있지만 1번째 짐과 3번째 짐의 무게의 합은 150kg이므로 박스의 무게 제한을 초과하여 같이 넣을 수 없다.

// 박스를 최대한 적게 사용하여 모든 짐을 옮기려고 합니다.

// 짐의 무게를 담은 배열 stuff와 박스의 무게 제한 limit가 매개변수로 주어질 때, 모든 짐을 옮기기 위해 필요한 박스 개수의 최소값을 return 하도록 movingStuff 함수를 작성하세요.

// 입력
// 인자 1: stuff
// Number 타입의 40 이상 240 이하의 자연수를 담은 배열
// ex) [70, 50, 80, 50]
// 인자 2: limited
// Number 타입의 40 이상 240 이하의 자연수
// 출력
// Number 타입을 리턴해야 합니다.
// 모든 짐을 옮기기 위해 필요한 박스 개수의 최솟값을 숫자로 반환합니다.
// 주의사항
// 옮겨야 할 짐의 개수는 1개 이상 50,000개 이하입니다.
// 박스의 무게 제한은 항상 짐의 무게 중 최대값보다 크게 주어지므로 짐을 나르지 못하는 경우는 없습니다.
// 입출력 예시
// let output = movingStuff([70, 50, 80, 50], 100);
// console.log(output); // 3
// let output = movingStuff([60, 80, 120, 90, 130], 140);
// console.log(output); // 4

function movingStuff(stuff, limit){
  // TODO: 여기에 코드를 작성합니다.
  stuff.sort((a,b)=>b-a)
  let count=0
  for(let i=0,j=stuff.length-1;i<=j;i++){
    if(stuff[i]+stuff[j]<=limit&&i!==j)j--
    count++
  }
  return count
}

//2번
// 문제
// 편의점에서 아르바이트를 하고 있는 중에, 하필이면 피크 시간대에 손님에게 거스름돈으로 줄 동전이 부족하다는 것을 알게 되었습니다.
// 현재 가지고 있는 동전은 1원, 5원, 10원, 50원, 100원, 500원으로 오름차순으로 정렬되어 있고, 각 동전들은 서로 배수 관계에 있습니다.
// 동전 개수를 최소화하여 거스름돈 K를 만들어야 합니다. 이때, 필요한 동전 개수의 최솟값을 구하는 함수를 작성해 주세요.

// 입력
// 인자: k
// number 타입의 k
// 1 <= k <= 100,000,000
// 출력
// number 타입의 거스름돈 K원을 만드는데 필요한 동전 개수의 최솟값을 반환해야 합니다.
// 입출력 예시
// // 4000원을 받았을 때 500원짜리 동전 8개를 반환합니다.
// const output1 = test1(4000);
// console.log(output1); // --> 8

// // 4972원을 받았을 때 500원짜리 동전 9개, 100원짜리 동전 4개, 50원짜리 동전 1개, 10원짜리 동전 2개, 1원짜리 동전 2개, 총 18개를 반환합니다.
// const output2 = test1(4972);
// console.log(output2); // --> 18


function partTimeJob(k) {
  // TODO: 여기에 코드를 작성하세요.
  let coin=[500,100,50,10,5,1]
  let count=0;
  let rest=k
  for(let i=0;i<coin.length,rest>0;i++){
    if(rest===0)return 'wtf'
  count+=parseInt(rest/coin[i])
  rest=rest%coin[i]
  }
  return count
}


//3번
// 보드 게임
// 문제
// N * N의 크기를 가진 보드판 위에서 게임을 하려고 합니다. 게임의 룰은 다음과 같습니다.

// 좌표 왼쪽 상단(0, 0)에 말을 놓는다.
// 말은 상, 하, 좌, 우로 이동할 수 있고, 플레이어가 조작할 수 있다.
// 조작의 기회는 딱 한 번 주어진다.
// 조작할 때 U, D, L, R은 각각 상, 하, 좌, 우를 의미하며 한 줄에 띄어쓰기 없이 써야 한다.
// 예시: UDDLLRRDRR, RRRRR
// 한 번 움직일 때마다 한 칸씩 움직이게 되며, 그 칸 안의 요소인 숫자를 획득할 수 있다.
// 방문한 곳을 또 방문해도 숫자를 획득할 수 있다.
// 보드 밖을 나간 말은 OUT 처리가 된다.
// 칸 안의 숫자는 0 또는 1이다.
// 단, 좌표 왼쪽 상단(0, 0)은 항상 0이다.
// 획득한 숫자를 합산하여 숫자가 제일 큰 사람이 이기게 된다.
// 보드판이 담긴 board와 조작하려고 하는 문자열 operation이 주어질 때, 말이 해당 칸을 지나가면서 획득한 숫자의 합을 구하는 함수를 작성하세요.

// 입력
// 인자 1: board
// number 타입의 2차원 배열
// 2 <= board.length <= 1,000
// 예: [ [0, 0, 1], [1, 0, 1], [1, 1, 1] ]
// 인자 2: operation
// string 타입의 대문자 영어가 쓰여진 문자열

// 1 <= operation.length <= board.length * 2

// U, L, D, R 이외의 문자열은 없습니다.
// 출력
// Number 타입을 반환해야 합니다.
// board와 operation이 입력값의 예시 ([ [0, 0, 1], [1, 0, 1], [1, 1, 1] ], DDR)일 때, (0, 0) -> (1, 0) -> (2, 0) -> (2, 1) 순서로 이동하게 되고, 각 0, 1, 1, 1을 얻어 3을 반환합니다.
// 주의사항
// 만약, 말이 보드 밖으로 나갔다면 즉시 OUT 을 반환합니다.
// 입출력 예시
// const board1 = [
//   [0, 0, 0, 1],
//   [1, 1, 1, 0],
//   [1, 1, 0, 0],
//   [0, 0, 0, 0]
// ]
// const output1 = boardGame(board1, 'RRDLLD');
// console.log(output1); // 4


// const board2 = [
//   [0, 0, 1],
//   [1, 1, 1],
//   [1, 0, 0]
// ]
// const output2 = boardGame(board2, 'UUUDD');
// console.log(output2); // 'OUT'

// const board3 = [
//   [0, 0, 0, 0, 0],
//   [0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 1, 0],
//   [0, 0, 0, 0, 0]
// ]
// const output3 = boardGame(board3, 'DDRRRUDUDUD');
// console.log(output3); // 0



function boardGame(board, operation) {
  // TODO: 여기에 코드를 작성하세요.
  let [i,j]=[0,0]
  let [iMax,jMax]=[board.length-1,board[0].length-1]
  let temp=0;
  for(let k=0;k<operation.length;k++){
    if(operation[k]==='U') i--
    else if(operation[k]==='D')i++
    else if(operation[k]==='L')j--
    else if(operation[k]==='R')j++
    if(i>iMax||j>jMax||0>i||0>j)return 'OUT'
    if(board[i][j]===1)temp++
  }
  return temp
};


//4번
// 금고를 털어라
// 문제
// 자신이 감옥에 간 사이 연인이었던 줄리아를 앤디에게 빼앗겨 화가 난 조지는 브레드, 맷과 함께 앤디 소유의 카지노 지하에 있는 금고를 털기로 합니다. 온갖 트랩을 뚫고 드디어 금고에 진입한 조지와 일행들. 조지는 이와중에 감옥에서 틈틈이 공부한 알고리즘을 이용해 target 금액을 훔칠 수 있는 방법의 경우의 수를 계산하기 시작합니다.

// 예를 들어 $50 을 훔칠 때 $10, $20, $50 이 있다면 다음과 같이 4 가지 방법으로 $50을 훔칠 수 있습니다.

// $50 한 장을 훔친다
// $20 두 장, $10 한 장을 훔친다
// $20 한 장, $10 세 장을 훔친다
// $10 다섯 장을 훔친다
// 훔치고 싶은 target 금액과 금고에 있는 돈의 종류 type 을 입력받아, 조지가 target 을 훔칠 수 있는 방법의 수를 리턴하세요.

// 입력
// 인자 1: target
// Number 타입의 100,000 이하의 자연수
// 인자 2: type
// Number 타입을 요소로 갖는 100 이하의 자연수를 담은 배열
// 출력
// Number 타입을 리턴해야 합니다.
// 조지가 target을 훔칠 수 있는 방법의 수를 숫자로 반환합니다.
// 주의사항
// 모든 화폐는 무한하게 있다고 가정합니다.
// 입출력 예시
// let output = ocean(50, [10, 20, 50]);
// console.log(output); // 4

// let output = ocean(100, [10, 20, 50]);
// console.log(output); // 10

// let output = ocean(30, [5, 6, 7]);
// console.log(output); // 4
// Hint!
// 해당 문제는 동전 교환 알고리즘 (Coin Change)을 활용하여 풀 수 있습니다.
// 검색해 보시고, 연구해 보세요!



function ocean(target, type) {
  // TODO: 여기에 코드를 작성합니다.
  let bag=new Array(target+1).fill(0)
  bag[0]=1
  for(let i=0;i<type.length;i++){
    for(let j=0;j<target+1;j++){
      if(j>=type[i])
      bag[j]+=bag[j-type[i]]
    }
  }
return bag[target]
}



//5번
// rockPaperScissors
// 문제
// 가위바위보 게임은 2인 이상의 사람이 동시에 '가위, 바위, 보'를 외치고 동시에 가위, 바위 또는 보 중에서 한 가지를 의미하는 손 모양을 내밀어 승부를 결정짓는 게임입니다. 세 판의 가위바위보 게임을 할 경우, 한 사람은 세 번의 선택(예. 가위, 가위, 보)을 할 수 있습니다. 세 번의 선택으로 가능한 모든 경우의 수를 구하는 함수를 작성합니다.

// 입력
// 없음
// 출력
// 2차원 배열(arr[i])을 리턴해야 합니다.
// arr[i]는 전체 경우의 수 중 한 가지 경우(총 세 번의 선택)를 의미하는 배열입니다.
// arr[i]는 'rock', 'paper', 'scissors' 중 한 가지 이상을 요소로 갖는 배열입니다.
// arr[i].length는 3
// 주의사항
// 최종적으로 리턴되는 배열의 순서는 가중치 적용 정렬(Weighted Sort)을 따릅니다.
// 중요도는 'rock', 'paper', 'scissors' 순으로 높습니다.
// 쉽게 생각해 올림픽 순위 결정 방식을 참고하면 됩니다.
// 금메달('rock')이 은메달('paper')보다 우선하고, 은메달('paper')이 동메달('scissors')보다 우선합니다.
// 입출력 예시
// let output = rockPaperScissors();

// console.log(output);
// /*
//     [
//       ["rock", "rock", "rock"],
//       ["rock", "rock", "paper"],
//       ["rock", "rock", "scissors"],
//       ["rock", "paper", "rock"],
//       // ...etc ...
//     ]
//   */
// Advanced
// 가위바위보 게임의 수를 나타내는 양의 정수 rounds가 주어질 경우, 해당 rounds 동안 선택할 수 있는 모든 경우의 수를 리턴하도록 함수를 작성해 보세요.
// let output = rockPaperScissors(5);

// console.log(output);
// /*
//     [
//       ["rock", "rock", "rock", "rock", "rock"],
//       ["rock", "rock", , "rock", "rock", "paper"],
//       ["rock", "rock", , "rock", "rock", "scissors"],
//       ["rock", "rock", "rock", "paper", "rock"],
//       ["rock", "rock", "rock", "paper", "paper"],
//       ["rock", "rock", "rock", "paper", "scissors"],
//       ["rock", "rock", "rock", "scissors", "rock"],
//       // ...etc ...
//     ]
//   */

function rockPaperScissors (round) {
    // TODO: 여기에 코드를 작성합니다.
    // if(round===undefined)round=3
    round=round||3
    const god=['rock', 'paper', 'scissors']
    let result=new Array(3**round)
    for(let i=0;i<result.length;i++)result[i]=new Array()
    for(let j=round-1;j>=0;j--){
      let temp=god.length**j
      for(let i=0;i<god.length**round;i++){
        //   console.log(god[parseInt(i/temp)])
        //   console.log(i,temp)
          result[i].push(god[parseInt(i/temp)%3])
      }
    }
    return result
};


//6번
// 새로운 치킨 소스 레시피
// 문제
// 개업 이래로 항상 승승장구하는 '승승장구 치킨집'의 비결은 소스에 있다. 수많은 타사 브랜드 치킨집들이 승승장구 치킨집의 소스 비결을 알아내려고 했으나 빈번히 포기했다.
// 그 이유는 5대째 내려오는 '비밀의 승승장구 치킨 소스 비율 레시피'는 70억 인구 중 사장님만 알고 있기 때문이다. 최근, 누리꾼 사이에서 이 레시피의 일부분을 발췌했다는 소문을 듣게 되었다.
// 그 소문은 다음과 같다.

// N 가지의 재료 중에 단 M 가지만을 사용하여 조합한 모든 경우의 수 중 하나이다.
// 재료는 0과 1로만 이루어진 숫자로 암호화가 되어 있고, 항상 1로 시작하며 복호화를 할 수 없다.
// 단, 0이 3개 이상인 재료는 상한 재료이기 때문에 제외한다.
// 재료의 순서에 따라 맛이 달라지기 때문에, 재료를 넣는 순서가 다르다면 다른 레시피이다.
// 이 소문을 참고하여 '비밀의 승승장구 치킨 소스'가 될 수 있는 경우의 수를 모두 반환하는 함수를 작성하세요.

// 입력
// 인자 1: stuffArr
// Number 타입의 재료를 담은 배열
// 요소는 0과 1로만 이루어진 숫자이며, 항상 1로 시작합니다.
// 요소는 중복될 수 없습니다.
// 요소의 길이는 20 이하입니다.
// 배열의 길이는 2 이상 10 이하입니다.
// ex) [111, 110, 1010, 10, 10110]
// 인자 2: choiceNum
// Number 타입의 1 이상 stuffArr 길이 이하의 자연수
// 재료를 선택할 수 있는 수를 뜻합니다.
// ex) 2
// 출력
// Number 타입을 반환해야 합니다.
// stuffArr가 [1, 10, 11000, 1111] 이고, choiceNum은 2라면 사용 가능한 재료는 [1, 10, 1111] 입니다. 조합할 수 있는 경우의 수는 6 가지입니다.
// 주의사항
// 만약, 주어진 재료 모두 사용할 수 없다면 빈 배열[]을 반환해야 합니다.
// 만약, 사용할 수 있는 재료가 choiceNum보다 작다면 빈 배열[] 을 반환해야 합니다.
// 조합 및 요소는 작은 숫자 -> 큰 숫자로 정렬합니다.
// 예시로 [1, 10, 11000, 1111]이 요소로 들어왔다면, 0이 세 개인 11000을 제외하고 [1, 10, 1111] 순서가 되어야 하며,
// [ [1, 10], [1, 1111], [10, 1], [10, 1111], [1111, 1], [1111, 10] ]을 반환해야 합니다.
// 입출력 예시
// const output1 = newChickenRecipe([1, 10, 1100, 1111], 2);
// console.log(output1);
// /*
//   [
//     [1, 10], [1, 1100], [1, 1111],
//     [10, 1], [10, 1100], [10, 1111],
//     [1100, 1], [1100, 10], [1100, 1111],
//     [1111, 1], [1111, 10], [1111, 1100]
//   ];
// */

// const output2 = newChickenRecipe([10000, 10, 1], 3);
// console.log(output2); // []

// const output3 = newChickenRecipe([11, 1, 10, 1111111111, 10000], 4);
// console.log(output3);
// /* 
//   [
//     [1, 10, 11, 1111111111],
//     [1, 10, 1111111111, 11],
//     [1, 11, 10, 1111111111],
//     [1, 11, 1111111111, 10],
//     [1, 1111111111, 10, 11],
//     [1, 1111111111, 11, 10],
//     [10, 1, 11, 1111111111],
//     [10, 1, 1111111111, 11],
//     [10, 11, 1, 1111111111],
//     [10, 11, 1111111111, 1],
//     [10, 1111111111, 1, 11],
//     [10, 1111111111, 11, 1],
//     [11, 1, 10, 1111111111],
//     [11, 1, 1111111111, 10],
//     [11, 10, 1, 1111111111],
//     [11, 10, 1111111111, 1],
//     [11, 1111111111, 1, 10],
//     [11, 1111111111, 10, 1],
//     [1111111111, 1, 10, 11],
//     [1111111111, 1, 11, 10],
//     [1111111111, 10, 1, 11],
//     [1111111111, 10, 11, 1],
//     [1111111111, 11, 1, 10],
//     [1111111111, 11, 10, 1],
//   ]
// */
function newChickenRecipe(stuffArr, choiceNum) {
  // TODO: 여기에 코드를 작성하세요.
  stuffArr=stuffArr.filter(x=>x.toString().indexOf('000')===-1? x:null)
  .sort((a,b)=>a-b)
  let result=[]
  function premutation(stuffArr,choiceNum,bucket=[]){
    if(choiceNum===0)return result.push(bucket)
    for(let i=0;i<stuffArr.length;i++){
      let newArr=[...stuffArr]
      premutation(newArr,choiceNum-1,bucket.concat(newArr.splice(i,1)))
    }
  }
  if(stuffArr.length<choiceNum)return []
  premutation(stuffArr,choiceNum)
  return result
}


//7번
// 블랙잭은 지겨워
// 문제
// 평범한 블랙잭 게임에서 수시로 패배하자 흥미가 떨어진 김코딩은 박타짜에게 게임룰을 변형하여 새로운 카드 놀이를 해 볼 것을 제안합니다.
// 새로운 룰은 다음과 같습니다.

// 1. 숫자로 이루어진 카드를 여러 장 받습니다.
// 2. 3장씩 카드를 고르고, 3장에 적힌 숫자들의 합이 소수인지 확인합니다.
// 3. 받아든 카드로 만들 수 있는 소수의 개수가 많은 사람이 이기게 됩니다.
// 예로, [1, 2, 3, 4]라는 카드를 받았을 때 만들 수 있는 숫자는 6, 7, 8, 9이고, 소수는 7 하나이기 때문에 가지고 있는 소수의 개수는 1개입니다.
// [2, 3, 4, 8, 13]라는 카드를 받았을 때 만들 수 있는 숫자는 9, 13, 18, 14, 19, 23, 15, 20, 24, 25이고, 소수는 13, 19, 23 총 3개이기 때문에 가지고 있는 소수의 개수는 3개입니다.

// 게임을 진행하기 전에 소수에 대해 아무런 지식이 없는 박타짜는 게임을 며칠 미룬 뒤, 게임의 룰을 따르는 함수를 만들기로 했습니다.
// 소수에 약한 박타짜를 도와 여러 장의 카드 중 세 장씩 조합해 소수가 되는 경우의 수를 리턴하는 함수를 완성해 주세요.

// 입력
// 인자 1
// cards: Array 3개 이상 50개 이하의 카드가 숫자로 들어 있는 배열
// 출력
// Number 타입을 리턴해야 합니다.
// 주의사항
// cards 에는 중복된 숫자의 카드는 들어있지 않습니다.
// 각 카드에 적힌 수는 1이상 1,000이하의 자연수입니다.
// 입출력 예시
// let output = boringBlackjack([1, 2, 3, 4]);
// console.log(output); // 1

// let output = boringBlackjack([2, 3, 4, 8, 13]);
// console.log(output); // 3

function boringBlackjack(cards) {
  // TODO: 여기에 코드를 작성합니다.
  function p(num){
  for(let i=2;i<=Math.sqrt(num);i++){
    if(num%i===0)return false
  }
  return true
  }
  function endGame(cards){
    let count=0
    for(let i=0;i<cards.length;i++ )
    for(let j=i+1;j<cards.length;j++ )
    for(let k=j+1;k<cards.length;k++ )
    if(p(cards[i]+cards[j]+cards[k]))count++
    
    return count
  }

return endGame(cards)
}


//8번
// 빼빼로 데이
// 문제
// 오늘은 빼빼로 데이입니다. 한 회사의 팀장은 출근길에 아몬드 빼빼로 M개와 누드 빼빼로 N개를 구매하여 아침 일찍 출근길에 나섰습니다.

// 팀장은 자신보다 먼저 출근해 있는 직원들에게 구매한 빼빼로를 전부 나누어 주려고 합니다.
// 단, 서로 질투하는 경우를 만들지 않기 위해 모든 직원들에게 공평하게 빼빼로를 나누어 주려고 합니다.
// 직원들은 각각의 빼빼로를 똑같은 개수만큼 받아야 합니다. 빼빼로를 쪼개서 줄 수는 없습니다.

// 하지만 회사에 도착하기 전이라 몇 명의 직원들이 있는지 모르는 상황입니다.
// 팀장이 아몬드 빼빼로를 4개, 누드 빼빼로를 8개를 구매 했다면, 다음과 같이 세 가지 방법으로 나누어 줄 수 있습니다.

// 출근한 직원이 1명이라면 아몬드 빼빼로 4개와 누드 빼빼로 8개를 줄 수 있습니다.
// 출근한 직원이 2명이라면 아몬드 빼빼로 2개와 누드 빼빼로 4개를 각각 줄 수 있습니다.
// 출근한 직원이 3명이라면 빼빼로를 남기지 않고 공평하게 주는 방법은 없습니다.
// 출근한 직원이 4명이라면 아몬드 빼빼로 1개와 누드 빼빼로 2개를 각각 줄 수 있습니다.
// 팀장은 출근한 직원 수에 따라 어떻게 빼빼로를 나누어 줄지 고민하고 있습니다.
// 여러분이 직원 수에 따라 빼빼로를 나누어 주는 방법을 구하는 솔루션을 제공해 주세요.

// 입력
// 인자 1: M
// Number 타입의 양의 정수 (1 ≤ M ≤ 1,000,000,000)
// 인자 2: N
// Number 타입의 양의 정수 (1 ≤ N ≤ 1,000,000,000)
// 출력
// 2차원 배열 output을 리턴해야 합니다.
// output[i]은 다음과 같은 순서를 가진 길이 3의 배열입니다.
// [빼빼로를 받게 되는 직원의 수, 나누어 주는 아몬드 빼빼로의 수, 나누어 주는 누드 빼빼로의 수]
// output은 output[i][0], 즉 '빼빼로를 받게 되는 직원의 수'를 기준으로 오름차순으로 정렬합니다.
// 입출력 예시
// let M = 4;
// let N = 8;
// let output = divideChocolateStick(M, N);
// console.log(output);
// // [[1, 4, 8], [2, 2, 4], [4, 1, 2]]


function divideChocolateStick(M, N) {

  function que(M,N){
    const gcd=(a,b)=>b>0?gcd(b,a%b):a
    let num=gcd(M,N)
    let result=[]
    for(let i=0;i<=Math.sqrt(num);i++)
      if(num%i===0)result.push(i)
    
    for(let i=result.length-1;i>=0;i--){
      if(i===result.length-1){
        if(result.indexOf(num/result[i])===-1)result.push(num/result[i])
      }
      else result.push(num/result[i])
    }
    return result
  }

  function snackSpliter(M,N,a=que(M,N)){
    let result=[]
    for(let i=0;i<a.length;i++){
      if(!(M%a[i])&&!(N%a[i]))result.push([a[i],M/a[i],N/a[i]])
    }
    return result
  }
return snackSpliter(M,N)
}
//9번
// 집밥이 그리워
// 문제
// 김코딩은 몇 년의 해외 출장 끝에 본가에 내려왔습니다. 오랜만에 보는 김코딩의 얼굴에 반가웠던 부모님은 상다리가 부러질 정도로 음식을 만들었습니다. 감동의 재회도 잠시, 의자에 앉아 식사를 하려던 김코딩은 무엇부터 먹어야 될지 깊은 생각에 빠졌습니다. 정성스럽게 차려 주신 만큼, 최대한 많은 방법으로 다양하게 먹고 싶었기 때문입니다.

// 밥은 한 가지이며 반찬은 다수일 때, 밥과 함께 먹을 수 있는 반찬의 모든 경우의 수를 배열에 담아 리턴하세요.

// 입력
// 인자 1: sideDishes
// String 타입의 영문으로 된 반찬이 나열되어 있는 배열
// 출력
// Array 타입을 리턴해야 합니다.
// 밥과 함께 먹을 수 있는 반찬의 모든 경우의 수가 담긴 배열
// 주의사항
// 반찬은 영문으로 작성이 되어 있습니다.
// 반찬은 중복되지 않습니다.
// 반찬을 먹지 않는 것도 포함됩니다. (출력되는 2차원 배열은 빈 배열을 포함합니다.)
// 반찬은 3개 이상 99개 이하입니다.
// 출력되는 배열은 전부 사전식 순서(lexical order)로 정렬되어야 합니다.
// ex)
// 입출력 예시
// let output = missHouseMeal(["eggroll", "kimchi", "fishSoup"]);
// console.log(output);
// /*
// [ [], 
//   [ 'eggroll' ], 
//   [ 'eggroll', 'fishSoup' ], 
//   [ 'eggroll', 'fishSoup', 'kimchi' ], 
//   [ 'eggroll', 'kimchi' ], 
//   [ 'fishSoup' ], 
//   [ 'fishSoup', 'kimchi' ], 
//   [ 'kimchi' ]
// ] 
// */

function missHouseMeal(sideDishes) {
  // TODO: 여기에 코드를 작성합니다.
  function yamyamlist(sideDishes){
  let result=[[]]
    for(let i=0;i<sideDishes.length;i++){
      let temp=result.slice()
      for(let j=0;j<temp.length;j++)
      temp[j]=temp[j].concat(sideDishes[i])
      result=result.concat(temp)
    }
    return result
  }
  return yamyamlist(sideDishes.sort()).sort();
}




// 3개 중 2개를 뽑아서 조합을 for문으로 만들기
function forloop() {
	let result = [];
	let lookup = [1, 2, 3];

	for(let i = 0; i < 3; i++) {
		for(let j = i + 1; j < 3; j++) {
			result.push([lookup[i], lookup[j]])
		}
	}
	return result;
}
//3개중 2개를 뽑아서 조합을 재귀로 만들기
let result=[]
function recloop(lookup= [1, 2, 3]){
  if(lookup.length===2)return result.push(lookup)
  for(let i=0;i<lookup.length;i++){
    let newArr=[...lookup]
    newArr.splice(i,1)
    recloop(newArr)
  }
}
recloop()
console.log(result)






// 반복문으로 순열 만들기
// 3개 중 3개를 뽑아서 순열을 만들기
function forloop() {
  let result = [];
  let lookup = [1, 2, 3];
  for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
          for(let k = 0; k < 3; k++){
              if(i === j || j === k || k == i) continue;
              result.push([lookup[i], lookup[j], lookup[k]])
          }
      }
  }
  return result;
}

// 재귀로 순열 만들기
// 3개 중 3개를 뽑아서 순열을 만들기
// 0: (3) [1, 2, 3]
// 1: (3) [1, 3, 2]
// 2: (3) [2, 1, 3]
// 3: (3) [2, 3, 1]
// 4: (3) [3, 1, 2]
// 5: (3) [3, 2, 1]
let result=[]
function recloop(lookup = [1, 2, 3],num=lookup.length,bucket=[]){
  if(num===0)result.push(bucket)
  for(let i=0;i<lookup.length;i++){
    let newArr=[...lookup]
    recloop(newArr ,num-1,bucket.concat(newArr.splice(i,1)))
  }
}
debugger
recloop()
console.log(result)




// 중복 순열 반복문으로 만들기
// 3개 중 3개를 뽑아서 중복 순열 만들기
function forloop() {
  let result = [];
  let lookup = [1, 2, 3];

  for(let i = 0; i < 3; i++) {
      let pick1 = lookup[i];
      for(let j = 0; j < 3; j++) {
          let pick2 = lookup[j];
          for(let k = 0; k < 3; k++) {
              let pick3 = lookup[k];
                  result.push([pick1, pick2, pick3])
          }
      }
  }
  return result;
}

// 중복 순열 재귀로 만들기
// 3개 중 3개를 뽑아서 중복 순열 만들기
let result=[]
function recloop(lookup = [1, 2, 3],bucket=[]){
  if(bucket.length===3)return result.push(bucket)
  for(let i=0;i<lookup.length;i++)
    recloop(lookup,bucket.concat(lookup[i]))
  

}
recloop()

/*
[ [], 
  [ 'eggroll' ], 
  [ 'eggroll', 'fishSoup' ], 
  [ 'eggroll', 'fishSoup', 'kimchi' ], 
  [ 'eggroll', 'kimchi' ], 
  [ 'fishSoup' ], 
  [ 'fishSoup', 'kimchi' ], 
  [ 'kimchi' ]
] 
*/


