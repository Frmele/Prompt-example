/*

-Ask the user three questions using prompt.

What’s your name?
Where were you born?
What is your favourite food?

-Make sure you assign the results of the prompts to variables with valid and clear names.

Example:

const answer = prompt("What is your name?");

console.log(`Hello ${answer}, how are you doing?`);

-Use string interpolation to construct the following sentence “You are (name), you were born in (location), your favourite food is (favorite food).” and assign this to a variable.

*/

const answer = prompt("What is your name?");
const answer1 = prompt("Where were you born?");
const answer2 = prompt("What is your favourite food?");


// IMPORTANT: you need to use a specific type of quotation or it won't work

console.log(`You are ${answer}, you were born in ${answer1}, your favourite food is ${answer2}`);

