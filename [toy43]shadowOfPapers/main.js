//happy5happy5
Array.prototype.mergeSort = function(cal=(a,b)=>a-b,arr=this){
  const downtier=(arr)=>arr.length<=1?arr:uptier(downtier(arr.slice(0,parseInt(arr.length/2))),downtier(arr.slice(parseInt(arr.length/2))));
  const uptier=(left,right,arr=[],leftIdx=0,rightIdx=0)=>{
      while (leftIdx+rightIdx<left.length+right.length)
          if (leftIdx >= left.length)arr.push(right[rightIdx++]);
          else if (rightIdx >= right.length||cal(left[leftIdx],right[rightIdx])<0)arr.push(left[leftIdx++]);
          else arr.push(right[rightIdx++]);
      return arr;
  }
  return downtier(arr);
}
function shadowOfPapers(papers) {
  papers=papers
  .map(x=>[x[0],x[0]+x[2],x[1],x[1]+x[3]])
  .mergeSort((a,b)=>a[0]-b[0]?a[0]-b[0]:a[1]-b[1])
  const scaner=(papers,config,call=(a)=>[a[0+config*2],a[1+config*2]])=>{
    let [laser,laserT,idx]=[call(papers[0])[0],call(papers[0])[0],0]
    return ()=>{
      let minLaser=Number.MAX_SAFE_INTEGER;
      let que=[];
      while(idx<papers.length&&call(papers[idx])[1]<laser)++idx
      for(let i=idx;i<papers.length;i++){
        if(call(papers[i])[0]<=laser&&laser<call(papers[i])[1]){
          if(minLaser>call(papers[i])[1])minLaser=call(papers[i])[1]
          que.push(i);
        }else if(laser<call(papers[i])[0]){
          if(minLaser>call(papers[i])[0])minLaser=call(papers[i])[0]
          break;
        }else console.log('very wrong act');
      }
      let temp=laser;
      [laser,laserT]=[minLaser,minLaser];
      if(laserT>1000000)return false;
      return [temp,laserT,...que];
    }
  }
  function areaY(papers, ques){//해당 인덱스를 받아서 중복없는 구간 반환
    let sum=0;
    let papersY=[];
    for(let i=0;i<ques.length;i++)papersY.push(papers[ques[i]]);
    if(!papersY.length)return 0;
    let closure=scaner(papersY.mergeSort((a,b)=>a[2]-b[2]?a[2]-b[2]:a[3]-b[3]),1);
    while(1){
      let aux=closure();
      if(!aux)break;
      if(aux.length>2)sum+=aux[1]-aux[0];
    }
    return sum;
  }

  let closure=scaner(papers,0);
  let sum=0;
  while(1){
    let aux=closure();
    if(!aux)break;
    sum+=(aux[1]-aux[0])*areaY(papers, aux.slice(2));
  }
  return sum;
}
