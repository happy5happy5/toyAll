//happy5happy5

const powerSet = function (str) {
    // TODO: 여기에 코드를 작성합니다.
    
    let result=''
    str=str.split('').sort().join('')
  
    for(let i=0;i<str.length;i++)
      if(result.indexOf(str[i])===-1)result+=str[i]
  
    function yamyamlist(str){
        let result=[[]]
          for(let i=0;i<str.length;i++){
            let temp=result.slice()
            for(let j=0;j<temp.length;j++)
            temp[j]=temp[j].concat(str[i])
            result=result.concat(temp)
          }
          return result
        }
  
    return yamyamlist(result).map(x=>x.join('')).sort()
      
  };