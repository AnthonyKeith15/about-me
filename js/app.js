'use strict';

let username = prompt("Hello, what is your name?");
alert("Welcome to my page, " + username + "!");


let guacGuess = prompt("Do I like guacamole?").toLowerCase();
//console.log(guacGuess);
if (guacGuess === 'yes' || guacGuess === 'y') {
  alert("Correct, I like guac!")
} else if (guacGuess === 'no' || guacGuess === 'n'){
  alert("Sorry! I do like guac!")
} else {
  alert("Please choose yes or no!")
}

let gamerGuess = prompt("Do I like to play videogames?").toLowerCase()
//console.log(gamerGuess);
if (gamerGuess === 'yes' || gamerGuess === 'y') {
  alert("Correct, I like to play videogames!")
} else if (gamerGuess === 'no' || gamerGuess === 'n') {
  alert("Sorry! I really enjoy playing video games")
} else {
  alert("Please choose yes or no!")
}

let catGuess = prompt("Do I own a cat").toLowerCase()
//console.log(catGuess);
if (catGuess === 'yes' || catGuess === 'y') {
  alert("Correct, his name is Winston!")
} else if (catGuess === 'no' || catGuess === 'n'){
  alert("Sorry! my cat is named Winston!")
} else {
  alert("Please choose yes or no!")
}

let washingtonGuess = prompt("Am I from Washington?").toLowerCase()
//console.log(washingtonGuess);
if (washingtonGuess === 'yes' || washingtonGuess === 'y') {
  alert("Correct, I am from Bremerton, WA")
} else if (washingtonGuess === 'no' || washingtonGuess === 'n'){
  alert("Incorrect, I am from Bremerton, WA")
} else {
  alert("Please choose yes or no!")
}

let animeGuess = prompt("Do I like anime?").toLowerCase()
//console.log(animeGuess);
if (animeGuess === 'yes' || animeGuess === 'y') {
  alert("Correct, I like anime!")
} else if (animeGuess === 'no' || animeGuess === 'n'){
  alert("Sorry! I'm a huge fan!");
} else {
  alert("Please choose yes or no!")
}