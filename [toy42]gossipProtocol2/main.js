const village = [//7번 테스트 케이스가 100by100이 아니다
  '00001111110000000001000001111111000000000000000000',
  '10000111111001100001000011111111000000000000000000',
  '11100111111001000001000011111111110000000000000000',
  '11110111111011001101111101111111110000000000000000',
  '11121111111111101111111111111111111100000000000000',
  '11111111111111101111111101111111111100000000000000',
  '00111111211111101101000110011211111100000000000000',
  '00011111111111101111100111111111111100000000000000',
  '00001111111111101111110111111101111000000000000000',
  '00000001111110001111111110111111001111100000000000',
  '00010010111110011110011110111110111100000000000000',
  '00111111000000011110011111111111111100000000000000',
  '00111111101000111110111111111101100000000000000000',
  '00111111111110111110111111111111110000000000000000',
  '11111111111110111111111111111111110000000000000000',
  '11001101101111111211111111010111111100000000000000',
  '10001110011111111111111111110111111110000000000000',
  '00001111111111111111111111111111011000000000000000',
  '00000111111111111111111111111111111000000000000000',
  '00001111111111111111111111111111111100000000000000',
  '00000111110110111111111111111110101111000000000000',
  '00000111100111111111111111110000111111100000001001',
  '00000111111101111111011111000000011100000000011101',
  '00000111111111111111111111110000011100000000011111',
  '00000111101111111111010111111100001111100000011111',
  '00000111100111111111111111111101111111100111111000',
  '00001111100111111111110111111111101111000100111000',
  '01101100000000111111000111111111111111110100111100',
  '01101111111011111111100000000111111111111111111110',
  '11001111111111111111100000000111111111111111111111',
  '11111101101011111111111110000111111111111111111111',
  '11111111111011011111111111000000011111111111011111',
  '00111111111001111111111111000000111111111111111111',
  '00111110111001111011111111111101111111111111111111',
  '00000011111111110011111111111111111111101110111011',
  '00000001111111010110111111111111111111011110101111',
  '00000001110111011111111111111101111111111100101111',
  '00000001111111111111111111111111111111111000111111',
  '00000001111111111111111111111111111111111100110111',
  '00000000000010011111100111111111111111111001111111',
  '00000000000010011111111111111111110001111111111111',
  '00000000000111111111111011111111000001111111111111',
  '00010000000011111011110011111011000001111111111111',
  '00011111001111111101111110111111110001111111111111',
  '11111111011110011111111110111111111100011111111111',
  '21121110111111110011110111111111111100001111111111',
  '11111110111111110111010011111111101100001111101101',
  '11111001101111011111111001111111111110011110011111',
  '00000011111111111110111111111111110110011110001111',
  '00000011111110011110011011111111111100011100001111',
  '00001111111111111111011011101111111100111100001111',
  '00000111100111111111111111111101111111111100001111',
  '00000000000011111111111001100111111111110100111111',
  '00000000000011111111100000100111111011100000111111',
  '11100000000011011110111000110111111111110000111111',
  '11100000000011011111100000001111111111111111111111',
  '11110000001111111111100000011111111101111111111011',
  '11010001111111001111111110111111111101111111111000',
  '11111111111101111111111111111111111100010011100000',
  '11100111111111111111111111001111111110010011100000',
  '11111110011111111111111111111101111100011011100000',
  '11111100011111111110011100111111110110001111100000',
  '11111000011111011110001101111111110111111111110000',
  '11111110000111010110001111111111110111111111111100',
  '11111110000111010111110111110111110100111111111000',
  '00011111111110111111110111111111000100000111000000',
  '11111111111100111111111111111101101100001111000111',
  '00111101111111111000011111111101111111110110001111',
  '00111111111110111111111111110111111111111111121111',
  '00111111111100011111011111111111111111111101111111',
  '11110111101101011010011011110111111111111111111110',
  '11100111111111111111011010101111111111011111111111',
  '11000111111111111111011111111111111111011111111111',
  '11100111110011111111111111111111111110011111111111',
  '01111111110000011111112111100000101111011111111111',
  '11111111111100011111111111100000111111011111111111',
  '11111111111111011111101111100001111111111011001111',
  '11101111111100011111000000100000110111011111001111',
  '00000111110000011111000000000000111101111111101110',
  '00000111110000011110000100001111111111111101121111',
  '00000111111111011111111110011101111101001101111011',
  '00000110011111011110111111111011111000001111111111',
  '00000111011000011111111111111111111000000011111001',
  '00000111111001111110111111111111000000000010000001',
  '00001111110000111111011111111100000000000000000001',
  '00001111111000111110011111111100000000100000000001',
  '00000001111001111000000111110100000001110000000001',
  '00000000111111111000011111111100000011111000000001',
  '00000000111111101000011111111100000011111000000011',
  '00000000011111100100010111101100000011111000000011',
  '00000000011111111111111111111000000011111111111100',
  '00000000111111111111011111111000000000011111111100',
  '00000000111111111000011000110000000000011111111111',
  '00000000001011111000000000000000000000011112111111',
  '00000000000011111100000000000000000000000001111111',
  '00000000000011111100000000000000000000000011110011',
  '00000000000011110100000000000000000000000111110011',
  '00000000000000100000000000000000000000000111110001',
  '00000000000000000000000000000000000000000011100111',
  '00000000000000000000000000000000000000000010000111'
];

//happy5happy5
const createMatrix = (village) => {
  const matrix = [];
  village.forEach((line) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(line[i]);
    matrix.push(row);
  });
  return matrix;
};

const gossipProtocol2 = function (village, num) {
  // TODO: 여기에 코드를 작성합니다.
  let rumorMap=createMatrix(village);
// const memoMaker=(M,N)=>Array(M).fill(0).map((_)=>Array(N).fill(0).map((_)=>[]));
const deepCopy=(arr2D)=>JSON.parse(JSON.stringify(arr2D));

function fourDirectionCheck(arr,agentIdx,level){
  let nextQue=[]
  let i=parseInt(agentIdx/arr[0].length)
  let j=agentIdx%arr[0].length
  if(i+1<arr.length&& (arr[i+1][j]===('1')||arr[i+1][j]===('2')||arr[i+1][j]>level)){
    if(arr[i+1][j]===('2')){
      arr[i+1][j]=0
      nextQue.push(agentIdx+arr.length)
    }
    else arr[i+1][j]=level
  }
  if(j+1<arr[0].length&& (arr[i][j+1]===('1')||arr[i][j+1]===('2')||arr[i][j+1]>level)){
    if(arr[i][j+1]===('2')){
      arr[i][j+1]=0
      nextQue.push(agentIdx+1)
    }
    else arr[i][j+1]=level
  }
  if(i>0&& (arr[i-1][j]===('1')||arr[i-1][j]===('2')||arr[i-1][j]>level)){
    if(arr[i-1][j]===('2')){
      arr[i-1][j]=0
      nextQue.push(agentIdx-arr.length)
    }
    else arr[i-1][j]=level
  }
  if(j>0&& (arr[i][j-1]===('1')||arr[i][j-1]===('2')||arr[i][j-1]>level)){
    if(arr[i][j-1]===('2')){
      arr[i][j-1]=0
      nextQue.push(agentIdx-1)
    }
    else arr[i][j-1]=level
  }
  return nextQue
}

function spreadRumor(rumorMap,agentIdxArr,level=0,twoLocation=[]){
  if(level===0){
    for(let agentIdx of agentIdxArr)
    rumorMap[parseInt(agentIdx/rumorMap.length)][agentIdx%rumorMap.length]=0;
    // rumorMap[parseInt(agentIdx/rumorMap[0].length)][agentIdx%rumorMap[0].length]=0;
  }
  
  let que=[]
    for(let idx=0;idx<rumorMap.length**2;){
      let temp=[].concat(...rumorMap).indexOf(level,idx);
      if(temp>-1){
        que.push(temp)
        idx=temp+1
      }else break
    }
  // if(twoLocation.length){
  //   twoLocation.forEach((x,i)=>{
  //     if(!que.includes(x))que.push(x)
  //   })
  // }
  // let nextQueList=[]
  if(que.length){
    for(let idx of que)
    fourDirectionCheck(rumorMap,idx,level+1)
  }
  
  else if([].concat(...rumorMap).indexOf('1')>-1)return //console.log('wtf')
  else return level-1
  
  return spreadRumor(rumorMap, agentIdxArr,level+1)
}

function endGame(rumorMap,num){
  // this.endGame.asdf=1
  // console.log(this.endGame.asdf)
  let agentQue=[]
  // let agentMap=[]
  for(let idx=0;idx<rumorMap.length**2;){
    let temp=[].concat(...rumorMap).indexOf('2',idx)
    if(temp===-1)break
    agentQue.push(temp)
    // agentMap.push(agentQue.length-1)
    idx=temp+1
  }
  // console.log(agentQue)
  // console.log(agentMap)
  //여기서 agentQue 조합을 시작
  let nCk=[]
  const combineAgent=(agentQue,num,combos=[])=>{
    if(num===0)return nCk.push(combos)
    for(let i=0;i<agentQue.length;i++){
      if(num>0){
        let temp=agentQue.slice()
        combineAgent(temp.slice(i+1),num-1,combos.concat(temp[i]))
      }
    }
    return nCk
  }
  combineAgent(agentQue,num)
  // console.log(nCk)
  // console.log(nCk)
  let min=Number.MAX_SAFE_INTEGER
  for(let que of nCk){
    let temp=spreadRumor(deepCopy(rumorMap),que)
    // console.log(temp,que)
    if(temp<min)min=temp
  }
  return min
  // console.log(spreadRumor(deepCopy(rumorMap),agentQue.slice(3))) //최대값을 반환
  //spreadRumor(deepCopy(rumorMap),agentQue)이게 모든num의 agent 선택했을때임

  //여기까지

}
return(endGame(rumorMap,num))
};
