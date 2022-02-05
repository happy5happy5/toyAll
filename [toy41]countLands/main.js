//happy5happy5
const countIslands = function (grid) {
    // TODO: 여기에 코드를 작성합니다.
    function copyLand(grid){//맵복사
      let _grid=Array(grid.length)
      .fill(0)
      .map(x=>x=Array(grid[0].length).fill(0))
      for(let i=0;i<grid.length;i++)
      for(let j=0;j<grid[0].length;j++)
      if(grid[i][j]==='1')_grid[i][j]=1;
      return _grid
    }
    let seaMap=copyLand(grid); 
  
    function ruler(seaMap,i,j,landIdx){//같은 섬 색칠
        if(i>=seaMap.length&&j>=seaMap[0].length)return false
        seaMap[i][j]=landIdx
        if(i<seaMap.length-1&&seaMap[i+1][j]===1)ruler(seaMap,i+1,j,landIdx)
        if(i>0&&seaMap[i-1][j]===1)ruler(seaMap,i-1,j,landIdx)
        if(j<seaMap[0].length-1&&seaMap[i][j+1]===1)ruler(seaMap,i,j+1,landIdx)
        if(j>0&&seaMap[i][j-1]===1)ruler(seaMap,i,j-1,landIdx)
    }
  
    function findLand(seaMap,landIdx=2){//다음섬 탐색
        let temp=[].concat(...seaMap).indexOf(1)
        if(temp===-1)return landIdx-2
        let i=parseInt(temp/seaMap[0].length)
        let j=temp%seaMap[0].length
        ruler(seaMap,i,j,landIdx)
        return findLand(seaMap,landIdx+1)
    }
  
  return findLand(seaMap)
  };
  