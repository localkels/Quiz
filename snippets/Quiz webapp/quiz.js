/* 

Write a simple quiz application that does the following:

1. Ask at least 5 questions
2. Keep track of the number of questions that the user answered correctly
3. Provide a final message after quiz letting user know amount of correct
4. Rank the player:
  - All 5 correct - gold crown
  - 3 to 4 correct - silver crown
  - 1 to 2 correct - bronze crown
  - 0 correct - no crown

*/


// 1. Ask at least 5 questions
var score = 0;

// first question -- correct answer = true
var answer = prompt("1. The color orange is a mixture of red and yellow. True or False?");

if ( answer.toUpperCase() === "TRUE" || answer.toUpperCase() === "T" ) {
  score += 1;
  alert("Hurray! That was the correct answer! On to the next one!");
  console.log("Question 1 correct. Score = " + score);
  
} else if ( answer.toUpperCase() === "FALSE" || answer.toUpperCase() === "F" ) {
  alert("Sorry, that was not the correct answer. Better luck next time.");
} else {
  alert('Incorrect answer. Next time, please only enter the word "True" or "False"');
  
}

// second question -- correct answer = false
answer = prompt("2. A canoe is a type of house. True or False?");

if ( answer.toUpperCase() === "FALSE" || answer.toUpperCase() === "F" ) {
  score += 1;
  alert("Hurray! That was the correct answer! On to the next one!");
  
} else if ( answer.toUpperCase() === "TRUE" || answer.toUpperCase() === "T" ){
  alert("Sorry, that was not the correct answer. Better luck next time.");
} else {
  alert('Incorrect answer. Next time, please only enter the word "True" or "False"');
}

// third question -- correct answer = false
answer = prompt("3. Most birds cannot fly. True or False?");

if ( answer.toUpperCase() === "FALSE" || answer.toUpperCase() === "F" ) {
  score += 1;
  alert("Hurray! That was the correct answer! On to the next one!");
  
} else if ( answer.toUpperCase() === "TRUE" || answer.toUpperCase() === "T" ){
  alert("Sorry, that was not the correct answer. Better luck next time.");
} else {
  alert('Incorrect answer. Next time, please only enter the word "True" or "False"');
}

// fourth question -- correct answer = true
answer = prompt("4. Darkness is the absence of light. True or False?");

if ( answer.toUpperCase() === "TRUE" || answer.toUpperCase() === "T" ) {
  score += 1;
  alert("Hurray! That was the correct answer! On to the next one!");
  console.log("Question 1 correct. Score = " + score);
  
} else if ( answer.toUpperCase() === "FALSE" || answer.toUpperCase() === "F" ) {
  alert("Sorry, that was not the correct answer. Better luck next time.");
} else {
  alert('Incorrect answer. Next time, please only enter the word "True" or "False"');
  
}

// fifth question -- correct answer = false
answer = prompt("5. A cheetah is the fastest thing on this planet. Even faster than a car or plane. True or False?");

if ( answer.toUpperCase() === "FALSE" || answer.toUpperCase() === "F" ) {
  score += 1;
  alert("Hurray! That was the correct answer!");
  
} else if ( answer.toUpperCase() === "TRUE" || answer.toUpperCase() === "T" ){
  alert("Sorry, that was not the correct answer. Better luck next time.");
} else {
  alert('Incorrect answer. Next time, please only enter the word "True" or "False"');
}

// 3. Provide a final message after quiz letting user know amount of correct
alert("You've reached the end of this quiz! You got " + score + " out of 5 questions right.")

/*
4. Rank the player:
  - All 5 correct - gold crown
  - 3 to 4 correct - silver crown
  - 1 to 2 correct - bronze crown
  - 0 correct - no crown
*/

if ( score === 5 ) {
  alert("Congratulations! You won a GOLD CROWN!");
} else if ( score < 5 && score > 2 ) {
  alert("Congratulations! You got a SILVER CROWN!")
  
} else if ( score < 3 && score !== 0) {
  alert("Congratulations! You got a BRONZE CROWN!")
} else {
  alert("Sorry, you didn't get any questions right. That means you get no crown.");
}
