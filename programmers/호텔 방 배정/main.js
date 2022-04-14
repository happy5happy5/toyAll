let [k, room_number] = [15, [1, 10, 10, 10, 10, 10, 10, 10, 10, 15, 10]];

answer = [1, 10, 11, 2, 12, 13, 14, 15, 16];
//트리구조 안통함

function solution(k, room_number) {
  let hotel = new Map();
  let answer = [];
  const spliter = (num) => {
    if (!hotel.has(num)) {
      hotel.set(num, num + 1);
      return num;
    }
    let p = spliter(hotel.get(num));
    hotel.set(num, p);
    return p;
  };
  for (let i = 0; i < room_number.length && i < k; i++) {
    answer.push(spliter(room_number[i]));
  }
  // console.log(hotel);
  return answer;
}
debugger;
console.log(solution(k, room_number));

//객체 안통함

// function solution(k, room_number) {
//   let hotel = {};
//   let answer = [];
//   const spliter = (num) => {
//     if (!hotel[num]) {
//       hotel[num] = num + 1;
//       return num;
//     }
//     let temp = spliter(hotel[num]);
//     hotel[num] = temp + 1;
//     return temp;
//   };
//   for (let i = 0; i < room_number.length && i < k; i++) {
//     answer.push(spliter(room_number[i]));
//   }

//   // console.log(hotel);
//   return answer;
// }
