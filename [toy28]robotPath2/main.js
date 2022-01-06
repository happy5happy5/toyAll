let room = [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 0],
  ];
let sta = [4, 2];
let staDir = 'up'
let end =  [2, 2];
let endDir = 'down';
let level=0;
let mapping={}
mapping[sumChanger(room,sta)]=[level,staDir]

function roomCopy(original){//deep copy
    let newOne = original.map(arr=>arr.slice());
    return newOne
}
function sumChanger(room,cor){////cor can be 'array(2)' or 'number' type value
    let temp=room[0].length;
    if(typeof cor==='number'){
        return [parseInt(cor/temp),cor%temp]
    }
    else return cor[0]*temp+cor[1]
}
function dirChanger(staDir){//staDir should be 'string' type value
    if(staDir==='up')return 1
    else if(staDir==='right')return 2
    else if(staDir==='down')return 3
    else if(staDir==='left')return 4
    else if(typeof staDir==='number'){
        if(staDir===1)return 'up'
        else if(staDir===2)return 'right'
        else if(staDir===3)return 'down'
        else if(staDir===4)return 'left'
    }
    else console.log('error of dirChanger()')
}
function dirCounter(staDir,nextDir){//staDir,nextDir can be 'string' or 'number' type value
    let [_staDir,_nextDir]=[staDir,nextDir]
    if (typeof _staDir==='string')_staDir=dirChanger(_staDir)
    if (typeof _nextDir==='string')_nextDir=dirChanger(_nextDir)

    if(_staDir===_nextDir)return 0;
    else{
       let result= Math.abs(_staDir-_nextDir)
       if(result>2)return 1;
       else return result
    }
}
function indicator(room,_sta,dir){//find opened way [[direction,coordinate]]
    let sta=_sta
    if(typeof _sta==='number')sta=sumChanger(room,_sta)
    let path=[]
    let [height,width]=[room.length-1,room[0].length-1]
    if(room[sta[0]][sta[1]]===0){
        if(sta[0]-1>=0&&room[sta[0]-1][sta[1]]===0)path.push(['up',[sta[0]-1,sta[1]]])
        if(sta[1]+1<=width&&room[sta[0]][sta[1]+1]===0)path.push(['right',[sta[0],sta[1]+1]])
        if(sta[0]+1<=height&&room[sta[0]+1][sta[1]]===0)path.push(['down',[sta[0]+1,sta[1]]])
        if(sta[1]-1>=0&&room[sta[0]][sta[1]-1]===0)path.push(['left',[sta[0],sta[1]-1]])
    }
    if(dir){
        path=[...path.filter(x=>x[0]===dir)]
        if(path.length)return path[0][1]
    }
  return path
}


function pathFinder(room,end,endDir,mapping,level){
    if(mapping[sumChanger(room,end)])
    return mapping[sumChanger(room,end)][0]+dirCounter(mapping[sumChanger(room,end)][1],endDir)
    
    //mapping 에서 현재 level인 모든 key를 가져온다.
    let nowLevelCor=Object.keys(mapping).filter(x=>mapping[x][0]===level)
    // nowLevelCor=nowLevelCor.map(x=>Number(x))

    for(let j=0;j<nowLevelCor.length;j++){
        let sta=Number(nowLevelCor[j])
        let cor=sumChanger(room,sta)
        let que=indicator(room,cor)//다음꺼 대기줄
        

        for(let i=0;i<que.length;i++){
            if(room[que[i][1][0]][que[i][1][1]]===0&&mapping[que[i][1]]===undefined){
                let level2=level
                if(que[i][0]===mapping[sta][1])level2+=1
                else level2+=1+dirCounter(que[i][0],mapping[sta][1])
        
                // let nextDir=que[i][0]
                // let nextCor=que[i][1]
                let nextIdx= sumChanger(room,que[i][1])
                while(1){//직진
                    if(mapping[nextIdx]===undefined){
                        mapping[nextIdx]=[level2, que[i][0]]
                        let nextStep=indicator(room,nextIdx,que[i][0])
                        if(nextStep.length)nextIdx= sumChanger(room,nextStep)
                        else {
                            // console.log(mapping)
                            break;
                        }
                    }
                    else break;
                }
            }
        }
    }
    
    return pathFinder(room,end,endDir,mapping,level+1)
}

// debugger
console.log(pathFinder(room,end,endDir,mapping,level))


//test case pass
// const robotPath2 = function (room, src, sDir, dst, dDir) {
//     let sta = src
//     let staDir = dirChanger(sDir)
//     let end =  dst;
//     let endDir = dirChanger(dDir);
//     let level=0;
//     let mapping={}
//     mapping[sumChanger(room,sta)]=[level,staDir]
//     function sumChanger(room,cor){////cor can be 'array(2)' or 'number' type value
//         let temp=room[0].length;
//         if(typeof cor==='number'){
//             return [parseInt(cor/temp),cor%temp]
//         }
//         else return cor[0]*temp+cor[1]
//     }
//     function dirChanger(staDir){//staDir should be 'string' type value
//         if(staDir==='up')return 1
//         else if(staDir==='right')return 2
//         else if(staDir==='down')return 3
//         else if(staDir==='left')return 4
//         else if(typeof staDir==='number'){
//             if(staDir===1)return 'up'
//             else if(staDir===2)return 'right'
//             else if(staDir===3)return 'down'
//             else if(staDir===4)return 'left'
//         }
//         else console.log('error of dirChanger()')
//     }
//     function dirCounter(staDir,nextDir){//staDir,nextDir can be 'string' or 'number' type value
//         let [_staDir,_nextDir]=[staDir,nextDir]
//         if (typeof _staDir==='string')_staDir=dirChanger(_staDir)
//         if (typeof _nextDir==='string')_nextDir=dirChanger(_nextDir)
  
//         if(_staDir===_nextDir)return 0;
//         else{
//           let result= Math.abs(_staDir-_nextDir)
//           if(result>2)return 1;
//           else return result
//         }
//     }
//     function indicator(room,_sta,dir){//find opened way [[direction,coordinate]]
//         let sta=_sta
//         if(typeof _sta==='number')sta=sumChanger(room,_sta)
//         let path=[]
//         let [height,width]=[room.length-1,room[0].length-1]
//         if(room[sta[0]][sta[1]]===0){
//             if(sta[0]-1>=0&&room[sta[0]-1][sta[1]]===0)path.push(['up',[sta[0]-1,sta[1]]])
//             if(sta[1]+1<=width&&room[sta[0]][sta[1]+1]===0)path.push(['right',[sta[0],sta[1]+1]])
//             if(sta[0]+1<=height&&room[sta[0]+1][sta[1]]===0)path.push(['down',[sta[0]+1,sta[1]]])
//             if(sta[1]-1>=0&&room[sta[0]][sta[1]-1]===0)path.push(['left',[sta[0],sta[1]-1]])
//         }
//         if(dir){
//             path=[...path.filter(x=>x[0]===dir)]
//             if(path.length)return path[0][1]
//         }
//       return path
//     }
  
  
//     function pathFinder(room,end,endDir,mapping,level){
//         if(mapping[sumChanger(room,end)])
//         return mapping[sumChanger(room,end)][0]+dirCounter(mapping[sumChanger(room,end)][1],endDir)
//         //mapping 에서 현재 level인 모든 key를 가져온다.
//         let nowLevelCor=Object.keys(mapping).filter(x=>mapping[x][0]===level)
//         for(let j=0;j<nowLevelCor.length;j++){
//             let sta=Number(nowLevelCor[j])
//             let cor=sumChanger(room,sta)
//             let que=indicator(room,cor)//다음꺼 대기줄
//             for(let i=0;i<que.length;i++){
//                 if(room[que[i][1][0]][que[i][1][1]]===0&&mapping[que[i][1]]===undefined){
//                     let level2=level
//                     if(que[i][0]===mapping[sta][1])level2+=1
//                     else level2+=1+dirCounter(que[i][0],mapping[sta][1])
//                     let nextIdx= sumChanger(room,que[i][1])
//                     while(1){//직진
//                         if(mapping[nextIdx]===undefined){
//                             mapping[nextIdx]=[level2, que[i][0]]
//                             let nextStep=indicator(room,nextIdx,que[i][0])
//                             if(nextStep.length)nextIdx= sumChanger(room,nextStep)
//                             else {
//                                 break;
//                             }
//                         }
//                         else break;                 
//                     }
//                 }
//             }
//         }
//         return pathFinder(room,end,endDir,mapping,level+1)
//     }
//     return pathFinder(room,end,endDir,mapping,level)
//   };