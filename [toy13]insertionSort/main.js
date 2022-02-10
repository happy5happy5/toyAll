//happy5happy5
const insertionSort = function (arr,callback) {
    // TODO: 여기에 코드를 작성합니다.
      function insertion(arr,callback){
        let arrForCallback=[...arr];
      if(typeof callback==='function'){
          arrForCallback=arrForCallback.map(x=>callback(x))
      }
      for(let i=1;i<arr.length;i++){
          if(arrForCallback[i-1]>arrForCallback[i]){
              let temp = arr.splice(i,1)
              let tempForCallback = arrForCallback.splice(i,1)
              for(let j=i-1;j>=0;j--){
                  if(arrForCallback[j]>tempForCallback[0]){
                      if(j===0){
                          arr.splice(0,0,temp[0])
                          arrForCallback.splice(0,0,tempForCallback[0])
                          break;
                      }
                  }else {
                      arr.splice(j+1,0,temp[0])
                      arrForCallback.splice(j+1,0,tempForCallback[0])
                      break;
                  }
  
              }
          
          }
          
      }
      return arr
  }
  let result = insertion(arr,callback)
  return result
  };
  
//elinapark0818
// * 시간복잡도 O(n^2)
// * 두 번째 인자로 callback 함수 받아서 나온 값으로.
// * func(data){ return data }
const insertionSort = function (arr, func = (data) => data) {
    // todo: 두번째 인자(idx === 1)부터 시작할거니까 i = 1
    for (let i = 1; i < arr.length; i++) {
      // current 에 현재값 arr[1] 을 할당
      let current = arr[i];
      // todo: 왼쪽원소인 j(idx = 1 - 1 === 0) 에 인덱스 0을 할당하기
      let j = i - 1;
      // * arr[j + 1]이 arr[j] 보다 클때 반복문 실행
      // todo: arr[1]이 arr[0] 보다 크다면 SWAP 바꿔주기!
      while (j >= 0 && func(arr[j]) > func(current)) {
        // * SWAP
        arr[j + 1] = arr[j];
        // * SWAP
        j = j - 1;
      }
      // * 다음 비교 할 현재값을 current를 arr[j +1] 에 할당하기
      arr[j + 1] = current;
    }
    return arr;
  };