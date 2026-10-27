const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// const newnums = mynums.filter((num) => num > 4)
// console.log(newnums);

// const newnums = []

// mynums.forEach((num) => {
//     if (num > 4) {
//         newnums.push(num)
//     }
// })
// console.log(newnums)

// const newbook = books.filter((bk) => bk.genere === "histroey") 

// newbook = books.filter((bk) => { return bk.publish >= 2000  && bk.genere ==="hostrory"})
// console.log(newbook)

// const newnums = mynums.map((num) => num + 10)

// const newnums = mynums.map( (nums) => {return  nums +10}) 


//  const newnums = mynums.map( (num) => num * 10).map( (num) => num + 1).filter ((num) => num >= 40 )

// console.log(newnums)


//  const mytotal = mynums.reduce(function (acc , curval) {
//      console.log(`acc : ${acc} and curval :${curval}`)
//      return acc + curval
//  } , 3)


const mytotal = mynums.reduce (( acc, curr) => acc+curr , 3)
console.log(mytotal)
 
const shopping = [
    {
        itemname: "cs course",
        price : 199
    },
     
        {
            itemname: "py course",
            price: 2000
        },
        
            {
                itemname: " js course",
                price: 4000
            },
           
                {
                    itemname: "java course",
                    price: 5000
                },
]

const topay = shopping.reduce((acc, item) => acc + item.price, 0)
 console.log(topay)