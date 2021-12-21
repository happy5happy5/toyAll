arr=[3, 4, 5, 2]
target=4;
function binaryComplex(arr,target){

    let str=0;
    let end=arr.length-1;
    let str2=str;
    let end2=end;
    let resultA=-1;
    let resultB=-1;
    for(let i=1;i<arr.length;i++){//i=3
        if(arr[i-1]>arr[i]) {
            str2=i;
            end2=i-1;
            break;
        }
    }
    
    if(str===str2) resultA=(binary(arr, target, str, end))
    else{
        resultA=binary(arr, target, str, end2)
        resultB=binary(arr, target, str2, end)
    }
    
    if (resultA===-1&&resultB===-1) return -1
    else if(resultA>-1)return resultA
    else return resultB
 
    function binary(arr, target, str, end) {
        if(str===end&&arr[str]!==target)return -1
        let half = str + parseInt((end - str) / 2)
        if (arr[half] === target) return half
        if (arr[end] === target) return end
        if (arr[half] !== target && str + 1 === end && arr[str] !== target && arr[end] !== target) return -1
        
        if (arr[half] > target) {
            let end = half;
            return binary(arr, target, str, end)
        } else {
            let str = half
            return binary(arr, target, str, end)
        }    
    }
}
debugger
console.log( binaryComplex(arr,target))