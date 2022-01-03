//happy5happy5

function uglyNum(n,by2,by3,by5){
    if(by2===undefined)by2=[2]
    if(by3===undefined)by3=[3]
    if(by5===undefined)by5=[5]
    
    let temp=[by2[0],by3[0],by5[0]]
    let minIdx=temp.reduce((r,v,i,a)=> a[r]>v?i:r,0)
    if(n===1)return temp[minIdx]
    if(by2[0]===temp[minIdx])by2.shift()
    if(by3[0]===temp[minIdx])by3.shift()
    if(by5[0]===temp[minIdx])by5.shift()
    
    by2.push(temp[minIdx]*2)
    by3.push(temp[minIdx]*3)
    by5.push(temp[minIdx]*5)
    return uglyNum(n-1,by2,by3,by5)
}
// que는 아래와 같이 쌓이게 된다.
// by2=[2,4,6,8,12,16]
// by3=[3,6,9,12,18,24]
// by5=[5,10,15,20,25]
// 가장 작은 값을 빼내고 같은 값이 있으면 그것도 뺀다.
// 그리고 처음부터 que를 쌓는 작업을 반복한다.

// 아래를 붙여넣으면 테스트 통과된다.
// const uglyNumbers = function (n) {
//     function uglyNum(n,by2,by3,by5){
//       if(by2===undefined)by2=[2]
//       if(by3===undefined)by3=[3]
//       if(by5===undefined)by5=[5]
      
//       let temp=[by2[0],by3[0],by5[0]]
//       let minIdx=temp.reduce((r,v,i,a)=> a[r]>v?i:r,0)
//       if(n===1)return temp[minIdx]
//       if(by2[0]===temp[minIdx])by2.shift()
//       if(by3[0]===temp[minIdx])by3.shift()
//       if(by5[0]===temp[minIdx])by5.shift()
      
//       by2.push(temp[minIdx]*2)
//       by3.push(temp[minIdx]*3)
//       by5.push(temp[minIdx]*5)
//       return uglyNum(n-1,by2,by3,by5)
//     }
//     if (n===1)return 1
//     return uglyNum(n-1)
//   };