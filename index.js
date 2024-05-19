// alert('Welcome to my page')

// // Variables are way to store data

// let visitorName = prompt('What is your name')

// alert("Welcome " +  visitorName)

// // let hasEaten = confirm('Have you eaten today?')
// let hasEaten = prompt('Have you eaten today?')

// console.log(hasEaten)

// console.log(visitorName)

// let a = 10
// a++
// console.log(a)
// let a = 10
// let b = a
// let c = b
// console.log(c)
// let d = 10
// let e = 11
// d +=e
// console.log(d)

// function decodeColor(code){

//     switch(code){
//         case 1:
//             console.log("this is blue");
//             break;
//         case 2637:
//             console.log('tis is red')
//             break;
//     }
// }
// console.log(1)
// console.log(2)
// let age = 25;
// let year =  2019;

// console.log(age, year);

// age= 30;
// console.log(age);

// const points = 100;

// console.log(points);

// points=50
// console.log(points)

// console.log('Lexicon');

// let email = 'lexicon@gamil.com'
// console.log(email);

// // string concatenation
// let firstName= 'lexicon';
// let lastName= 'Iyiola';

// let fullName = firstName + " " + lastName;

// console.log(fullName)

// // // getting characters
// console.log(fullName[0]);

// // // string length
// console.log(fullName.length);

// // // string methods
// console.log(fullName.toUpperCase());

// let result = fullName.toLowerCase();
// console.log(result)

// let index = email.indexOf('@')
// console.log(index)

//COMMON STRING METHODS

// let email = 'lexcion@the.co.us';

// // let result = email.lastIndexOf('n')

// //let result = email.slice(0,5)

// // let result = email.substr(4, 10)

// // let result = email.replace('l','w')

// let result = email.replace()

// console.log(result)

let radius = 10;

const pi = 3.14;

// console.log(radius, pi)

//math operators +,-,*,/,**,%

// console.log(10/2);

// let result = radius % 3;
// let result = pi * radius **2;
// console.log(result)

//order of operation -B I D M A S

// let result = 5 * (10-3)**2;
// console.log(result)

// let like = 10;
// like = like + 1;
// like++;
// like--;

// like+= 10;

// like-+ 5;
// console.log(like)

// console.log(like)

//temeplate strings
//This inject varibles into te string without having to exit out and using the plus sign to concatenate them;
// const title = 'Best reads of 2019';
// const author = 'mario';
// const likes = 30;

// let result = `The blog called ${title}  by ${author} has ${likes} likes`;
// console.log(result)

//creating html templates
// let html = `
// <h2> ${title}</h2>
// <p>By ${author}</p>
// <span> This blog has ${likes} likes</span>
// `;

// console.log(html)

//ARRAYS
//WE typically use arrays  to store collections of things in like a collection of strings or numbers

// let lexicon= ['Ayo','iyiola','jack'];
// console.log(lexicon[1])

//How to override a value in an Array
// lexicon[1] = 'ola'
// console.log(lexicon)

// console.log(lexicon.length)

//array methods
//join
// let result = lexicon .join(';')

//indexOf
// let result = lexicon.indexOf('Ayo')

//concat this is you to add a new array into and array you can load of arrays with the concat array
// let result =lexicon.concat(['ken','crystal'])

//push
// let result = lexicon.push('ken')

//pop
// let result = lexicon.pop
// console.log(lexicon)

//type conversion
// let score = '100';

// score = Number(score)

// console.log(score + 1)

// console.log(typeof score)

//CONTROL FLOW

//For  loops
// for( let i = 0; i < 5; i++){
//     console.log('in loop', i)
// }

// console.log('loop finished')

// const names = ['shaun', 'mario', 'lexi'];
// for( let i = 0; i < names.length; i++){
//     // console.log('in loop', i)
//     // console.log(names[i]);

//     let html = ` <div>${names}</div>`;
//     console.log(html)
// }

//while loops
//In a while loop we don't intialise a variable in the the while loop parentheses only the condition can be kept in the parentheses on like the for loop
//  let i = 0
//  const names = ['shaun', 'mario', 'lexi'];
//  while(  i < names.length){
//     // console.log('in loop: ', i)
//     console.log(names[i]);
// i++
//  }

//Do while loop
//  let i = 5
// do{
//     console.log('val of i is:', i);
//     i++
// }
// while(i < 5)

// console.log(any)
// let i = 5
// do{
//   console.log('val of i is:', i);
//    i++
//  }while(if < 5);

//Conditional statement

//if statements
// const age = 25;
// if(age > 20){
//   console.log('you are over 20 years old')
// }

// const lexicon = ['lexico', 'ma', 'gols','man']
// if(lexicon.length > 3){
//   console.log('ok')
// }

// const password = "password21234";

// if (password.length >= 12){
//   console.log("that password is mighty strong");
// }else if (password.length >= 8) {
//   console.log("That's a strong password!");
// } else {
//   console.log("password not strong enough");
// }


//logical operators- OR || and AND &&


// const password = "p@ss";

// if (password.length >= 12 && password.includes('@')){
//   console.log("that password is mighty strong");
// }else if (password.length >= 8 || password.includes('@') && password.length > 5) {
//   console.log("That's a strong password!");
// } else {
//   console.log("password not strong enough");
// }


//logical NOT (!)
// if NOT sign is added to a Booleanit change it the opposite value

// let user = false;

// if(!user){
//   console.log('you must be looged in to continue');
// }


// console.log(!true)
// console.log(!false)

// contination of loop
// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length; i++){

// if(scores[1] === 0){
//   continue; 
// }

//   console.log("your score: ', scores[i]")

//   if(scores [i] === 100){
//     console.log('congrat you got the top score');
//     break;
//   }
// }


//switch statements
// const grade = 'D'
// switch(grade){
//   case'A':
//   console.log('you got A!')
//   break;
//   case'B':
//   console.log('you got B!')
//   break;
//   case'C':
//   console.log('you got C!')
//   break;
//   case'D':
//   console.log('you got D!')
//   break;
//   case'E':
//   console.log('you got E!')
//   break;
//   default:
//   console.log('not a vaild grade')
// }


//variables & block scope

let age = 30;


if(true){
 let age = 50;
  console.log('inside code block', age)
}

console.log('outside code block', age)