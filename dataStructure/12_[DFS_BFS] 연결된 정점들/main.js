function connectedVertices(edges) {
    // TODO: 여기에 코드를 작성합니다.
    function compareArr(a,b){
        //배열 2개 입력받아서 같은 인자가있는 b의 인덱스 반환
        //a는 1차원배열 b는 2차원배열
        b=b.filter(x=>x)
        let index=[]
        let bCopy=[...b]
    
        for(let i=0;i<b.length;i++){
        if([].concat(...a.map(x=>b[i].map(y=>x===y))).filter(x=>x===true).length) index.push(i);
        }
        for(let i=0;i<index.length;i++){
            a.push(...[].concat(...b[index[i]]))
            delete b[index[i]]
        }
        b=b.filter(Array)
        if(`${bCopy}`===`${b}`)return [a,b]
        else return compareArr(a,b)
    }
    
    
    let count=1
    let b=[...edges]
    let a=[].concat(...b.splice(0,1))
    let sth=compareArr(a,b)
    b=sth[1]
    while (sth[1].length){
        b=sth[1]
        a=[].concat(...b.splice(0,1))
        sth=compareArr(a,b)
        count++
    }
      return count
    }