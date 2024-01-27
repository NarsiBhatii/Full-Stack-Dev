const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map((n) => {
//     return n + 10
// })

// console.log(newNums)

myNumbers.map((item, index) => {
    console.log(`${item} is on index no. : ${index}`)
}) 