var welcomeMessage = "Welcome! Glad to see you here. I'm Ram and this page is about me. Scroll down to know more.";
var textToShow = "";
var counter = 0;  
var interval; 
var gradients = ["linear-gradient(to bottom left, #33ccff 0%, #ff99cc 100%)",
                 "linear-gradient(to bottom right, #33ccff 0%, #ff99cc 100%)",
                 "linear-gradient(to top right, #33ccff 0%, #ff99cc 100%)",
                 "linear-gradient(to top left, #33ccff 0%, #ff99cc 100%)"];

$(function () {
  $('[data-toggle="popover"]').popover()
})                 

window.onload = function(){
    initialize();
}

function initialize(){ 
    interval = setInterval(setText,300);
}

function setText(){
    var clearText = false;

    if(counter === welcomeMessage.length - 1)
        clearInterval(interval);   

    if(welcomeMessage[counter] == " "){
        textToShow += " ";
        counter++;  
    }
  
    textToShow += welcomeMessage[counter];

    if(welcomeMessage[counter] == '!' || welcomeMessage[counter] == '.')
        clearText = true;

    counter++;

    document.getElementById("welcome").style.background = gradients[counter % gradients.length];
    document.getElementById("message").innerHTML = textToShow;

    if(clearText)
        textToShow = "";
}
