class MyQueue {
  constructor() {
    this.inputStack = [];
    this.outputStack = [];
  }

  push(x) {
    this.inputStack.push(x);
  }

  pop() {
    if (this.outputStack.length === 0) {
      while (this.inputStack.length > 0) {
        this.outputStack.push(this.inputStack.pop());
      }
    }
    return this.outputStack.pop();
  }

  peek() {
    if (this.outputStack.length === 0) {
      while (this.inputStack.length > 0) {
        this.outputStack.push(this.inputStack.pop());
      }
    }
    return this.outputStack[this.outputStack.length - 1];
  }

  empty() {
    return this.inputStack.length === 0 && this.outputStack.length === 0;
  }
}

// Example usage:

const myQueue = new MyQueue();
myQueue.push(1);
myQueue.push(2);

console.log(myQueue.peek());
console.log(myQueue.pop());
console.log(myQueue.empty());
