const board = [
    [0, 0, 0, 0, 0, 0, 0, 4, 1],
    [2, 0, 0, 7, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 6],
    [0, 0, 0, 3, 0, 0, 8, 0, 0],
    [0, 9, 0, 0, 0, 0, 5, 0, 0],
    [0, 6, 0, 0, 4, 0, 0, 0, 0],
    [7, 0, 0, 0, 0, 0, 2, 3, 0],
    [3, 0, 0, 0, 6, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0],
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
        if(oneChecker(board,index[0],index[1])){
                console.log(index)
            if(endgameSudo(board)===true)return true
        }
        else board[index[0]][index[1]]=0;

    }
    board[index[0]][index[1]]=0;
    return false


  }
