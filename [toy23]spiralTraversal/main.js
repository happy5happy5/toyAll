const matrix = [
    ['H', 'e', 'l', 'l'],
    ['l', 'd', '!', 'o'],
    ['r', 'o', 'w', ' '],
  ];


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

function sprial(matrix){
    if(matrix.length<1)return []
    
    return [...matrix[0],...sprial(rotating(matrix.slice(1,matrix.length),3))].join('')
}



console.log(sprial(matrix))

