class Queue {
    constructor() {
      this.storage = {};
      this.front = 0;
      this.rear = 0;
    }
    size() {
      return Object.keys(this.storage).length
    }
      // 큐에 데이터를 추가 할 수 있어야 합니다.
    enqueue(element) {
      this.storage[this.rear] = element;
      this.rear += 1;
    }
      // 가장 먼저 추가된 데이터가 가장 먼저 추출되어야 합니다.
    dequeue() {
      // 빈 큐에 dequeue 연산을 적용해도 에러가 발생하지 않아야 합니다
      if (Object.keys(this.storage).length===0) {
        this.storage = {};
        return {};
      }
      const result = this.storage[this.front];
      delete this.storage[this.front];
      this.front += 1;
      return result;
    }
  }