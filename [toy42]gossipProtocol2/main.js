// let village = [
//     '1001212',
//     '1201011',
//     '1102001',
//     '2111102',
//     '0012111',
//     '1111101',
//     '2121102',
//   ];
  let village = [
    '0022', // 첫 번째 줄
    '0020',
    '0020',
    '0220',
  ];
let createMatrix = (village) => {
  const matrix = [];
  village.forEach((line) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(line[i]);
    matrix.push(row);
  });
  return matrix;
};


let num=5;
let rumorMap=createMatrix(village);
// 0: (7) ['1', '0', '0', '1', '2', '1', '2']
// 1: (7) ['1', '2', '0', '1', '0', '1', '1']
// 2: (7) ['1', '1', '0', '2', '0', '0', '1']
// 3: (7) ['2', '1', '1', '1', '1', '0', '2']
// 4: (7) ['0', '0', '1', '2', '1', '1', '1']
// 5: (7) ['1', '1', '1', '1', '1', '0', '1']
// 6: (7) ['2', '1', '2', '1', '1', '0', '2']


const memoMaker=(M,N)=>Array(M).fill(0).map((_)=>Array(N).fill(0).map((_)=>[]));
const deepCopy=(arr2D)=>JSON.parse(JSON.stringify(arr2D))

function fourDirectionCheck(arr,agentIdx,level){
  let nextQue=[]
  let i=parseInt(agentIdx/arr.length)
  let j=agentIdx%arr.length
  if(i+1<arr.length&& (arr[i+1][j]===('1')||arr[i+1][j]===('2')||arr[i+1][j]>level)){
    arr[i+1][j]=level
    nextQue.push(agentIdx+arr.length)
  }
  if(j+1<arr.length&& (arr[i][j+1]===('1')||arr[i][j+1]===('2')||arr[i][j+1]>level)){
    arr[i][j+1]=level
    nextQue.push(agentIdx+1)
  }
  if(i>0&& (arr[i-1][j]===('1')||arr[i-1][j]===('2')||arr[i-1][j]>level)){
    arr[i-1][j]=level
    nextQue.push(agentIdx-arr.length)
  }
  if(j>0&& (arr[i][j-1]===('1')||arr[i][j-1]===('2')||arr[i][j-1]>level)){
    arr[i][j-1]=level
    nextQue.push(agentIdx-1)
  }
  return nextQue.length
}

function spreadRumor(rumorMap,agentIdxArr,level=0){
  if(level===0){
    for(let agentIdx of agentIdxArr)
    rumorMap[parseInt(agentIdx/rumorMap.length)][agentIdx%rumorMap.length]=0;
  }
  
  let que=[]
    for(let idx=0;idx<rumorMap.length**2;){
      let temp=[].concat(...rumorMap).indexOf(level,idx);
      if(temp>-1){
        que.push(temp)
        idx=temp+1
      }else break
    }
  
  if(que.length){
    for(let idx of que)
    fourDirectionCheck(rumorMap,idx,level+1)
  }
  
  else return level-1
  
  return spreadRumor(rumorMap, agentIdxArr,level+1)
}

function endGame(rumorMap){
  // this.endGame.asdf=1
  // console.log(this.endGame.asdf)
  let agentQue=[]
  let agentMap=[]
  for(let idx=0;idx<rumorMap.length**2;){
    let temp=[].concat(...rumorMap).indexOf('2',idx)
    if(temp===-1)break
    agentQue.push(temp)
    agentMap.push(agentQue.length-1)
    idx=temp+1
  }
  console.log(agentQue)
  console.log(agentMap)
  //여기서 agentQue 조합을 시작
  function combineRumor(agentMap,num){

  }
  console.log(spreadRumor(deepCopy(rumorMap),agentQue)) //최대값을 반환
  //spreadRumor(deepCopy(rumorMap),agentQue)이게 모든num의 agent 선택했을때임

  //여기까지

}
// debugger
endGame(rumorMap)


