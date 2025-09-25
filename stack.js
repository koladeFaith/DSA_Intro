// First in last out
class Stack {
    constructor() {
        this.all = []
    }
    print() {
        return this.all.length === 0 ? "Sorry nothing yet in the stack" : this.all
    }
    length() {
        return this.all.length === 0 ? "Nothing yet in to count, stack is empty" : `${this.all.length} item(s) in the stack`
    }
    add(item) {
        this.all.push(item)
    }
    remove(item) {
        return this.all.length === 0 ? "The stack is empty" : this.all.pop(item)
    }
    peekFirst() {
        if (this.all.length === 0) {
            return "Empty stack, nothing to peek"
        }
        else { return this.all.length === 1 ? `Only one item: ${this.all[0]} in the stack` : this.all[0] }
    }
    peekLast() {
        if (this.all.length === 0) {
            return "Empty stack, nothing to peek at the end"
        }
        else { return this.all.length === 1 ? `Only one item: ${this.all} in the stack` : this.all[this.all.length - 1] }
    }
    isEmpty() {
        return this.all.length < 1 ? true : false
    }
}
const stackOne = new Stack()
stackOne.add('Pepper')
stackOne.add('Yam')
stackOne.add('Onions')
stackOne.add('Ginger')
// console.log(stackOne.print());
// console.log(stackOne.length());
// console.log(stackOne.remove())
console.log(stackOne.peekFirst());
console.log(stackOne.peekLast());
console.log(stackOne.isEmpty());

