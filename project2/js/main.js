window.addEventListener('load', init)

//globals

//available levels
const levels = {
    easy:5,
    medium: 3,
    hard: 2
}

//to change level
const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

//dom elements
const wordInput = document.querySelector('#word-input')
const currentWord = document.querySelector('#current-word')
const scoreDisplay = document.querySelector('#score')
const timeDisplay = document.querySelector('#time')
const message = document.querySelector('#message')
const seconds = document.querySelector('#seconds')

const words = [
    'hat',
    'love',
    'cocktail',
    'generate',
    'establishment',
    'javascript'
];

//init game
function init() {
    seconds.innerHTML = currentLevel
    //load word from array
    showWord(words);
    wordInput.addEventListener('input', startMatch)
    setInterval(countdown, 1000)
    setInterval(checkStatus, 50)
}

function startMatch(){
    if(matchWords()){
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value= '';
        score++;
    }

    if(score === -1){
        scoreDisplay.innerHTML = 0;
    } else {
    scoreDisplay.innerHTML = score;
    }
    
}

//match current word
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct!!!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

function showWord(words){
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
}

function countdown(){
    //make sure time isnt run out
    if(time>0){
        //decrement
        time--;
    } else if(time === 0){
        isPlaying = false;
    }
    //show time
    timeDisplay.innerHTML = time;
}

function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML='Game Over!!!'
        score = -1;
    }
}

