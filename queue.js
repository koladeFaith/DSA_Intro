// First in first out
class Queue {
    constructor() {
        this.queue = []
    }
    print() {
        return this.queue.length === 0 ? "Nothing in the Queue" : this.queue
    }
    enqueue(item) {
        this.queue.push(item)
    }
    // dequeue() {
    //     this.queue.length === 0 ? console.log("the queue is empty, nothing to dequeue") : this.queue.shift();

    // }
    // front() {
    //     if (this.queue.length === 0) {
    //         return "The queue is empty"
    //     } else {
    //         return this.queue.length === 1 ? "Only one item is in the queue" : this.queue[0]
    //     }
    // }
    // end() {
    //     if (this.queue.length === 0) {
    //         return "The queue is empty"
    //     }
    //     else { return this.queue.length === 0 ? "Only one item is in the queue" : this.queue[this.queue.length - 1] }
    // }
    // isEmpty() {
    //     return this.queue.length < 1 ? true : false
    // }
}
const myQueue = new Queue()
myQueue.enqueue("Weed");
myQueue.enqueue("Meat");
myQueue.enqueue("Rice");
// myQueue.dequeue();
console.log(myQueue.front());
console.log(myQueue.end());
console.log(myQueue.isEmpty());
console.log(myQueue.print());

