function createMatrix(arr) {
	// TODO: 여기에 코드를 작성합니다.
  function nullMatrix(n){
    let matrix=[]
    for(i=0;i<n;i++){
        matrix.push(new Array(n).fill(0))
    }
    return matrix
}
let max=[].concat(...arr).filter(x=>Number(x)).reduce((a,b)=>Math.max(a,b))+1
let nthMatrix=nullMatrix(max)


for(let i=0;i<arr.length;i++){
    let from=arr[i][0]
    let to=arr[i][1]
        arr[i][2]==="directed" ?nthMatrix[from][to]=1: nthMatrix[to][from]=1,nthMatrix[from][to]=1

  
}
return nthMatrix;
}