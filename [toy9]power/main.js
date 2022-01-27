//happy5happy5
function power(base, exponent,god=94906249) {
  // todo: 여기에 코드를 작성합니다.
  if(exponent===0)return 1
  let half = parseInt(exponent/2)
  let temp=power(base,half,god||94906249)
  if(exponent%2)return(temp*temp%god)*base%god
  return temp*temp%god
}


//마지막 테스트 케이스 문제
console.log(power(3,2910172))


//콘솔을 찍어보면 모두 똑같다.
console.log('Original Answer is=',power(36,10,1234))
console.log((36**10)%1234)
console.log((36**5) * (36**5)%1234)
console.log((36**2)*(36**2)%1234 * (36**1)%1234 * (36**5)%1234)
console.log((36**1)*(36**1)%1234 * (36**1)*(36**1)%1234 * (36**1)%1234 * (36**5)%1234)
