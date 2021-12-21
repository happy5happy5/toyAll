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
    while(heap[god]<heap[son]){
        swap(god, son, heap)
        if(god!==0)[god,son]=[getParentIdx(god),god]
    }
    return heap
}


// debugger
console.log(binaryHeap (arr))
