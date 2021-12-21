let room = [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 0],
  ];
  let sta = [4, 2];
  let end = [2, 2];
  let que={}
  let level=0;
  function indicator(room,sta){//열려있는 길의 좌표 배열을 반환
      let path=[]
      let [height,width]=[room.length-1,room[0].length-1]
    if(room[sta[0]][sta[1]]===0){
        if(sta[1]+1<=width&&room[sta[0]][sta[1]+1]===0)path.push([sta[0],sta[1]+1])
        if(sta[0]+1<=height&&room[sta[0]+1][sta[1]]===0)path.push([sta[0]+1,sta[1]])
        if(sta[1]-1>=0&&room[sta[0]][sta[1]-1]===0)path.push([sta[0],sta[1]-1])
        if(sta[0]-1>=0&&room[sta[0]-1][sta[1]]===0)path.push([sta[0]-1,sta[1]])
    }
    return path
  }

  function pathFinder(room,sta,end,que,level){
    que[sta]=level;
    console.log(sta)
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
  pathFinder(room,sta,end,que,level)
  console.log(que[end])