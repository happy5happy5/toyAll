let arr= [50, 3, 10, 7, 40, 80]

function lis(arr,door){
    if(arr.length===1)return arr
    let temp1=[]
    let temp2=[]
    for(let i=0;i<arr.length;i++){
        if(temp1[temp1.length-1]<arr[i]||i==0){
            temp1.push(arr[i])
        }
        else if(door){
            for(let j=temp1.length-1;j>=0;j--){
                if(arr[i]>temp1[j]){
                    temp2=lis(temp1.slice(0,j+1).concat(arr.slice(i)),true)
                    break
                }
                
            }
            if(temp2.length===0)temp2=lis(arr.slice(i),true)
            door=false
        }
        else 0;


    }
    if(temp1.length>temp2.length)return temp1
    else return temp2
}
debugger
console.log(lis(arr,true))





// const LIS = function (arr) {
//     function lis(arr,door){
//         if(arr.length===1)return arr
//         let temp1=[]
//         let temp2=[]
//         for(let i=0;i<arr.length;i++){
//             if(temp1[temp1.length-1]<arr[i]||i==0){
//                 temp1.push(arr[i])
//             }
//             else if(door){
//                 for(let j=temp1.length-1;j>=0;j--){
//                     if(arr[i]>temp1[j]){
//                         temp2=lis(temp1.slice(0,j+1).concat(arr.slice(i)),true)
//                         break
//                     }
//                 }
//                 if(temp2.length===0)temp2=lis(arr.slice(i),true)
//                 door=false
//             }
//             else 0;
    
    
//         }
//         if(temp1.length>temp2.length)return temp1
//         else return temp2
//     }
//     return lis(arr,true).length
//     };
    