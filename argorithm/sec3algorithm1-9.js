
//1번
function movingStuff(stuff, limit) {
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
function partTimeJob(k) {
  // TODO: 여기에 코드를 작성하세요.
  let coin=[500,100,50,10,5,1]
  let count=0;
  let rest=k
  for(let i=0;i<coin.length;i++){
  count+=parseInt(rest/coin[i])
  rest=rest%coin[i]
  }
  return count
}
//3번
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
function rockPaperScissors (round) {
    // TODO: 여기에 코드를 작성합니다.
    if(!round)round=3
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
function newChickenRecipe(stuffArr, choiceNum) {
  // TODO: 여기에 코드를 작성하세요.
  stuffArr=stuffArr.map(x=>
    x.toString().indexOf('000')===-1? x:null)
  .filter(x=>x)
  .sort((a,b)=>a-b)
  let result=[]
  function premutation(stuffArr,choiceNum,bucket){
    if(choiceNum===0){
      result.push(bucket)
      return;
    }
    for(let i=0;i<stuffArr.length;i++){
      let newArr=[...stuffArr]
      premutation(newArr,choiceNum-1,bucket.concat(newArr.splice(i,1)))
    }
  }
  if(stuffArr.length<choiceNum)return []
  premutation(stuffArr,choiceNum,[])
  return result
}
//7번
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
function missHouseMeal(sideDishes) {
  // TODO: 여기에 코드를 작성합니다.
  let result=[[]]
  function yamyamlist(sideDishes){
    for(let i=0;i<sideDishes.length;i++){
      let temp=result.slice()
      for(let j=0;j<temp.length;j++)temp[j]=temp[j].concat(sideDishes[i])
      result=result.concat(temp)
    }
  }
  yamyamlist(sideDishes.sort())
  return result.sort();
}