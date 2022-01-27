//elinapark0818
let dfs = function (node) {
    // TODO: 여기에 코드를 작성합니다.
    // 노드를 담아서
    let values = [node.value];
    // 자식노드를 돌면서 노드를 합친다
    node.children.forEach((el) => {
      values = values.concat(dfs(el))
    })
    // 합쳐진 노드를 리턴
    return values
  };
  
  // 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
    let Node = function (value) {
      // 노드의 값에 접근하려면 node.value
    this.value = value;
    // 자식노드가 담긴 배열
    this.children = [];
  };
  
  // 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
  // membership check(중복 확인)를 따로 하지 않습니다.
  Node.prototype.addChild = function (child) {
    // 자식노드는 children에 추가된다
    this.children.push(child);
    return child;
  };