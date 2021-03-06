// ----- Largest Stack -----

/*
  Use the given Stack class to implement a new MaxStack class that has all 
  the same methods as the base Stack class, along with a getMax method that 
  returns the max value of the MaxStack in O(1) time. getMax should not 
  remove the item.
*/

// - General Pseudo Code -

// copy Stack prototype into the new MaxStack class
// add max property
// replace push and pop methods to use new max property
  // track max property as items are pushed and popped
// add getMax method that will return max property


// - Method Pseudo Code -

// MaxStack.push(item)
  // this.items.push(item);
  // if (this.max < item) this.max = item;

// MaxStack.pop()
  // const item = null;
  // if (this.items.length) item = this.items.pop();
  // if (item && item === this.max) this.max = Math.max(this.items);
  // return item;

// MaxStack.getMax()
  // return this.max;


// - Possible Improvements -
  // add getter and setter attributes
  // normalize I/O


class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.items.length) {
      return this.items.pop();
    }
    return null;
  }

  peek() {
    if (this.items.length) {
      return this.items[this.items.length-1];
    }
    return null;
  }
}


class MaxStack extends Stack {
  constructor() {
    super();

    this.max = null;
  }

  push(item) {
    this.items.push(item);

    // Set max if null or item is greater
    if (!this.max || this.max < item) this.max = item;
  }

  pop() {
    let item = null;

    if (this.items.length) item = this.items.pop();
    console.log('INSIDE METHOD  ' + this.items);
    // If item was popped and is equal to max then find new max
    if (item && item === this.max) this.max = Math.max(this.items);

    return item;
  }

  getMax() {
    return this.max;
  }
}


// Test Cases
const myMaxStack = new MaxStack();

myMaxStack.push(3);
myMaxStack.push(8);
myMaxStack.push(2);
myMaxStack.push(5);
myMaxStack.push(1);

console.log(myMaxStack.getMax());   // => 8
console.log(myMaxStack.peek());     // => 1

myMaxStack.pop();

console.log(myMaxStack.getMax());   // => 8

myMaxStack.push(999);

console.log(myMaxStack.getMax());   // => 999
