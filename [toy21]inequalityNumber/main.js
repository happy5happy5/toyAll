let sign = '< > > <'
sign = sign.split(' ')
result=+maxList(sign)- minList(sign)
console.log(result)

function minList(sign){
    let queMin = []
    for (let i = 9; i >= 9 - sign.length; i--) {
        queMin.push(9 - i)
    }
    let queNum = [] //완성품
    let waiting = [] //대기줄
    
    waiting.push(queMin[0])
    for (let i = 0, j = 0, m = 0; i < sign.length; i++) {
        if (sign[i] === '<') {
            queNum.push(...waiting)
            ++m
            j = m
            waiting = []
            waiting.push(queMin[j])
    
        } else if (sign[i] === '>') {
            waiting = waiting.map(x => x + 1)
                ++m
            waiting.push(queMin[j])
        }
    }
    queNum.push(...waiting)
    return queNum.join('')
}

function maxList(sign) {
    let queMax = []
    for (let i = 9; i >= 9 - sign.length; i--) {
        queMax.push(i)
    }
    let queNum = [] //완성품
    let waiting = [] //대기줄
    waiting.push(queMax[0])
    for (let i = 0, j = 0, m = 0; i < sign.length; i++) {
        if (sign[i] === '<') {
            waiting = waiting.map(x => x - 1)
                ++m
            waiting.push(queMax[j])
        } else if (sign[i] === '>') {
            queNum.push(...waiting)
                ++m
            j = m
            waiting = []
            waiting.push(queMax[j])
        }
    }
    queNum.push(...waiting)
    return queNum.join('')
}
