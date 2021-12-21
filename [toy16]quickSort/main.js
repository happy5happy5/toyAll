arr = [1, 2, 3, 4, 10, 12, 6, 5, 13]
let callback=function (x){return -x}
result=quickSorting(arr,callback)
console.log(result)



function quickSorting(arr,callback){
    let _arr=[...arr];
    if(typeof callback==='function')_arr=arr.map(x=>callback(x))

    if(arr.length===1||arr.length===0)return arr
    let god= parseInt(arr.length/2)
    let left=[];
    let right=[];
    
    for(let i=0;i<arr.length;i++){
        if(i===god){
            //console.log('do nothing!')
        }
        else if(_arr[i]<=_arr[god])left.push(arr[i])
        else if(_arr[i]>_arr[god])right.push(arr[i])
        else {
            //console.log('significant error')
        }
    }
    return [...quickSorting(left,callback),arr[god],...quickSorting(right,callback)]
}