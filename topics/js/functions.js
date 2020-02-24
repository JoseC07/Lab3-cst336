var randomNumber = Math.floor(Math.random() * 3) + 1;
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var text = document.querySelector('#text');
var text1 = document.querySelector('#text1');
var body = document.querySelector('body')
var image;
var countCoin = 0;
var countCherry = 0;
var countHeart = 0;


function checkGuess(){
    text1.innerHTML = '';
    $(body).css("background-color","white")
    var userGuess = Number(guessField.value);
    countCoin = 0;
    countCherry = 0;
    countHeart = 0;
    for(var i = 0; i < 3; i++)
    {   
        if(i === 0)
        {
            newImg('.column1');
        }
        else if(i === 1)
        {
            newImg('.column2');
        }
        else if(i === 2)
        {
            newImg('.column3');
        }
    }

    if(countCherry === 3)
    {
        text.innerHTML = "Three Cherries! x3";
        text1.innerHTML = "Reward: $" + userGuess * 3;
        $(body).css("background-color","red")
    }
    else if(countCoin === 3)
    {
        text.innerHTML = "Three Coins! x2";
        text1.innerHTML = "Reward: $"+userGuess * 2;
        $(body).css("background-color","red")
    }
    else if(countHeart === 3)
    {
        text.innerHTML = "Three Hearts! JackPot! x10";
        text1.innerHTML = "Reward: $"+userGuess * 10;
        $(body).css("background-color","gold")
    }
    else
    {
        text.innerHTML = "Sorry no reward :(";
        text1.innerHTML = "Reward: $0";
    }
    
    guessField.value = '';
    guessField.focus();

}
function newImg(name){
    text.innerHTML = "hello";
    image = document.querySelector(name);
    randomNumber = Math.floor(Math.random() * 3) + 1;
    
    
    if(randomNumber === 1)
    {
        countCherry++;
        $(image).find("img").attr('src', 'img/cherry.png');
        
    }
    else if(randomNumber === 2)
    {
        countCoin++;
        $(image).find("img").attr('src', 'img/coin.png');
        
    }
    else if(randomNumber === 3)
    {
        countHeart++;
        $(image).find("img").attr('src', 'img/heart.png');
        
    }
    
    
}

guessSubmit.addEventListener('click', checkGuess);
