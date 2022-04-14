//happy5happy5
const bubbleSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  let count = 1;
  while (count) {
    count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        count++;
      }
    }
    if (count === 0) break;
  }
  return arr;
};

//elinapark0818
// const swap = (idx1, idx2, arr) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };

//   const bubbleSort = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//       let sorted = 0;
//       for (let j = 0; j < arr.length - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//           sorted++;
//           swap(j, j + 1, arr);
//         }
//       }
//       if (!sorted) {
//         break;
//       }
//     }
//     return arr;
//   };

//OverFlowBin
// const bubbleSort = function (arr) {
//   for(let i = 0; i < arr.length; i++) {
//     let swapped = 0;
//     for(let j = 0; j < arr.length - i; j++) {
//       if(arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         swapped++;
//       }
//     }
//     if(!swapped) break;
//   }
//   return arr;
// };
