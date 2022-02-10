function queuePrinter(bufferSize, capacities, documents) {
    // TODO: 여기에 코드를 작성합니다.
    function bufferAdder(_buffer){
    let sum=0;
    let buffer=[..._buffer.filter(x=>x)]
    for(let i=0;i<buffer.length;i++){
      sum+=buffer[i]
    }
    return sum
  }
    function printer(documents,bufferSize,capacities){
      let count=0;
      let buffer=[]
      buffer.length=bufferSize
      buffer.fill(undefined)
      while(buffer.filter(x=>x).length||documents.length){
        buffer.shift()
        let sum=bufferAdder(buffer)
        count++
        if(buffer[0]!==undefined){//맨처음에 인쇄할 숫자가 존재한다.
          if(documents.length&&documents[0]+sum<=capacities){//buffer로 documents에 있는 인쇄할 종이를 옴길수 있다.
            if(buffer.length<bufferSize)buffer.push(documents.shift())
          }else if(documents.length&&documents[0]+sum>capacities){//못옴긴다.
           buffer.push(undefined)
          }else{//documents가 비었다.
            // console.log('done')
          }
        }
        else{//맨처음에 인쇄할 숫자가 없다.
          if(buffer.length<bufferSize){
            if(documents.length&&documents[0]+sum<=capacities)buffer.push(documents.shift())
            else buffer.push(undefined)
          }
          else return console.log('error')
        }
      }
      return count
    }
   return printer(documents,bufferSize,capacities)
  }
  
  // function queuePrinter(bufferSize, capacities, documents) {
  
  //   let printList=[]
  //   printList.length=bufferSize
  //   let paperBox=[...documents]
  //   let sec=0
  // function sumIdx(arr){//0을 제외한 element 갯수
  //   return arr.map(x=>x!==0||undefined).filter(x=>x===true).length
  // }
  // function sumArr(arr){
  //   function add(accumulator, a) {
  //       return accumulator + a;}
  //       return arr.reduce(add,0);
  //   }
  //   // let bufferSize = 2;
  //   // let capacities = 10;
  //   // let documents = [7, 4, 5, 6];
  //   while(paperBox.length!==0||sumIdx(printList)){
  //     if(printList[0]===undefined){//인쇄해야할 문서없음
  //       if((sumArr(printList)+paperBox[0])<=capacities&&sumIdx(printList)+1<=bufferSize){
  //         printList.shift()
  //         printList[bufferSize-1]=paperBox.shift()
  //         sec++
  //       }//이동가능
  //       else{
  //         printList.shift()
  //         printList.length=bufferSize
  //         sec++
  //       }//이동불능
  
  //     }
  //     else if(printList[0]!==undefined){//인쇄해야할 문서있음
  //       if((sumArr(printList)-printList[0]+paperBox[0])<=capacities&&sumIdx(printList)<=bufferSize){
  //         printList.shift()
  //         printList[bufferSize-1]=paperBox.shift()
  //         sec++
  //       }//이동가능
  //       else{
  //         printList.shift()
  //         printList.length=bufferSize
  //         sec++
  //       }
  //     }
  //   }
  
  // return sec
  // }