//Eventloops:

// function cb(){
//     console.log("after timeout");
// }
// console.log("me first");

// function print(){
//     console.log("me second");
// }
// setTimeout(cb,2000)
// print()
// console.log("me third");

// function cb(){
//     console.log("after timeout");
// }
// console.log("me first");

// function print(){
//     console.log("me second");
// }
// setTimeout(cb,0)//it will come after the all code execution is done.
// print()
// console.log("me third");
//settimeout cb function  executes only after the sychronous code is executed
//settimeout funnction pushed to the web api because settimeout is not js function .it will goto browser and executes
//Event-Loop:is a sort of monitor ,it decides the cb function will move to callstack or not.
//callback-que:is first in first out.,when set timeout hits 0 sec than it will went to cb que.

// function printAlphabtes(){
//     console.log("a");
//     console.log("b");
//     console.log("c");
//     console.log("d");
// }
// printAlphabtes()

//this code is becoming big to avoid this:below code will be useed.
// function printAlphabtes(){
//     setTimeout(()=>{
//         console.log("a");
//     },1000);
//     setTimeout(()=>{
//         console.log("b");
//     },2000)
//     setTimeout(()=>{
//         console.log("c");
//     },3000)
// }
// printAlphabtes()

//this is also taking big code.to avoid this :
// function printAlphabtes(letter,delay){
//     setTimeout(()=>{
//         console.log(letter);
//     },delay)
// }
// printAlphabtes("a",1000)
// printAlphabtes("b",2000)
// printAlphabtes("c",3000)
// printAlphabtes("d",4000)
// printAlphabtes("e",5000)

//this is called callback hell:it is shaped in a triagular shape:to solve this problem we will use promises.
// function printVariable(){
//     setTimeout(()=>{
//         console.log("A");
//         setTimeout(()=>{
//             console.log("B");
//             setTimeout(()=>{
//                 console.log("C");
//                 setTimeout(()=>{
//                     console.log("D");
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// }
// printVariable()

//To avoid callback function we will use promises:

// let val = new Promise((resolve,reject)=>{//assign new promise object to pr.
//     setTimeout(()=>{
//         console.log("me first")
//         // resolve() // .then will be used when the data resolved
//         reject()   //.catch will be used when the data rejected
//                     //.finally works in both cases.
//         // resolve()  //if we have not used resolve or reject.automatically it wll take peding object
//     },2000)
// })
// val.then(()=>{console.log("me confirm")}).catch(()=>{console.log("me second")}).finally(()=>{console.log("works in both cases")})

// let dog = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("ordred pizza")
//         resolve()
//     },2000)
// })
// console.log("go and order");
// dog.then(()=>{console.log("placed ur order")}).catch((data)=>{console.log("ur order is not placed")}).finally(()=>{console.log("your always welcome");})

//to access the data inisde the resolve:

// let dog = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("order pizza");
//         reject("ur order not placed")//inside the data can be accessed by using variable(data,dog,etc) inside the cb  function then
//         reject("ur order not placed")//inside the data can be accessed by using variable (data,dog,etc)inside the cb function catch
//     },2000)
// })
// console.log("go to website");
// dog.then((data)=>{console.log(data)}).catch((data)=>{console.log(data)}).finally(()=>{console.log("nothing is here")})

// function printLetter(num){
// let pr = new Promise((resolve,reject)=>{
//     if(num%2===0){
//         resolve("condition satisfied,it is even number")
//     }
//     else{
//         reject("condition not satisfied,number is odd number")
//     }

// })
// return pr;

// }
// printLetter(2).then((call)=>{console.log(call)}).catch((call)=>{console.log(call)})

//or:

// function printLetter(num){
//     return new Promise((resolve,reject)=>{
//         if(num%2===0){
//             resolve("condition satisfied,it is even number")
//         }
//         else{
//             reject("condition not satisfied,number is odd number")
//         }
    
//     })
    
    
//     }
//      printLetter(2).then((call)=>{console.log(call)}).catch((call)=>{console.log(call)})


// function printLetter(alphabet){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log(alphabet);
//             res()
//         },2000)
//     })
// }
// printLetter("A").then(()=>{return printLetter("B")}).then(()=>{return printLetter("C")})
// .then(()=>{return printLetter("D")})

            //or:

    function printLetter(alphabet){
        return new Promise((res,rej)=>{
       setTimeout(()=>{
           console.log(alphabet);
           res()
           },2000)
        })
    }
    printLetter("A").then(()=> printLetter("B"))
    .then(() => printLetter("C"))
    .then(() => printLetter("D"))         

