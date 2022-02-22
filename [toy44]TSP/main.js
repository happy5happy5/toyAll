//happy5happy5
function calculateDistance(p1, p2) {
    const yDiffSquared = Math.pow(p2[0] - p1[0], 2);
    const xDiffSquared = Math.pow(p2[1] - p1[1], 2);
    const dist = Math.sqrt(yDiffSquared + xDiffSquared);
    return Math.floor(dist * 100);
  }
  const TSP = function (places) {
    // TODO: 여기에 코드를 작성합니다.
    function arrMut(array){
      let result=[]
      Array.prototype.deepCopy=function(){return JSON.parse(JSON.stringify(this))}
      function mutation(arr,que=[]){
          if(arr.length===0)
          return result.push(que)
          for(let i=0;i<arr.length;i++){
              let _arr=arr.deepCopy()
              let temp=_arr.splice(i,1)
              mutation(_arr,que.concat(temp))
          }
      }
      mutation(array)
      return (result)
      }
      function memoChecker(memo,que){//뒤집었을때도 같다면 탐색할 이유없다.
          let temp=''
          let temp2=''
          for(let i=0,j=que.length-1;i<que.length;i++,j--){
              temp+=`${que[i]}&`
              temp2+=`${que[j]}&`
          }
          temp=temp.slice(0,-1)
          temp2=temp2.slice(0,-1)
          if(memo[temp]||memo[temp2])return true
          else {
              memo[temp]=1
              return false
          }
      }
      function calQue(que,sum=0){
          for(let i=1;i<que.length;i++)sum+=calculateDistance(que[i-1],que[i])
          return sum
      }
      let memo={}
      let ques=arrMut(places)
      let min=Number.MAX_SAFE_INTEGER
      for(let que of ques){
          if(memoChecker(memo,que))continue;
          let temp=calQue(que)
          temp<min?min=temp:0
      }
      return (min)
  };
  