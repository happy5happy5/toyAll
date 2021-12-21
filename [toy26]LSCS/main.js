arr=  [-7, -6, -9]


function sumArrLargest(arr){
    let max=-Infinity
    let temp=0;

    for(let i=0; i<arr.length;i++){
        //max는 +만 합한거
        //temp는 전부 합한거
        if(arr[i]>=0){
            temp+=arr[i]
            if(temp>max){
                max=temp
            }
        }else if(arr[i]<0){
            temp+=arr[i]
            if(temp>max){
                max=temp
                temp=0;
            }
            else if(temp<0)temp=0;
        }
    }
    return max
}
debugger

console.log(sumArrLargest(arr))