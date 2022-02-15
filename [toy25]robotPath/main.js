//happy5happy5
const robotPath = function (room, src, dst) {

  function indicator(room,sta){//열려있는 길의 좌표 배열을 반환
      let path=[]
      let [i,j]=sta
      let [height,width]=[room.length-1,room[0].length-1]
    if(room[i][j]===0){
        if(j+1<=width&&room[i][j+1]===0)path.push([i,j+1])
        if(i+1<=height&&room[i+1][j]===0)path.push([i+1,j])
        if(j-1>=0&&room[i][j-1]===0)path.push([i,j-1])
        if(i-1>=0&&room[i-1][j]===0)path.push([i-1,j])
    }
    return path
  }
  function pathFinder(room,sta,end,que={},level=0){
    que[sta]=level;
    if(`${end}`===`${sta}`)return que[sta]

    let path=indicator(room,sta)
    if(path.length===0)return false
    while(path.length>0){
        let next=path.pop()
        if(que[next]===undefined||que[next]>level+1)
        pathFinder(room,next,end,que,level+1)
    }
    return que
  }
  return pathFinder(room,src,dst)[dst]
};
