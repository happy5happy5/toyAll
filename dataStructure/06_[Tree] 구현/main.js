class Tree {
    constructor(value) {
          // constructor로 만든 객체는 트리의 Node가 됩니다.
      this.value = value;
      this.children = [];
    }
  
      // 트리의 삽입 메서드를 만듭니다.
    insertNode(value) {
          // 값이 어떤 이름으로 만들어지고 어느 위치에 붙는지 떠올리는 것이 중요합니다.
          // TODO: 트리에 붙게 될 childNode를 만들고, children에 넣어야 합니다.
      const childNode = new Tree(value);
      this.children.push(childNode);
    }
  
      // 트리 안에 해당 값이 포함되어 있는지 확인하는 메서드를 만듭니다.
    contains(value) {
          // TODO: 값이 포함되어 있다면 true를 반환하세요. 
      if (this.value===value) {
        return true;
      }
          // TODO: 값을 찾을 때까지 children 배열을 순회하며 childNode를 탐색하세요.
      for(let i=0;i<this.children.length;i++){
        const childNode=this.children[i]
        if(childNode.contains(value))return true
      }
      
          // 전부 탐색했음에도 불구하고 찾지 못했다면 false를 반환합니다.
      return false;
    }
  }