function calculateDistance(p1, p2) {
    const yDiff = p2[0] - p1[0];
    const xDiff = p2[1] - p1[1];
    return Math.sqrt(Math.pow(yDiff, 2) + Math.pow(xDiff, 2));
  }

let points=[[0, 100], [3, 4], [22, 35], [58, 34], [121, 132], [140, 153]]
points.sort((a,b)=>a[0]-b[0])//mergeSort로 해야 제대로다. 근데 쓰지말라고는 안햇으니....


function closestPair(points){
  let n=points.length-1
  if(n===1) return (calculateDistance(points[0],points[1]))
  if(n===2) return Math.min(
    (calculateDistance(points[0],points[1])),
    (calculateDistance(points[2],points[1])),
    (calculateDistance(points[2],points[0]))
  )

  let half=parseInt(n/2)
  if(half<1)return Number.MAX_SAFE_INTEGER
  let dl=closestPair(points.slice(0,half))
  let dr=closestPair(points.slice(half))
  let d=Math.min(dl,dr)

  let maxX=points[half][0]+d
  let minX=points[half][0]-d
  let maxY=points[half][1]+d
  let minY=points[half][1]-d
  //사실 한점을 중심으로 거리가 d인 부분만 고려해야하지만 한변이 2d인 정사각형의 범위를 고려한다.
  //그 점이 범위에 포함되어있는지 구하기 위한 방법이 
  //차라리 포함시키고 계산하는 방법과 같으므로 그냥 포함 시켜버린다.(시간복잡도상에서 차이는 없다.)
  
  let range=[]
  for(let point of points){
    if(minX<point[0]&&point[0]<maxX&&minY<point[1]&&point[1]<maxY)
    range.push(point)
  }

  for(let i=0;i<range.length;i++){
    for(let j=0;j<range.length;j++){
      if(i!==j){
        let temp=calculateDistance(range[i],range[j])
        if(temp<d)d=temp
      }
    }
  }
  return d
}

// debugger
console.log(Math.round(closestPair(points)*100))




// coplit pass code

// // 좌표평면 위의 두 점 사이의 거리를 계산하는 함수입니다.
// function calculateDistance(p1, p2) {
//   const yDiff = p2[0] - p1[0];
//   const xDiff = p2[1] - p1[1];
//   return Math.sqrt(Math.pow(yDiff, 2) + Math.pow(xDiff, 2));
// }

// const closestPairOfPoints = function (points) {
//   // TODO: 여기에 코드를 작성합니다.

// points.sort((a,b)=>a[0]-b[0])
//   function closestPair(points){
//   let n=points.length-1
//   if(n===1) return (calculateDistance(points[0],points[1]))
//   if(n===2) return Math.min(
//     (calculateDistance(points[0],points[1])),
//     (calculateDistance(points[2],points[1])),
//     (calculateDistance(points[2],points[0]))
//   )

//   let half=parseInt(n/2)
//   if(half<1)return Number.MAX_SAFE_INTEGER
//   let dl=closestPair(points.slice(0,half))
//   let dr=closestPair(points.slice(half))
//   let d=Math.min(dl,dr)

//   let maxX=points[half][0]+d
//   let minX=points[half][0]-d
//   let maxY=points[half][1]+d
//   let minY=points[half][1]-d
  
//   let range=[]
//   for(let point of points){
//     if(minX<point[0]&&point[0]<maxX&&minY<point[1]&&point[1]<maxY)
//     range.push(point)
//   }

//   for(let i=0;i<range.length;i++){
//     for(let j=0;j<range.length;j++){
//       if(i!==j){
//         let temp=calculateDistance(range[i],range[j])
//         if(temp<d)d=temp
//       }
//     }
//   }
//   return d
// }

// return Math.round(closestPair(points)*100)
// };
