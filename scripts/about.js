var welcomeMessage = "Welcome! I'm Ram and I'm glad to host host you here. Play around to know more about me. Scroll down.";
var textToShow = "";
var counter = 0;  
var certPointer = 1;
var interval; 
var certInterval;
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
    interval = setInterval(setText,100);
    certInterval = setInterval(setCertColor, 1000);
}

function setCertColor(){
    var prevPointer;

    if(certPointer === 1)
        prevPointer = 5;
     else 
        prevPointer = certPointer - 1;   

    var prevElement = "cert_" + prevPointer;
    document.getElementById(prevElement).style.backgroundColor = "";

    var certElement = "cert_" + certPointer;
    document.getElementById(certElement).style.backgroundColor = "#7FFFD4";

    if(certPointer === 5)
        certPointer = 1;
    else    
        certPointer++;   
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
