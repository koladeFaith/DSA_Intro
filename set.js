const setOne = new Set()
setOne.add('Mango')
setOne.add('Fish')
setOne.add('Leaf')
setOne.delete("Mango")
console.log(setOne.has(35))
console.log(setOne.size);

// setOne.clear()
// console.log(setOne);
for (const item of setOne) {
    console.log(item);

}