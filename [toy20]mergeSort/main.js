//happy5happy5
//mergeSort last
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