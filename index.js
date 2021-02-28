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

// console.log(reverseString("hello"));


/*
A hero is on his way to the castle to complete his mission.
However, he's been told that the castle is surrounded with a couple
of powerful dragons! each dragon takes 2 bullets to be defeated,
our hero has no idea how many bullets he should carry..
Assuming he's gonna grab a specific given number of bullets and move
forward to fight another specific given number of dragons, will he survive?
*/

// function hero(bullets, dragons) {
//     bullets -= dragons--;
//     if (bullets > dragons) {
//         return true;
//     } else {
//         return false;
//     }
// }

function hero(bullets, dragons) {
    return bullets >= dragons * 2;
}



console.log(hero(10, 5));
console.log(hero(7, 4));
console.log(hero(4, 5));
console.log(hero(100, 40));
console.log(hero(1500, 751));
console.log(hero(0, 1));






