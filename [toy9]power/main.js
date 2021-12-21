

function power(base, exponent) {
  // todo: 여기에 코드를 작성합니다.
    let sth=1000;
    if (exponent===1)return base%sth
    let half = parseInt(exponent/2)
    let temp=power(base,half)
    
    if (exponent%2===1)return temp*temp*base%sth
    else return temp*temp%sth

}

  base=4
  exponent=20
  //94906249
 console.log( power(base, exponent))

 //result=                                 4**20%1000 이게 목표
//result=                     (4**10%1000)                    *               (4**10%1000)%1000
//result=        (4**5%1000)       *          (4**5%1000)     *    (4**5%1000)        *        (4**5%1000)%1000
//result=(4**2%1000)*(4**2%1000)*(4)*(4**2%1000)*(4**2%1000)*(4)*(4**2%1000)*(4**2%1000)*(4)*(4**2%1000)*(4**2%1000)*(4)%1000
//result= 4*4          *4*4      *4  *4*4       *4*4       *4     *4*4       *4*4       *4    *4* 4       * 4* 4    *4  %1000
