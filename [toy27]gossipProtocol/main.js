// let village = [
//   '111111', // 첫 번째 줄
  
// ];
let row = 0;
let col = 0;
function rumorSpreader(village, _sta, que, level) { //이웃집
  let sta=[]
  for(let i=0;i<_sta.length;i++){
    if(_sta[i]===','){
      sta.push(Number(_sta.slice(0,i)))
      sta.push(Number(_sta.slice(i+1)))
      break;
    }
  }
  
  let road=0;
  let [height, width] = [village.length - 1, village[0].length - 1]
  if (village[sta[0]][sta[1]] === '1') {
    if (sta[1] + 1 <= width && village[sta[0]][sta[1] + 1] === '1'&&que[[sta[0], sta[1] + 1]]===undefined){
      que[[sta[0], sta[1] + 1]]=level
      road++
    } 
    if (sta[0] + 1 <= height && village[sta[0] + 1][sta[1]] === '1'&&que[[sta[0]+1, sta[1]]]===undefined) {
      que[[sta[0] + 1, sta[1]]]=level
      road++
    }
    if (sta[1] - 1 >= 0 && village[sta[0]][sta[1] - 1] === '1'&&que[[sta[0], sta[1]-1]]===undefined) {
      que[[sta[0], sta[1] - 1]]=level
      road++
    }
    if (sta[0] - 1 >= 0 && village[sta[0] - 1][sta[1]] === '1'&&que[[sta[0]-1, sta[1]]]===undefined) {
      que[[sta[0] - 1, sta[1]]]=level
      road++
    }
  }
  if(road)return true
  else return false
}

function rumorMaker(village, sta, que, level){
  let path= Object.keys(que).filter(x => que[x] === level);
  let maping=[]
  for(let i=0;i<path.length;i++){
    maping.push(rumorSpreader(village, path[i], que, level+1))
  }
  if(maping.every(x=>x===false))return true
  else rumorMaker(village, sta, que, level+1)
}
let village = [
  '11011111011',
  '11011011011',
  '11011011011',
  '11011011011',
  '11011011011',
  '11011011011',
  '11011011011',
  '11011011011',
  '11011011011',
  '11011011011',
  '11011011011',
  '11011011011',
  '11011011011',
  '11011011011',
  '11011011011',
  '11011011011',
  '11011011011',
  '11011011011',
  '11011011011',
  '11011011011',
  '11011011011',
  '11011011011',
  '11011011011',
  '11011011011',
  '11011011011',
  '11011011011',
  '11011011011',
  '11011011011',
  '11011011011',
  '11011011011',
  '11011011011',
  '11011011011',
  '11111011111'
]
// let village = [
//   '11101',
//   '10101',
//   '10101',
//   '10101',
//   '10101',
//   '10101',
//   '10101',
//   '10101',
//   '10101',
//   '10101',
//   '10101',
//   '10101',
//   '10101',
//   '10101',
//   '10101',
//   '10101',
//   '10111'
// ]
let que={}
que[[row,col]]=0;
// debugger
rumorMaker(village, [row,col], que, 0)
console.log(Object.values(que).reduce((a,b)=>Math.max(a,b)))

