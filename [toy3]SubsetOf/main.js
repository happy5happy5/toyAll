const isSubsetOf = function (base, sample) {

    let baseArr=[...base]
    let sampleArr=[...sample]
    baseArr.sort((a,b)=>a-b)
    sampleArr.sort((a,b)=>a-b)
    let idx=0;
    let checker
    for(i=0;i<sampleArr.length;i++){
      checker=baseArr.indexOf(sampleArr[i],idx)
      if (checker===-1)return false
      else idx=checker
    }
    return true
  //base 와 sample 크기가 각 7만이고 부분집합이 맞다면 28만줄만 읽으면 완성되는 코딩 내 노트북을 무시하지마라
  
  
    // return sample.every(x=>base.includes(x))
    // 속도 상관없이 라이브러리 이용한 간단한 코딩
  
    // let baseArr=[...base]
    // baseArr.sort((a,b)=>a-b)
    // let sampleArr=[...sample]
    // sampleArr.sort((a,b)=>a-b)
    // let checker=[]
    //   for(i=0;i<sample.length;i++){
    //   if(   baseArr.indexOf(sample[i]) !==-1   ){
    //     checker.push(true)
    //     baseArr.splice( baseArr.indexOf(sample[i]),1)
    //   }else return false
    //   }
    //   if(checker.length===sampleArr.length)return true
    //   else return false
    //  처음부터 끝까지 정직하게 모두 검색하면서 완료된 인덱스 삭제
  
  };
  