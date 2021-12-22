//**아래board를 예시로 사용한 수도 코드**
// const board = [
//   [3, 5, 1, 0, 0, 8, 7, 0, 6],
//   [0, 4, 0, 7, 0, 0, 1, 0, 0],
//   [0, 7, 0, 0, 0, 0, 9, 5, 4],
//   [8, 0, 4, 0, 2, 0, 6, 0, 0],
//   [0, 3, 2, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 3],
//   [7, 1, 0, 0, 4, 6, 0, 0, 5],
//   [0, 0, 6, 0, 5, 9, 0, 7, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
// ];
// *1* [0,0]부터 차례대로 0이 있는 곳을 탐색한다.
// *2* [0,3]에 들어갈수있는 숫자를 찾는다 
//                 ->가로에 1~9까지 숫자중에 없는 숫자[2,4,9]
// 			           ->세로에 1~9까지 숫자중에 없는 숫자[1,2,3,4,5,6,8,9]
// 			           ->네모에 1~9까지 숫자중에 없는 숫자[1,2,3,4,5,6,8,9]
//                 ->[0,3]에 들어갈 숫자 목록은 모든 경우를 포함하는 [2,4,9] 이다.
// *3* [0,3]에 들어갈수있는 숫자의 목록을 받아온다.
//    ==>[2,4,9]
// *4* [0,3]에 들어갈수있는 숫자 목록중에 하나인 2를 넣고 [0,4]에 대한 1번부터 반복한다.  //재귀를 사용한다.
// *5* 스도쿠 목록에 0이 존재하지 않는다면 정답으로 반환하고
// *6* [i,j]에 들어갈 숫자목록이 하나도 없다면 [i,j]의 숫자를 다시 0으로 바꾸고
//    3번에서 받은 숫자목록의 다음 숫자를 대입해서 다시 1번부터 반복한다.
//    ==>탐색중에 [5,6]에서 숫자목록이 하나도 없다면 [5,6]의 숫자를 0으로 바꾸고 재귀 종료
//    ==>[5,5]의 숫자목록 중에 사용 하지 않았던 다음 숫자를 넣어서 다시 탐색을 4번부터 시작한다.

const board = [//힌트가 17개인 고급문제
  [4, 0, 0, 0, 0, 0, 0, 0, 3],
  [0, 0, 0, 0, 7, 0, 0, 5, 0],
  [0, 9, 0, 0, 0, 2, 0, 0, 0],
  [3, 0, 0, 1, 0, 0, 6, 0, 0],
  [0, 0, 5, 0, 0, 0, 7, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 7, 0, 0, 0, 2, 0, 0],
  [0, 0, 0, 3, 6, 0, 0, 0, 0],
  [0, 0, 0, 4, 0, 0, 0, 0, 0],
];

  const god=[1,2,3,4,5,6,7,8,9]   //신의 숫자 두둥

  function squareSudo(board,i,j){//한점(i,j)에 해당하는 네모의 인자를 반환
    let [width,height,square]=[[],[],[]]
          if(j===0||j===1||j===2)width=[0,2]
      else if(j===3||j===4||j===5)width=[3,5]
      else if(j===6||j===7||j===8)width=[6,8]
          if(i===0||i===1||i===2)height=[0,2]
    else if(i===3||i===4||i===5)height=[3,5]
    else if(i===6||i===7||i===8)height=[6,8]
    for(let i=height[0];i<=height[1];i++){
      for(let j=width[0];j<=width[1];j++){
          square.push(board[i][j])
        }}return square
  }

  function verticalSudo(board,i,j){//한점(i,j)에 해당하는 수직의 인자를 반환
    let temp=[];
    for(let i=0;i<board.length;i++){
      temp.push(board[i][j])
    }return temp
  }
  function horizonSudo(board,i,j){//한점(i,j)에 해당하는 수평의 인자를 반환
    return board[i]
  }
  function waitingSudo(board,i,j){//가로 세로 네모 숫자 확인하고 한점(i,j)의 확실한 숫자를 반환한다
    let[temp,verticalTemp,horizonTemp,squareTemp]=[[],[],[],[]]
      if( board[i][j]===0 ){
          squareTemp=god.filter(x=>squareSudo(board,i,j).indexOf(x)<0)
          verticalTemp=god.filter(x=>verticalSudo(board,i,j).indexOf(x)<0)
          horizonTemp=god.filter(x=>horizonSudo(board,i,j).indexOf(x)<0)
          temp=verticalTemp.filter(x=>horizonTemp.indexOf(x)>-1).filter(y=>squareTemp.indexOf(y)>-1)
          return temp
        } else return board[i][j]
  }
  function oneChecker(board,i,j){//0을 제외하고 한점에 해당하는 가로 세로 네모에 같은 숫자가 있다면 false 없다면 true
    let vercial=god.map(x=>verticalSudo(board,i,j).indexOf(x)===verticalSudo(board,i,j).lastIndexOf(x))
    let horizon=god.map(x=>horizonSudo(board,i,j).indexOf(x)===horizonSudo(board,i,j).lastIndexOf(x))
    let square=god.map(x=>squareSudo(board,i,j).indexOf(x)===squareSudo(board,i,j).lastIndexOf(x))
    return [...vercial,...horizon,...square].every(x=>x===true)
  }
  function findZeroSudo(board){//0인 인덱스를 [i,j]로 반환
    let numIndex=[].concat(...board).indexOf(0)
    let i=Math.floor(numIndex/9)
    let j=numIndex%9
    return [i,j]
  }
  function endgameSudo(board){

    let index=findZeroSudo(board)
    if(index[0]===-1)return true
    let waiting=waitingSudo(board,index[0],index[1])
    for(let k=0;k<waiting.length;k++){
        board[index[0]][index[1]]=waiting[k];
        // console.log(index)//이 부분을 주석해체하면 어떤 숫자를 바꾸는지 볼 수 있다
        if(endgameSudo(board)===true)return true
        else board[index[0]][index[1]]=0;
    }
    board[index[0]][index[1]]=0;
    return false
  }
  endgameSudo(board)
  console.log(board)

  // 0: (9) [4, 5, 2, 6, 1, 9, 8, 7, 3]
  // 1: (9) [1, 3, 6, 8, 7, 4, 9, 5, 2]
  // 2: (9) [7, 9, 8, 5, 3, 2, 4, 1, 6]
  // 3: (9) [3, 7, 9, 1, 4, 5, 6, 2, 8]
  // 4: (9) [8, 6, 5, 2, 9, 3, 7, 4, 1]
  // 5: (9) [2, 4, 1, 7, 8, 6, 3, 9, 5]
  // 6: (9) [6, 8, 7, 9, 5, 1, 2, 3, 4]
  // 7: (9) [5, 2, 4, 3, 6, 7, 1, 8, 9]
  // 8: (9) [9, 1, 3, 4, 2, 8, 5, 6, 7]