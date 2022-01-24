// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
// Psuedo code: Im going to start my test first im going to describe here im goign to use sentenceCap, after that i use
// "it" here im going to write wgat i want in return and i want a new array with a sentencew about each person from my previws array with their names capitallized.
//In my expect im going to wtite the outpit that i want.
// describe("sentenceCap", () =>{
// it("returns an array with a sentence about each person with their name capitalized", ()=> {
//   let people = [
//     { name: "ford prefect", occupation: "a hitchhiker" },
//     { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
//     { name: "arthur dent", occupation: "a radio employee" }
//   ]
//   expect(sentenceCap(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
//   })
// })
//RED now i have to make this pass
// b) Create the function that makes the test pass.
//First im going to declare my vatiable sentenceCap and create my function
//I think im going to use map so i can go around my array.
//I think i have to use .split because i want to separete my array and use toUpperCase so i can have my names capitalized.
//im going to use .join and for my return im going to use string interpolation so i can return all my output.


// const sentenceCap =(array) =>{
//   return array.map(object => {
//     let newCase = object.name.split(" ").map(value => value[0].toUpperCase() + value.slice(1)).join(" ")
//     return `${newCase} is ${object.occupation}`
//   })
// }
//So my test fail
// I had trouble with thoi one i got stuck i ask for help but i still cant make it work :(
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
//Im goingn to start describe im going to use remainderDiv, in my "it" im going to write what i want in return.
//After my expectation im going to write the name on my function and the variable that i want to change at the end i write what i want to see as my outcome.

// describe("remainderDiv", ()=>{
//   it("mixed data array and returns an array of only the remainder of the numbers when divided by 3",() =>{
//     expect(remainderDiv(hodgepodge1)).toEqual([ 2, 0, -1, 0 ]),
//     expect(remainderDiv(hodgepodge2)).toEqual([ 2, 1, 1, ])
//     let hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
//     let hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
//   })
// })
//REEEEED :(


//I write this twice because my test keeps telling me that i have an unexpected token.
// describe("remainderDiv", ()=>{
//   it("mixed data array and returns an array of only the remainder of the numbers when divided by 3", ()=>{
//   let hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
//   let hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
//     expect(remainderDiv(hodgepodge1).toEqual([ 2, 0, -1, 0 ]),
//     expect(remainderDiv(hodgepodge2).toEqual([ 2, 1, -1 ])
//  })
// })
// b) Create the function that makes the test pass.
//I start declaring my variable remainderDiv, I want to make a forloop so I can go in the array and just get
// what i want that are the numbers after that i want to set my numbers the remainder or my array to be divided by 3.
// const remainderDiv = (array) => {
//   let divRemain =[]
//   for(let i=0; i < array.length; i++){
//     typeof array[i] === `number` && divRemain.push(array[i]%3)
//   }
//       return divRemain
// }
// My test didnt pass i still dont know where im making the error im going to have to re-do it.
// Expected output: [ 2, 0, -1, 0 ]
// Expected output: [ 2, 1, -1 ]
// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

  describe("cubedArr", () =>{
   it("array of numbers and returns the sum of all the numbers cubed", ()=> {
    let cubeAndSum1 = [2, 3, 4]
    let cubeAndSum2 = [0, 5, 10]
    expect(cubedArr(cubeAndSum1)).toEqual([99]),
    expect(cubedArr(cubeAndSum2)).toEqual([1125])
 })
})
// // b) Create the function that makes the test pass.
//Im going to start declaring my variable cubedArr, im going to try a forloop here as well.
//I want to go throw my array and add al my values after that i want to multiply my total and set a variable to be my answer.

const cubedArr =(array) =>{
  let addCube =0
  for(let i= 0; i < array.length; i++){
    array[i] = array [i]**3 // I try *3*3 first just to try but it didnt work.
    addCube+=array[i]
  }
  return addCube
}


// Today i fail all of them at the begining i thougth it was an easy one i startet with this one but i got stuck again on a syntax error and coudent pass that.
//I will be returning to fix all my errors. :(
// Expected output: 99
// Expected output: 1125
