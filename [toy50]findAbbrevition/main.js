let [strA,strB]=['AbcDE', 'ABDE'].map(x=>x.split(''))
//config 
//1.1 소문자 바꿔보니 문자열이 똑같기는 하다
//2.1 길이가 1차이가 나서 지우면 비슷해지긴 하겠다.
// strA=strA.split('')
// strB=strB.split('')
console.log(strA,strB)


if(strA.toLocaleLowerCase===strB.toLocaleLowerCase){
    
}
if(strA.length-1===strB.length){

}

function similarityShape(strA,strB){
    let half=strA.length
    let left1=strA.slice(0,half)
    let left2=strA.slice(0,half)
    let right1=strA.slice(half)
    let right2=strA.slice(half)
    let temp1=`${left1}`===`${left2}`
    let temp2=`${right1}`===`${right2}`
    if(temp1||temp2){
        
    }
    else return false

}

function similarityLength(strA,strB){

}