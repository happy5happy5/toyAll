
const god=[1,2,3,4,5,6,7,8,9]   //신의 숫자 두둥
//
//

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
  function onetimeSudo(board){//모든 점을 한번씩 확실한 숫자를 찾는다(81번)
    for(let i=0;i<board.length;i++){
      for(let j=0;j<board.length;j++){
        let waiting=waitingSudo(board,i,j)
        if (waiting.length===1)board[i][j]=waiting[0];
      }}return board
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
  function adjustedSudo(board){//모든 점의 확실한 숫자를 찾을수 없을때까지 찾는다
    while((`${board}`===`${onetimeSudo(board)}`)===false)onetimeSudo(board)
    return board
  }
  function oneChecker(board,i,j){//0을 제외하고 한점에 해당하는 가로 세로 네모에 같은 숫자가 있다면 false 없다면 true
    let vercial=god.map(x=>verticalSudo(board,i,j).indexOf(x)===verticalSudo(board,i,j).lastIndexOf(x))
    let horizon=god.map(x=>horizonSudo(board,i,j).indexOf(x)===horizonSudo(board,i,j).lastIndexOf(x))
    let square=god.map(x=>squareSudo(board,i,j).indexOf(x)===squareSudo(board,i,j).lastIndexOf(x))
    return [...vercial,...horizon,...square].every(x=>x===true)
  }
  function everyChecker(board){//0을 제외 하고 같은 숫자가 있는지 모든 점을 확인
    for(let i=0;i<board.length;i++){
      for(let j=0;j<board.length;j++){
        if(!oneChecker(board,i,j))return false
      }}return true
  }
  function boardCopymaker(board){
    let boardCopy=[]
    for(let i=0;i<board.length;i++){
      boardCopy[i]=[...board[i]]}
    return boardCopy
 }
  function numCount(board){//넘은숫자가 있으면 false 정상적이라면 true
  let numList= god.map(x=>[].concat(...board).filter(x=>x!==0).filter(y=>y===x).length) 
  //길이 9인 배열 각각 1,2,3..의 총 갯수를 의미
  return !numList.filter(x=>x>9).length  //각 숫자중에 갯수 한계를 넘은 숫자
}

  // let board=[
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0 ,0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0]
  // ]
  let board=[
    [0, 0, 0 ,0, 1, 0, 0, 0, 2],
    [0, 4, 0 ,0, 0, 0 ,6, 0, 0],
    [0, 5, 0, 0, 0, 0, 0, 0, 0],   
    [1, 0, 0, 7, 0 ,0, 0, 8, 0],
    [0, 0, 0, 5, 0, 0, 4, 0, 0],   
    [2, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 0, 0, 0, 0, 0, 0, 0, 1],  
    [0, 9, 0, 4, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 8, 0, 3, 0],

  ]
  // let board2=[
  //   [2, 0, 0, 6, 0, 0, 0, 7, 0],
  //   [0, 8, 0, 4, 7, 0 ,0, 9, 3],
  //   [0, 0, 0, 0, 8, 0, 0, 6, 5],
  //   [0, 0, 0, 2, 0, 1, 8, 0, 0],
  //   [0, 4, 5, 0, 6, 0, 0, 0, 0],
  //   [7, 0, 0, 0, 0, 0, 5, 0, 0],
  //   [6, 1, 0, 0, 0, 0, 3, 0, 4],
  //   [3, 0, 0, 7, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 5, 0, 0, 0, 0, 0]
  // ]
//`${board}`===`${board2}`
 ///board[i][j]

  
  function endgame(board){
    let boardOrigin=boardCopymaker(board)
    adjustedSudo(board)
    let numIndex=[].concat(...board).indexOf(0)
    let i=Math.floor(numIndex/9)
    let j=numIndex%9
    if (numIndex===-1){//0이 없으므로 완성되었다
      
      console.log('done')
      if(everyChecker(board))return board
      else return false
    }
    let waiting=waitingSudo(board,i,j)
    
    for(let k=0;k<waiting.length;k++){
      board[i][j]=waiting[k]
      if(!everyChecker(board)){
        board[i][j]=0;
      }

      else if(everyChecker(board)){
        if(endgame(board)===true&&[].concat(...board).indexOf(0)===-1){
          console.log('done')
          return board
        }
        if(k===waiting.length-1) {
          console.log('bad bad animal')
          board=boardCopymaker(boardOrigin)
          adjustedSudo(board)
          return board
        }
        else{
          console.log('next k will come soon')
        }
      }

    }
    
    

    

 
 }
  debugger
let answer=endgame(board)
console.log(answer)
// console.log(`${board}`===`${board2}`)
















