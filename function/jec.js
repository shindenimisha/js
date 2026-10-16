// // javscript execurion context 

// // 1 global ec     this use 
// // 2 function ec 
// //  3 eval ec 

// //  memory creation pahse 
// //  execution phase 
 

// let val1 = 10
// let val2 = 5


// function addnum(num1, num2) {
//     let total = num1 + num2
//     return total
// }

// let result1 = addnum(val1, val2)
// let result2 = addnum(10 , 2)

// 1 global excuetion   this 
// 2 memory phse 
// val1  unedfined 
// val2   indefined 

// addnum  defination 
// result1  udefined 
// result2 undefined 

// 3 excuetion phase 
// val1 = 10
// val2 = 5 
// addnum
//------------| new variable enviroment +
//                      execution phase
//                          |
//                          |
//          ____________    |     ______________________       
//         |                                              |                                            |
//         |                                              |
//         |                                              |  
                         
//     memory phase                                      execution phase
//          val1 undefined                              num 1 = 10
//          val2 undefined                              num2  = 5
//          total undefined                              total = 15