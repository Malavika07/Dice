var randomNumber1=Math.floor(Math.random()*6)+1;
var randonDiceImage="dice"+randomNumber1+".png";
var randomImage="images/"+randonDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage);


var randomNumber2=Math.floor(Math.random()*6)+1;
var randonDiceImage1="dice"+randomNumber2+".png";
var randomImage1="images/"+randonDiceImage1;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage1);

if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="DRAW!";
}
else if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
else{
  document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
