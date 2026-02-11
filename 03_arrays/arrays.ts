// arrays

// an array with only strings
let myArray1: string[] = ['naruto', 'obito', 'sasuke']
let myNums: number[] = [1, 2, 3]
console.log(myArray1);


// an array with both strings and numbers only
let myArray2: (string | number)[] = [1, 2, 3, 'naruto', 'obito', 'sasuke']
console.log(myArray2);
// performing push method on the given array
myArray2.push('kakashi')
console.log(myArray2);
// performing pop method on the given array
myArray2.pop()
console.log(myArray2);