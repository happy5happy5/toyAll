// let [arr,ranges]= [randomNumberArray(500000,10000,1000000), [[0,499999], [0, 499998]]]
let [arr,ranges]=[[2, 1, 4, 5, 1, 3, 3], [[1, 4], [0, 3]]]
function randomNumberArray(num,min,max){
  function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
  }
  let result=[]
  for(i=0;i<num;i++){
      result.push(getRandomInt(min, max))
  }
  return result
}

function pyramidbuilder(arr,ps,pe){
  if(ps===pe)return{
    value:arr[ps],
    index:ps
  }
  let half=parseInt((ps+pe)/2)
  let left=pyramidbuilder(arr,ps,half)
  let right=pyramidbuilder(arr,half+1,pe)
  return{
    value:left.value<right.value?left.value:right.value,
    index:left.value<right.value?left.index:right.index,
    left,
    right
  }
}

function pyramidTOP(pyramid,ps,pe,rs,re){
  if(ps===rs&&pe===re)return [pyramid.value,pyramid.index]
  
  let half=parseInt((ps+pe)/2)
  if(re<=half){
    return pyramidTOP(pyramid.left,ps,half,rs,re)
  }
  
  else if(half<rs){
    return pyramidTOP(pyramid.right,half+1,pe,rs,re)
  }

  else if(rs<=half&&half<re){
    let temp1=pyramidTOP(pyramid.left,ps,half,rs,half)
    let temp2=pyramidTOP(pyramid.right,half+1,pe,half+1,re)
    if(temp1[0]<temp2[0])return temp1
    else return temp2
  }
  else console.log('wth')
}



let pyramid=pyramidbuilder(arr,0,arr.length-1)

function pyramidArea(pyramid,arr,as,ae){
  let target=pyramidTOP(pyramid,0,arr.length-1,as,ae)
  if((ae-as+1)*target[0]>result)result=(ae-as+1)*target[0]
  // console.log(result)
  let from=target[1];
  let to=target[1];
  while(arr[from-1]===arr[target[1]])from--
  while(arr[to+1]===arr[target[1]])to++

  if(as<=from-1) {
    pyramidArea(pyramid,arr,as,from-1)
  }
  if(to+1<=ae){
    pyramidArea(pyramid,arr,to+1,ae)
  }
}

let result=0;
pyramidArea(pyramid,arr,0,arr.length-1)
console.log(result)




// const largestRectangularArea = function (histogram) {
//   // TODO: 여기에 코드를 작성합니다.
//   function pyramidbuilder(arr,ps,pe){
//   if(ps===pe)return{
//     value:arr[ps],
//     index:ps
//   }
//   let half=parseInt((ps+pe)/2)
//   let left=pyramidbuilder(arr,ps,half)
//   let right=pyramidbuilder(arr,half+1,pe)
//   return{
//     value:left.value<right.value?left.value:right.value,
//     index:left.value<right.value?left.index:right.index,
//     left,
//     right
//   }
// }

// function pyramidTOP(pyramid,ps,pe,rs,re){
//   if(ps===rs&&pe===re)return [pyramid.value,pyramid.index]
  
//   let half=parseInt((ps+pe)/2)
//   if(re<=half){
//     return pyramidTOP(pyramid.left,ps,half,rs,re)
//   }
  
//   else if(half<rs){
//     return pyramidTOP(pyramid.right,half+1,pe,rs,re)
//   }

//   else if(rs<=half&&half<re){
//     let temp1=pyramidTOP(pyramid.left,ps,half,rs,half)
//     let temp2=pyramidTOP(pyramid.right,half+1,pe,half+1,re)
//     if(temp1[0]<temp2[0])return temp1
//     else return temp2
//   }
//   else console.log('wth')
// }



// let pyramid=pyramidbuilder(histogram,0,histogram.length-1)

// function pyramidArea(pyramid,arr,as,ae){
//   let target=pyramidTOP(pyramid,0,arr.length-1,as,ae)
//   if((ae-as+1)*target[0]>result)result=(ae-as+1)*target[0]
//   // console.log(result)
//   let from=target[1];
//   let to=target[1];
//   while(arr[from-1]===arr[target[1]])from--
//   while(arr[to+1]===arr[target[1]])to++

//   if(as<=from-1) {
//     pyramidArea(pyramid,arr,as,from-1)
//   }
//   if(to+1<=ae){
//     pyramidArea(pyramid,arr,to+1,ae)
//   }
// }

// let result=0;
// pyramidArea(pyramid,histogram,0,histogram.length-1)
// return result
// };
