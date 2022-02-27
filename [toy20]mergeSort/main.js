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
//arr.mergeSort()의 형태로 사용
//arr.mergeSort((a,b)=>b-a)는 내림차순