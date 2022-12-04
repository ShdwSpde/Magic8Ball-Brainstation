
const messages = [
  "Never",
  "Always",
  "Maybe",
  "Sometimes",
  "We shall see",
  "Gonna need more info",
  "Looks likely",
  "Who knows?",
  "Heck yeah",
  "Hell Na",
  "Stop it!",
  "Quit Shaking Me!",
  "Fa Sho",
  "Definitely",
  "It is what it is",
];


const getRandomNumber = function() {
  return Math.floor(Math.random() * messages.length);
}

/*
    Go off and get a random number
    then use that random number to pull a
    random message from our array of possible responses
*/
const getRandomMessage = function() {
  const randomNumber = getRandomNumber();
  return messages[randomNumber];
}

/*
  Using the getRandomMessage function above to input
  a random message into the answer element
*/
const shakeyShakey = function() {
  const answerElement = document.getElementById('answer');
  answerElement.textContent = getRandomMessage();

  const eightElement = document.getElementById('eight');
  eightElement.textContent = '';

  setTimeout(() => {
    const eightElement = document.getElementById('eight');
    eightElement.textContent = '8';

    const answerElement = document.getElementById('answer');
    answerElement.textContent = '';

    const inputElement = document.getElementById('question');
    inputElement.value = '';
  }, 2000);
};

/*
  Asking the browser to call shakeyShakey whenever the button is clicked
*/
const buttonElement = document.getElementById('button');
buttonElement.addEventListener('click', shakeyShakey);
