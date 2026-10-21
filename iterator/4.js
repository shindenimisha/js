const coding = ["js", "ruby", "java", "python"]

// coding.forEach(function (item) {
//     console.log(item)
// } )

// coding.forEach((item) => {
//     console.log(item)
// })


// function printme(item) {
//     console.log(item)
// }
// coding.forEach(printme)

// coding.forEach((item, index, arr) => {
//     console.log(item , index , arr)
// })

const mycoding = [{
    languagename :" javascript",
    filename : " js"
},
    {
        languagename: " java",
        filename: " java"
    }, 
    {
        languagename: " python",
        filename: " py"
    },

    {
        languagename: " c++",
        filename: " cpp"
    }
]

mycoding.forEach((item) => {
    console.log(item.languagename)
})