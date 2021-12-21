// let arr = [ 3,  5, 8, 10,12,15]
// let target = 3
// let str = 0;
// let end = arr.length - 1
// console.log(binary(arr, target, str, end))
function binary(arr, target, str, end) { //target이 없다면 target이 arr에 들어갈수있는 인덱스 반환
    let half = str + parseInt((end - str) / 2)
    if (arr[half] === target) return half
    if (arr[end] === target) return end
    if (end - str < 2 && arr[str] < target && target < arr[end]) return str // + 0.5
    if (end - str < 2 && target > arr[end]) return end
    if (end - str < 2 && target === arr[str]) return str
    if (end - str < 2 && target < arr[str]) return str // - 0.5
    if (arr[half] > target) {
        let end = half;
        return binary(arr, target, str, end)
    } else {
        let str = half
        return binary(arr, target, str, end)
    }
}

let [arr1, arr2, k] = [
    [1, 1, 2, 10], [2, 3, 7, 12], 7
]
let a = parseInt(k / 2)
let b = k - a
if (a > arr1.length || b > arr2.length) {
    a = arr1.length
    b = k - a
}

function binaryTwoArray(arr1, arr2, a, b, k) { //a+b는 언제나 k
    let temp
    let gap
    if(arr1[a - 1] === arr2[b - 1])return arr1[a-1]
    else if(arr1[a - 1] > arr2[b - 1]&&arr1[a - 1] >= arr2[b - 2]&&arr1[a - 1] <= arr2[b])return arr1[a-1]
    else if(arr2[b - 1] > arr1[a - 1]&&arr2[b - 1] >= arr1[a - 2]&&arr2[b - 1] <= arr1[a])return arr2[b-1]

    if(arr1[a - 1] > arr2[b - 1]){   
        temp = binary(arr1, arr2[b - 1], 0, a - 1)
        gap = Math.ceil((a - (temp + 1)) / 2)
        a=a-gap
        b=k-a
        
    }    
    else if(arr1[a - 1] < arr2[b - 1]){   
        temp = binary(arr2, arr1[a - 1], 0, b - 1)
        gap = Math.ceil((b - (temp + 1)) / 2)
        b=b-gap
        a=k-b
    }else if(b-1<0){
        a=a+b;
        b=0;
        return arr2[a-1]
    }else if(a-1<0){
        b=b+a;
        a=0;
        return arr2[b-1]
    }else if(a>arr1.length){
        a=arr1.length
        b=k-a;
    }else if(b>arr2.length){
        b=arr2.length
        a=k-b;
    }
    return binaryTwoArray(arr1,arr2,a,b,k)
}
// debugger
console.log(binaryTwoArray(arr1, arr2, a, b, k))