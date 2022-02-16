//happy5happy5
const spiralTraversal = function (matrix) {
    // TODO: 여기에 코드를 작성합니다.
  
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
  
  
   return sprial(matrix)
  };
  

  //elinapark0818
  // 0번째 배열은 쭈욱 ==> 오른쪽 방향으로 쭈우욱
const first = (matrix, result) => {
    for (let el of matrix[0]) {
      result += el;
    }
    matrix.shift();
    return result;
  };
  
  // 밑으로 내려가기 끝에 있으니까 팝팝 ==> 아래방향으로 쭈우욱
  const second = (matrix, result) => {
    for (let i = 0; i < matrix.length; i++) {
      let char = matrix[i].pop();
      result += char;
    }
    return result;
  };
  
  // 마지막 배열을 거꾸로 ==> 왼쪽방향으로 쭈우욱
  const third = (matrix, result) => {
    matrix[matrix.length - 1].reverse();
    for (let el of matrix[matrix.length - 1]) {
      result += el;
    }
    matrix.pop();
    return result;
  };
  
  // 제일 왼쪽 쉬프트! ==> 위쪽방향으로 쭈우욱
  const four = (matrix, result) => {
    for (let i = matrix.length - 1; i >= 0; i--) {
      let char = matrix[i].shift();
      result += char;
    }
    return result;
  };
  
  const spiralTraversal = function (matrix) {
    // TODO: 여기에 코드를 작성합니다.
    let result = "";
  
    while (true) {
      // 오른쪽 방향으로
      result = first(matrix, result);
  
      // 빈 배열이면 계산할 필요없다 break
      if (matrix.length === 0) {
        break;
      }
      // 아래 방향으로
      result = second(matrix, result);
      // 왼쪽 방향으로
      result = third(matrix, result);
  
      if (matrix.length === 0) {
        break;
      }
      // 위쪽 방향으로
      result = four(matrix, result);
    }
    return result;
  };