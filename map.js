const mapOne = new Map()
mapOne.set([2, 4, 6, 8, 10], 'Even Numbers')
mapOne.set([1, 3, 5, 7, 9], 'Old Numbers')
mapOne.set(true, 456)
mapOne.set({ name: 'Faith', age: 33, Nationality: 'Nigerian' }, 'Profile')
// console.log(mapOne);
// console.log(mapOne.get(true));

mapOne.forEach((item) => {
    console.log(item);
    
})