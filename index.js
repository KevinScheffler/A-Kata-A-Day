 /* Descending Order
Your task is to make a function that can take any non-negative integer
 as an argument and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number. */

function descendingOrder(n) {
    return parseInt(String(n).split('').sort().reverse().join(''));
}

// console.log(descendingOrder(123456789));


/* Function 1 - hello world
Make a simple function called greet that returns the most-famous "hello world!".
*/

greet = () => 'hello world!';

// console.log(greet());




/*
Complete the method that takes a boolean value and return a
 "Yes" string for true, or a "No" string for false.
*/

function boolToWord( bool ){
    return (bool ? 'Yes' : 'No')
  }

//   console.log(boolToWord(false));



/* Convert Celsius to Fahrenheit */

function convertToF(celsius) {
    let fahrenheit = celsius * 9 /5 + 32;
    return fahrenheit;
}

// console.log(convertToF(30))


// Reverse a String

function reverseString(str) {
    let reversed;
    reversed = str.split('').reverse().join('');
    return reversed;
}

console.log(reverseString("hello"));

