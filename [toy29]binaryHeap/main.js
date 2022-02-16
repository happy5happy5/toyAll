//happy5happy5
function swap(idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
function getParentIdx(idx) {
  // TODO: 여기에 코드를 작성합니다.
  if(idx===0)return 0;
  return parseInt((idx-1)/2)
}
function insert(heap, item) {
    let son=heap.length
    let god=getParentIdx(son)
    heap.push(item)
    while(heap[god]<heap[son]){
        swap(god, son, heap)
        if(god!==0)[god,son]=[getParentIdx(god),god]
    }
    return heap
}
const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};



// 도시다람쥐: 재귀형태 저장용
function insertUsingRecursionBySq(heap, item) {
  heap.push(item);
  let childIdx = heap.length - 1;
  let parentIdx = getParentIdx(childIdx);

  const swapRec = (parent, child) => {
    if (heap[parent] < heap[child]) {
      swap(parent, child, heap);
      swapRec(getParentIdx(parent), parent);
    }
    if (parent === 0) return;
  };
  swapRec(parentIdx, childIdx);
}


//charmingpark
function swap(idx1, idx2, arr) {
  // 두 변수를 바꾸는 방법

  // 1) 임시 변수를 활용한 방법
  // let temp = arr[idx1];
  // arr[idx1] = arr[idx2];
  // arr[idx2] = temp;

  // 2) Destructuring assignment를 활용한 방법
  // arr이 reference type이라 가능
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

  // 3) XOR 연산을 활용한 방법
  //이해못했음..https://runebook.dev/ko/docs/javascript/operators/bitwise_xor_assignment

  // arr이 reference type이라 가능
  // arr[idx1] ^= arr[idx2];
  // arr[idx2] ^= arr[idx1];
  // arr[idx1] ^= arr[idx2];
}

function getParentIdx(idx) {
  // TODO: 여기에 코드를 작성합니다.
  return Math.floor((idx - 1) / 2);
  // parseInt(heap.length/2)를 썼었음..
}

function insert(heap, item) {
  // TODO: 여기에 코드를 작성합니다.
  heap.push(item);
  let curIdx = heap.length - 1;
  // reduce의 콜백함수에서 세번째 인자는 currentIdx임..이게 굳이 이렇게 되야할 필요가 있었나...

  let pIdx = getParentIdx(curIdx);
  while (pIdx >= 0 && heap[curIdx] > heap[pIdx]) {
    swap(curIdx, pIdx, heap);
    curIdx = pIdx;
    pIdx = getParentIdx(curIdx);
  }
  // 이진트리 2층부터 값을 비교해서 정리가 될 때까지 반복 함.
  // 나는 클때 작을때 를 if로 나눠서 실행할 수 없을까 생각했음.. 작으면 임시배열로 [좌, 우] 를 넣어서 짝수개면 heap에 넣어주는 형식으로...  
  
  return heap;
}

// 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {   
  // reduce를 썼으니까 어떻게쓰던 재귀함수 모양으로 써먹겠다는 뜻임.
  
  return insert(heap, item);
  }, []);
};