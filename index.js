// Import stylesheets
import './style.css';
import { Stack } from './DS/Custom/stack.js';
import { Queue } from './DS/Custom/queue.js';

const stack = new Stack();
console.log(stack);
stack.push(1);
stack.push(2);
stack.push(3);
stack.print();
console.log(stack.peek());
console.log(stack.isEmpty());

const queue = new Queue();
for (let i = 0; i < 10; i++){ 
  queue.enqueue(i);
}
console.log(queue);
