//happy5happy5
const balancedBrackets = function (str) {
  
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
        else console.log('I dont know what it is')
    }
    function fineBrackets(_str){//앞쪽부터 하지말고 뒤쪽부터해서 컴터 편하게하자
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
  
  
    return fineBrackets(str)
  };
  
//elinapark0818
  const balancedBrackets = function (str) {
    // TODO: 여기에 코드를 작성합니다.
    const stack = [];
    // * 객체 (키값 쌍으로)로 괄호들을 넣어준다
    let brackets = { "(": ")", "{": "}", "[": "]" };
    // * 닫는 괄호
    let close = ")}]";
  
    // ! 예시 str = ' [ ( ] { ) } '
    // * str을 요소들을 하나씩 확인하면서
    for (let i = 0; i < str.length; i++) {
      // * 먼저, 여는 괄호 로 확인되면 스택에 추가
      if (str[i] in brackets) {
        stack.push(str[i]); // ! stack =  "[", "("
      }
      // * 닫는 괄호라면
      // ! str[i] = "]"
      else if (close.includes(str[i])) {
        // todo: 여는 괄호가 먼저있고, 닫는괄호가 나중에 있어야 한다
        // * 스택에 마지막 요소를 빼서(여는 괄호들이 될테다.)
        // ! 닫는 괄호가 들어온다면
        let tail = stack.pop(); // ! tail = "("
        // * 해당하는 닫는 괄호를 head에 할당
        let head = brackets[tail]; // ! head = ")"
        // ! head에 여는 괄호가 들어가게 된다
        if (head !== str[i]) {
          // ! ")" !== "]"
          return false;
        }
      }
    }
    // * 스택에 남은게 있다면(짝이없는 괄호가 남음) false
    return !stack.length;
  };