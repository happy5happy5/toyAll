function binary(arr, target, str, end) {
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
let arr = [3, 6, 7, 8, 9, 21, 31, 32];
let target = 25
let str = 0;
let end = arr.length - 1
// debugger
let result = binary(arr, target, str, end)
console.log(result)