/**
 * Author:   Angel A
 * Created:   11/2/22
 * license: Public Domain
 **/

 buttonEl = document.getElementById("button");
 console.log("button element:", buttonEl);
 button2El = document.getElementById("button2");
 console.log("button element:", buttonEl);
 button3El = document.getElementById("button3");

 inputEl = document.getElementById("userinput");
 console.log("input element:", inputEl);
 input2El = document.getElementById("userinput2");
 input3El = document.getElementById("userinput3");

 outputEl = document.getElementById("output");
 console.log("output element:", outputEl);

 greetingEl = document.getElementById("greeting");
 fontEl = document.getElementById("font");
 backEl = document.getElementById("back");

 colorEl = document.getElementById("content")
 color2El = document.getElementById("content")


function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function scrambleName(word) {
    var wordArray = word.toLowerCase().split('');
    var newArray = shuffleArray(wordArray);
    return newArray.join('');
}

function colr(word) {
    var wordArray = word.toLowerCase().split('');
    return wordArray.join('');
}

buttonEl.addEventListener("click", function(){
  var userName = inputEl.value;
  var newName = scrambleName(userName);
  greetingEl.innerHTML = "<p id=results> Hello " + userName + ", let's see your name in an anagram format: </p>";
  outputEl.innerHTML = "<p id=name-results>" + newName + "</p>";

});

button2El.addEventListener("click", function(){
colorEl.style.backgroundColor= input2El.value;
backEl.innerHTML = "<p id=results> Nice background choice !</p>";
});

button3El.addEventListener("click", function(){
fontEl.innerHTML = "<p id=results> Nice Font color !</p>";
color2El.style.color= input3El.value;
});
