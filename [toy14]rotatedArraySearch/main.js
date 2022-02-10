//happy5happy5
const rotatedArraySearch = function (rotated, target) {

    function binaryComplex(arr,target){
  
      let str=0;
      let end=arr.length-1;
      let str2=str;
      let end2=end;
      let resultA=-1;
      let resultB=-1;

      let half=binaryToArray(arr,null,str,end)
      if(half!==undefined){
        str2=half
        end2=str2-1
      }else half = str + parseInt((end - str) / 2)
  
      if(str===str2) resultA=(binary(arr, target, str, end))
      else{
          resultA=binary(arr, target, str, end2)
          resultB=binary(arr, target, str2, end)
      }
      
      if (resultA===-1&&resultB===-1) return -1
      else if(resultA>-1)return resultA
      else return resultB
      
      function binaryToArray(arr,target,str,end){
      
          let half=parseInt((end-str)/2+str)
          if (end===half||str===half){
              console.log(str,half,end)
              if(arr[str]>arr[end]) return end
              else return str
          }
          else if (arr[str]>arr[half])return binaryToArray(arr,target,str,half);
          else if(arr[half]>arr[end])return binaryToArray(arr,target,half,end);
  
      }
  
      function binary(arr, target, str, end) {
          if(str===end&&arr[str]!==target)return -1
          let half = str + parseInt((end - str) / 2)
          if (arr[half] === target) return half
          if (arr[end] === target) return end
          if (arr[half] !== target && str + 1 === end && arr[str] !== target && arr[end] !== target) return -1
          
          if (arr[half] > target) {
              let end = half;
              return binary(arr, target, str, end)
          } else {
              let str = half
              return binary(arr, target, str, end)
          }    
      }
  }
  
  return binaryComplex(rotated,target)
  };
  

//elinapark0818
  const rotatedArraySearch = function (rotated, target) {
    // TODO : 여기에 코드를 작성합니다.
    // 부분 오름차순 정렬되어 있는 배열 rotated
    // 배열의 요소 중 target과 일치하는 게 있다면 해당 요소의 인덱스를 리턴
    // 없다면 -1 리턴하라
  
    // 시간복잡도 O(n)
    // for (let i=0; i<rotated.length; i++) {
    //   if (rotated[i] === target) {
    //     return i
    //   }
    // }
    // return -1
  
    // 시간복잡도 O(log n)
    // * Binary Search 의 시간복잡도는 O(log n)
    let left = 0;
    let right = rotated.length - 1;
  
    // 오름차순이니까 오른쪽이 크도록
    while (left <= right) {
      // 중간값 설정
      let mid = parseInt((left + right) / 2);
      // 중간값이 타겟이면 해당 인덱스 리턴 ㄱㄱ
      if (rotated[mid] === target) {
        return mid;
      }
      // 중간값이 왼쪽보다 크다면
      if (rotated[left] < rotated[mid]) {
        // 타겟이 중간값보다 작고 왼쪽값보다 크거나 같다면
        if (rotated[mid] > target && rotated[left] <= target) {
          // 오른쪽 범위를 왼쪽으로 한칸이동해서 범위 좁히기
          right = mid - 1;
        } else {
          // 왼쪽 범위를 오른쪽으로 한칸 이동해서 범위 좁히기
          left = mid + 1;
        }
      }
      // 중간값이 왼쪽보다 작다면 === 왼쪽이 부분적 정렬되어있는 거임
      else {
        // 타겟이 오른쪽보다 작거나 같고 중간값보다는 크다면
        if (rotated[right] >= target && rotated[mid] < target) {
          // 왼쪽 범위를 오른쪽으로 한칸 이동해서 범위 좁히기
          left = mid + 1;
        } else {
          // 오른쪽 범위를 왼쪽으로 한칸 이동해서 범위 좁히기
          right = mid - 1;
        }
      }
    }
    return -1;
  };