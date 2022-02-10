function browserStack(actions, start) {
    let prev=[]
    let now=start 
    let next=[]
    if(typeof now!=='string')return false
    for(i=0;i<actions.length;i++){
      if (typeof actions[i]==='string'){
          prev.push(now)
          now=actions[i]
          next=[]
      }
      else if (typeof actions[i]==='number'){
        if(actions[i]===-1&&prev.length){
          next.push(now)
          now=prev.pop()
        }
        else if(actions[i]===1&&next.length){
          prev.push(now)
          now=next.pop()
        }
      }
      else console.log('error')
    }
    return [prev,now,next]
  }