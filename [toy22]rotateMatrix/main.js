// const matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
//   ];
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [10, 11, 12],
// ];
const matrix = 
    [
        [10, 7, 4, 1],
        [11, 8, 5, 2],
        [12, 9, 6, 3]
    ]


function rotating(matrix, k) {
    if (matrix.length === 0) return []
    let matrixRotate = []
    let matrixTemp=[]
    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = matrix.length-1; j >=0; j--) {
            matrixTemp.push(matrix[j][i]) 
        }
        matrixRotate.push(matrixTemp)
        matrixTemp=[];
    }
    if (--k) {
        return rotating(matrixRotate, k)
    } else return matrixRotate
}



// debugger
console.log(rotating(matrix, 3))