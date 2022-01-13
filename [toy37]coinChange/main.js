let total = 256;
let coins =  [1, 5, 10, 50, 100, 500]
let count=0
function spliter(total, coins) {
    let multipleIdx=parseInt(total/coins[0])
    if(!multipleIdx)return false
    while(multipleIdx){
        if(total-multipleIdx*coins[0]===0)
        count++
        multipleIdx--
        spliter(total-multipleIdx*coins[0], coins.slice(1))
    }
    
    return count
};
let output = spliter(total, coins);
console.log(output);



//test case pass code
// const coinChange = function (total, coins) {
//     // TODO: 여기에 코드를 작성합니다.
//     let count =0
//     function spliter(total, coins) {
//       let multipleIdx=parseInt(total/coins[0])
//       if(!multipleIdx)return false
//       while(multipleIdx){
//           if(total-multipleIdx*coins[0]===0)
//           count++
//           multipleIdx--
//           spliter(total-multipleIdx*coins[0], coins.slice(1))
//       }
//       return count
//     }
//   return spliter(total, coins)
// }