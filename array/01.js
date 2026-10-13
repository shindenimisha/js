const arr = [1, 5, 9, 8, 6]
console.log(arr[0],arr[1],arr[3],arr[2],arr[4])

const arr1 = new Array(1, 6, 8, 39, 4)
console.log(arr1[0], arr1[1], arr1[5], arr1[3], arr1[4])

console.log(arr)
console.log(arr1)

//  array methods //

// arr.push(1)
// console.log(arr)
// arr.pop()
// console.log(arr)

// arr.shift()
// console.log(arr)

arr.unshift(10, 1)
console.log(arr.includes(10))
console.log(arr.indexOf(3))

const newarr = arr.join()
console.log(arr)
console.log(newarr)
console.log(typeof newarr)