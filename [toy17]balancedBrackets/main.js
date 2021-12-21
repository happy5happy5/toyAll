let str = '[](){}'


function isOpen(str){
    const openBrackets = ['(', '{', '['] //팩틱 구분은 어떻게함?
    if(openBrackets.indexOf(str)>-1) return true
    else return false
}
function isClose(str){
    const closingBrackets = [')', '}', ']']
    if(closingBrackets.indexOf(str)>-1)return true
    else return false
}


function whatBracket(str){//str='{'
    const roundBrackets = ['(', ')']
    const middleBrackets = ['{', '}']
    const squareBrackets = ['[', ']']
    if(roundBrackets.indexOf(str)>-1)return 'roundBracket'
    else if(middleBrackets.indexOf(str)>-1)return 'middleBracket'
    else if(squareBrackets.indexOf(str)>-1)return 'squareBracket'
    else console.log('what the heck')
}

function fineBrackets(_str){
    let str=_str.split('').filter(x=>x!==',')
    let closeQue=[];
    if(str.length%2===1)return false
    while(str.length){
        let lastIdx=str.length-1
        if(isClose(str[lastIdx]))closeQue.push(str.pop())
        else if(isOpen(str[lastIdx])&&whatBracket(closeQue[closeQue.length-1])===whatBracket(str[lastIdx]) ){
            str.pop()
            closeQue.pop()
        }
        else return false
    }
    return true 
}


console.log(fineBrackets(str))