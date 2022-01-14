let image = [
    [1, 0, 1, 1],
    [0, 1, 1, 1],
    [0, 0, 1, 1],
    [0, 0, 0, 0],
  ];

  
function scissor(image){
    let half=image.length/2
    let [a,b,c,d]=[[],[],[],[]]
    for(let i=0;i<image.length;i++){
        if(i<half){
            a.push(image[i].slice(0,half))
            b.push(image[i].slice(half))
        }
        else{
            c.push(image[i].slice(0,half))
            d.push(image[i].slice(half))
        }
    }
    return [a,b,c,d]
}
let result=''
function squareChecker(image){
    let isOne=image[0][0]
    if([].concat(...image).every(x=>x===isOne)){
        result+=isOne
    }
    else{
        result+='X'
        let [a,b,c,d]=scissor(image)
        squareChecker(a)
        squareChecker(b)
        squareChecker(c)
        squareChecker(d)
    }
    return result
}
console.log(squareChecker(image))

//test case pass code
// const decompression = function (image) {
//     // TODO: 여기에 코드를 작성합니다.
//     function scissor(image){
//       let half=image.length/2
//       let [a,b,c,d]=[[],[],[],[]]
//       for(let i=0;i<image.length;i++){
//           if(i<half){
//               a.push(image[i].slice(0,half))
//               b.push(image[i].slice(half))
//           }
//           else{
//               c.push(image[i].slice(0,half))
//               d.push(image[i].slice(half))
//           }
//       }
//       return [a,b,c,d]
//     }
//     let result=''
//     function squareChecker(image){
//         let isOne=image[0][0]
//         if([].concat(...image).every(x=>x===isOne)){
//             result+=isOne
//         }
//         else{
//             result+='X'
//             let [a,b,c,d]=scissor(image)
//             squareChecker(a)
//             squareChecker(b)
//             squareChecker(c)
//             squareChecker(d)
//         }
//         return result
//     }
//     return squareChecker(image)
//   };