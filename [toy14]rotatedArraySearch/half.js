arr=[1, 2, 3]
str=0;
end=arr.length-1

function binaryToArray(arr,target,str,end){
 
    let half=parseInt((end-str)/2+str)
    if (end===half||str===half){
        console.log(str,half,end)
        if(arr[str]>arr[end]) return end
        else return str
    }
    else if (arr[str]>arr[half])return binaryToArray(arr,target,str,half);
    else if(arr[half]>arr[end])return binaryToArray(arr,target,half,end);

}
// debugger
console.log(binaryToArray(arr,null , 0,arr.length-1)===undefined)
