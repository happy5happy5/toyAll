//happy5happy5

const binarySearch = function (arr, target) {
    // TODO : 여기에 코드를 작성합니다.
    function binary(arr, target, str=0, end=arr.length-1) {
        let half = str + parseInt((end - str) / 2)
        if (arr[half] === target) return half
        if (arr[end] === target) return end
        if (arr[half] !== target && str + 1 === end && arr[str] !== target && arr[end] !== target) return -1
  
        if (arr[half] > target) return binary(arr, target, str, half)
        else return binary(arr, target, half+1, end)
        
    }
    return binary(arr,target)
  };
  