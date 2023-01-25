'use strict';

let username = prompt('Hello, what is your name?');
alert('Welcome to my page, ' + username + '!');

let correctAnswers = 0;

let guacGuess = prompt('Do I like guacamole?').toLowerCase();
//console.log(guacGuess);
if (guacGuess === 'yes' || guacGuess === 'y') {
  alert('Correct, I like guac!');
  correctAnswers += 1;
} else if (guacGuess === 'no' || guacGuess === 'n') {
  alert('Sorry! I do like guac!');
} else {
  alert('Please choose yes or no!');
}
//console.log(correctAnswers);

let gamerGuess = prompt('Do I like to play videogames?').toLowerCase();
//console.log(gamerGuess);
if (gamerGuess === 'yes' || gamerGuess === 'y') {
  alert('Correct, I like to play videogames!');
  correctAnswers += 1;
} else if (gamerGuess === 'no' || gamerGuess === 'n') {
  alert('Sorry! I really enjoy playing video games');
} else {
  alert('Please choose yes or no!');
}

//console.log(correctAnswers);

let catGuess = prompt('Do I own a cat').toLowerCase();
//console.log(catGuess);
if (catGuess === 'yes' || catGuess === 'y') {
  alert('Correct, his name is Winston!');
  correctAnswers += 1;
} else if (catGuess === 'no' || catGuess === 'n') {
  alert('Sorry! my cat is named Winston!');
} else {
  alert('Please choose yes or no!');
}

let washingtonGuess = prompt('Am I from Washington?').toLowerCase();
//console.log(washingtonGuess);
if (washingtonGuess === 'yes' || washingtonGuess === 'y') {
  alert('Correct, I am from Bremerton, WA');
  correctAnswers += 1;
} else if (washingtonGuess === 'no' || washingtonGuess === 'n') {
  alert('Incorrect, I am from Bremerton, WA');
} else {
  alert('Please choose yes or no!');
}

let animeGuess = prompt('Do I like anime?').toLowerCase();
//console.log(animeGuess);
if (animeGuess === 'yes' || animeGuess === 'y') {
  alert('Correct, I like anime!');
  correctAnswers += 1;
} else if (animeGuess === 'no' || animeGuess === 'n') {
  alert('Sorry! I\'m a huge fan!');
} else {
  alert('Please choose yes or no!');
}

let magicNumber = Math.ceil(Math.random() * 20);
console.log(magicNumber);
for (let guessesRemaining = 3; guessesRemaining >= 0; guessesRemaining--) {
  let userNumberGuess = prompt('Choose a number between 1-20');
  let userGuessInt = +userNumberGuess;
  if (userGuessInt === magicNumber) {
    alert('Congrats! You Guessed Correctly');
    correctAnswers++;
    break;
  } else if (userGuessInt < magicNumber && guessesRemaining > 0) {
    alert(`Your guess is too low, you have ${guessesRemaining} guesses remaining!`);
  } else if (userGuessInt > magicNumber && guessesRemaining > 0) {
    alert(`Your guess is too high, you have ${guessesRemaining} guesses remaining!`);
  }
  if (guessesRemaining === 0) {
    alert(`Sorry Out Of Guesses, the correct number was ${magicNumber}`);
    break;
  }
}

const correctAnswersArr = ['japan', 'korea', 'thailand'];
let attempts = 6;
let isCorrect = false;
while (attempts > 0 && isCorrect === false) {
  if (attempts === 0) {
    alert('Sorry Out of guesses!')
    break;
  }
  let userCountryGuess = prompt('Which foreign country have I visited?').toLowerCase();
  for (let j = 0; j < correctAnswersArr.length; j++) {
    if (userCountryGuess === correctAnswersArr[j]) {
      alert('Correct!');
      isCorrect = true;
      correctAnswers++;
      break;
    }
  }
  attempts--;
  if (isCorrect === false) {
    alert(`You have ${attempts} attempts left!`);
  }
}
alert('The countries I have been to are ' + correctAnswersArr[0]+ ", " + correctAnswersArr[1]+ ", and " + correctAnswersArr[2]);

if (correctAnswers === 1) {
  alert('Congratulations ' + username + ', you got 1 correct!');
} else if (correctAnswers === 0) {
  alert('Sorry, ' + username + ' you got none right :(');
} else {
  alert(`Congragulations ${username}! You got ${correctAnswers} out of 7 correct answers!`);
}

/*
To Do List:
Create Array To hold Questions and Answers (Optional)
*/