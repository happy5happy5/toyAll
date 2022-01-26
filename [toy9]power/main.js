//happy5happy5
function power(base, exponent) {
  // todo: 여기에 코드를 작성합니다.
  const god=94906249
  if(exponent===0)return 1
  let half = parseInt(exponent/2)
  let temp=power(base,half)
  if(exponent%2)return(temp*temp%god)*base%god
  return temp*temp%god
}
  base=3
  exponent=2910172

  console.log(power(base,exponent))
  console.log(power2(base,exponent))
  // 29773085
  //94906249
  // debugger
  // console.log( power(base, exponent))

 //result=                                 4**20%1000 이게 목표
//result=                     (4**10%1000)                    *               (4**10%1000)%1000
//result=        (4**5%1000)       *          (4**5%1000)     *    (4**5%1000)        *        (4**5%1000)%1000
//result=(4**2%1000)*(4**2%1000)*(4)*(4**2%1000)*(4**2%1000)*(4)*(4**2%1000)*(4**2%1000)*(4)*(4**2%1000)*(4**2%1000)*(4)%1000
//result= 4*4          *4*4      *4  *4*4       *4*4       *4     *4*4       *4*4       *4    *4* 4       * 4* 4    *4  %1000


// console.log((36**10)%1234)
// console.log((36**5)%1234 * (36**5)%1234)
// console.log((36**2)%1234*(36**2)%1234*(36**1)%1234 * (36**5)%1234)
// console.log((36**1)%1234 * (36**1)%1234 * (36**1)%1234 * (36**1)%1234 * (36**1)%1234 * (36**5)%1234)
