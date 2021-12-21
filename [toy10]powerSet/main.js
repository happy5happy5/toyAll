function splitOne(arrOrigin) {

    if (arrOrigin.length === 1) return arrOrigin[0]
    for (let i = 0; i < arrOrigin.length; i++) {
        let arr = arrOrigin
        arr = arr.split('')
        arr.splice(i, 1)
        arr = arr.join('')
        emptyBox.push(arr)
        splitOne(arr)
    }

    return emptyBox
}


let emptyBox = []
arr = 'abcd'

splitOne(arr)
emptyBox.push(arr)
emptyBox.push('')

let result = []

for (let i = 0; i < emptyBox.length; i++) {
    if (result.indexOf(emptyBox[i]) === -1) result.push(emptyBox[i])
}

result = result.map(x => x.split('').sort().join('')).sort()











// let arr2 = 'abddcdddd'
// let arr = []
// arr2 = arr2.split('')
// for (let i = 0; i < arr2.length; i++) {
//     if (arr.indexOf(arr2[i]) === -1) arr.push(arr2[i])
// }
// arr = arr.map(x => x.split('').sort().join('')).sort()



// arrOrigin = [...arr]
// console.log(arrOrigin)

// let strBox = [];
// let strBoxResult=[];


// for(let j=0;j<arrOrigin.length+1;j++){
//     for (let i = 0; i < arrOrigin.length; i++) {
//         arr=[...arrOrigin];
//         strBox.push(arr.splice(i,j))
//     }
// }

// for(let i=0; i<strBox.length;i++){
//     strBox[i]=strBox[i].join('');
// }

// for (let i = 0; i < strBox.length; i++) {
//     if (strBoxResult.indexOf(strBox[i]) === -1) strBoxResult.push(strBox[i])
// }



// console.log(strBoxResult)
//전체 렉시컬 정렬