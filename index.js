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



// console.log(hero(10, 5));
// console.log(hero(7, 4));
// console.log(hero(4, 5));
// console.log(hero(100, 40));
// console.log(hero(1500, 751));
// console.log(hero(0, 1));



/*
Given: a sequence of different type of values (number, string, boolean).
You should return an object with a separate properties for each of types presented
 in input. Each property should contain an array of corresponding values.

keep order of values like in input array
if type is not presented in input, no corresponding property are expected

*/


function separateTypes(input) {
    return input.reduce((types, value) => {
        const valueType = typeof value
        const type = types[valueType]
        types[valueType] = type ? [...type, value] : [value]
        return types
    }, {})
}

// console.log(separateTypes(['a', 1, 2, false, 'b']));



/*
Wolves have been reintroduced to Great Britain. 
You are a sheep farmer, and are now plagued by wolves
 which pretend to be sheep. Fortunately, you are good at spotting them.
Warn the sheep in front of the wolf that it is about to be eaten.
 Remember that you are standing at the front of the queue which is at
  the end of the array:

*/

function warnTheSheep(queue) {
    let sheepIndex = queue.length - queue.indexOf('wolf') - 1;
    if (sheepIndex === 0)
        return 'Pls go away and stop eating my sheep';
    return `Oi! Sheep number ${sheepIndex} You are about to be eaten by a wolf`;
}

// console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]))
// console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]))




/*
Given a non-empty array of integers,
 return the result of multiplying the
  values together in order.
*/

function grow(x) {
    multiplied = 1
    for(let i = 0; i < x.length; i++) {
        multiplied *= x[i];
    }
    return multiplied;
}

// console.log(grow([2, 2, 2, 2, 2, 2]));




/*
This is the first step to understanding FizzBuzz.

Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

Your expected output is an array of positive integers from 1 to n (inclusive).

Your job is to write an algorithm that gets you from the input to the output.

*/


function preFizz(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr;
}

// console.log(preFizz(5))

// Implement a function which multiplies two numbers.

multiply = (num1, num2) => num1 * num2;

console.log(multiply(110, 102));