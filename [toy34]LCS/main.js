//happy5happy5
const LCS = function (_str1, _str2) {
    let [str1,str2]=[_str1, _str2].map(x=>x.split(''))
    
    let memo=Array(str1.length).fill(0).map(_=>Array(str2.length).fill(false))
    
    //memo[i][j]=str1 i번째와 str2 j번째에서의 답을 구한다.
    
    str1.forEach((x,i)=>str2.forEach((y,j)=>x===y?memo[i][j]=true:undefined))//que를 memo에 저장한다.
    
    function lcs(str1,str2){
        let temp=[].concat(...memo).indexOf(true)
        if(temp===-1)return 'done'
        let i=parseInt(temp/str2.length)
        let j=temp%str2.length
        memo[i][j]=finder(str1.slice(i),str2.slice(j))
        lcs(str1,str2)
    }
    
    function finder(str1,str2){
        let count=0
        for(let i=0,idx=0;i<str1.length;i++){
            let temp=str2.indexOf(str1[i],idx)
            if(temp>-1){
                count++
                idx=temp+1
            }
        }
        return count
    }
    lcs(str1,str2)
    return [].concat(...memo).filter(x=>x!==false).reduce((a,b)=>Math.max(a,b))
    };
    