// let str='codecodecode'  //이 예제는 4가 나오지만
let str='abbc'            //이 문장은 0이 나온다. 하지만 1이 나오는 문제를 줬어야 코드가 어려워진다.

//접두어 접미어가 아니라 문장내의 아무 위치에 있는 단어중에 일치하는 가장 긴 문자열을 반환한다라는 문제였으면
//100줄 넘어갔다.

const LPS = function (str) {
    if (str.length<2)return 0
    for(let half=parseInt(str.length/2);half>1;half--){
      if(str.slice(0,half)===str.slice(str.length-half)){ 
        //답이 1이 나오게 하기위해서는 if문 안쪽의 slice(0,half)부분의 0이 점차 증게해야한다.
        //현재복잡도는 O(N/2)인데 점차 증가하게 한다면
        //위의 방법으로 접근하면 O((N!)**2) 즉 최대 N의 4제곱이 될것이다.
          return half
          }
      }
    return 0
  }

  console.log(LPS(str))