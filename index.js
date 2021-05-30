var randomNumber= Math.random();
randomNumber=Math.floor(randomNumber*6)+1;

var randomDiceImg='dice'+ randomNumber+'.png';

var imageSrc='images/'+ randomDiceImg;
var image1= document.querySelectorAll('img')[0];
image1.setAttribute('src',imageSrc);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImg2='dice'+randomNumber2+'.png';
var imageSrc2='images/'+randomDiceImg2;
var image2=document.querySelectorAll('img')[1];
image2.setAttribute('src',imageSrc2);


if (randomNumber>randomNumber2){
  document.querySelector('h1').innerHTML='🚩Player1 won'
}
else if (randomNumber<randomNumber2){
  document.querySelector('h1').innerHTML='🚩Player2 won'
}
else if (randomNumber===randomNumber2){
  document.querySelector('h1').innerHTML='🚩Tie'
}
