let places=[[0, 100], [3, 4], [58, 34], [22, 35], [-151, -132], [130, -33]]
  
// const deepCopy=(arr2D)=>JSON.parse(JSON.stringify(arr2D));

function calculateDistance(p1, p2) {
    const yDiffSquared = Math.pow(p2[0] - p1[0], 2);
    const xDiffSquared = Math.pow(p2[1] - p1[1], 2);
    const dist = Math.sqrt(yDiffSquared + xDiffSquared);
    return Math.floor(dist * 100);
}

Array.prototype.mergeSort = function(cal=(a,b)=>a-b){
    let arr=this;
    function downtier(arr){
        if(arr.length<=1)return arr
        let half=parseInt(arr.length/2)
        return uptier(downtier(arr.slice(0,half)),downtier(arr.slice(half)))
    }
    function uptier(left,right,arr=[]){
        while(left.length&&right.length){
        if(cal(left[0],right[0])<0)arr.push(left.shift())
        else if(cal(left[0],right[0])>0)arr.push(right.shift())
        else{
            arr.push(left.shift())
            arr.push(right.shift())
        }}
        return [...arr,...left,...right]
    }
    return downtier(arr)
}

// places=places.mergeSort((a,b)=>a[0]-b[0]?a[0]-b[0]:a[1]-b[1])

//한점을 주었을때 방문하지 않은 곳중에서 가장 가까운 점을 찾는다.
//memo[`${x&y}`]=true
function saler(places){
    const finder=(oneP,places,memo)=>{//가장 짧은 길이를 반환
        let min=Number.MAX_SAFE_INTEGER
        let next
        for(let i=0;i<places.length;i++){
            if(memo[`${places[i][0]}&${places[i][1]}`]){
                console.log('do nothing')
            }
            else{
                let temp=calculateDistance(oneP,places[i])
                if(temp){
                    if(min>temp){
                        min=temp
                        next=i
                    }
                }
            }
        }
        memo[`${places[next][0]}&${places[next][1]}`]=1
        return [min,next]
    }
    let result=Number.MAX_SAFE_INTEGER
    for(let i=0;i<places.length;i++){
        let memo={}
        let oneP=places[i]
        let sum=0
        memo[`${oneP[0]}&${oneP[1]}`]=1
        while(Object.keys(memo).length!==places.length){
            let temp=finder(oneP,places,memo)
            oneP=places[temp[1]]
            sum+=temp[0]
        }
        if(result>sum)result=sum
    }
    return result
}
// debugger
console.log(saler(places))