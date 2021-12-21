arr=[4, 10, 3, 5, 1]
function swap(idx1, idx2, arr) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
function binaryHeap (arr) {
    return arr.reduce((heap, item) => {
        return insert(heap, item);
    }, []);
}
function getParentIdx(idx) {
    if(idx===0)return 0;
    return parseInt((idx-1)/2)
}

function insert(heap, item) {
    let son=heap.length
    let god=getParentIdx(son)
    heap.push(item)
    while(heap[god]>heap[son]){
        swap(god, son, heap)
        if(god!==0)[god,son]=[getParentIdx(god),god]
    }
    return heap
}
function removeRoot(heap) {
    if(heap.length<=1){
        return heap.pop()
    }
    let i=0;
    let temp=heap[i]
    heap[i]=heap.pop()
    while(heap[i]>heap[i*2+1]||heap[i]>heap[i*2+2]){
        if(heap[i]>heap[i*2+1]&&heap[i]>heap[i*2+2]){
            if(heap[i*2+1]<=heap[i*2+2]){
                swap(i, i*2+1, heap)
                i=i*2+1
            }
            else{
                swap(i, i*2+2, heap)
                i=i*2+2
            }
        }else if(heap[i]>heap[i*2+1]){
            swap(i, i*2+1, heap)
            i=i*2+1
        }else if(heap[i]>heap[i*2+2]){
            swap(i, i*2+2, heap)
            i=i*2+2
        }
    }
    console.log(heap)
    return temp
  }

function heapSort(arr) {
    let minHeap = binaryHeap(arr);
    let result=[]
    while(minHeap.length){
        let temp=removeRoot(minHeap)
        result.push(temp)
    }
    return result
  };


// debugger
heap=binaryHeap (arr)
console.log(heap)
console.log(heapSort(arr))