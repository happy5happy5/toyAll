
let [str1,str2]=['codestates', 'c1o1d1e1s1t1a1t1e1s'].map(x=>x.split(''))

function lcs(str1,str2){
    let Pindex=0;
    let temp1=[]
    for(let i=0;i<str1.length;i++){
        let Findex=str2.indexOf(str1[i],Pindex)
        if(Findex!==-1&&Findex>=Pindex){
            temp1.push(str2[Findex])
            Pindex=Findex+1
        }
        else{

        }
    }
    return temp1

}
console.log( lcs(str1,str2))




// const LCS = function (_str1, _str2) {

//     let [str1,str2]=[_str1,_str2].map(x=>x.split(''))
    
//     function lcs(str1,str2){
//         let Pindex=0;
//         let temp1=[]
//         for(let i=0;i<str1.length;i++){
//             let Findex=str2.indexOf(str1[i],Pindex)
//             if(Findex!==-1&&Findex>=Pindex){
//                 temp1.push(str2[Findex])
//                 Pindex=Findex+1
//             }
//             else{
    
//             }
//         }
//         return temp1
    
//     }
//     return lcs(str1,str2).length
    
//     };