//! function = A section of reusable code.
//?            Declare code once, use it whenever you want.
//?            Call the function to execute that code.


// function happyBirthday(){
//     console.log("Happy birthday to you!");
//     console.log("Happy birthday to you!");
//     console.log("Happy birthday dear you!");
//     console.log("Happy birthday to you!");
// }

// happyBirthday();

// function happyBirthday(username, age){
//     console.log("Happy birthday to you!");
//     console.log("Happy birthday to you!");
//     console.log(`Happy birthday dear ${username}!`);
//     console.log("Happy birthday to you!");
//     console.log(`You are ${age} years old`)
// }

// happyBirthday("Linkx", 19);
// happyBirthday("Spongbob", 30)

//* Normal Method

// function add(x, y){
//     let result = x + y;
//     return result;
// }

// console.log(add(20, 5));

//* Shortcut Method

function add(x, y){
    return x + y
}
function subtract(x, y){
    return x - y;
}
function multiply(x, y){
    return x * y;
}
function divide(x, y){
    return x / y;
}

//! console.log(multiply(20, 6));

// function isEven(number){

//     if(number % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(isEven(13));

// function isEven(number){

//     return number % 2 === 0 ? true : false;
// }

// console.log(isEven(13));

function isValidEmail(email){

    return email.includes("@") ? true : false;
}

console.log(isValidEmail("Linkx@gmail.com"))
console.log(isValidEmail("Linkxgmail.com"))