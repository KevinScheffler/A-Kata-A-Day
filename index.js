 /* Descending Order
Your task is to make a function that can take any non-negative integer
 as an argument and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number. */

function descendingOrder(n) {
    return parseInt(String(n).split('').sort().reverse().join(''));
}

console.log(descendingOrder(123456789));


/* Function 1 - hello world
Make a simple function called greet that returns the most-famous "hello world!".
*/

greet = () => 'hello world!';

console.log(greet());

