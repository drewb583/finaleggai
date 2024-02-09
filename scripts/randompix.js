window.onload = choosePic;

var myPix = new Array("images/eggman1.gif","images/eggman2.gif", "images/eggman3.gif");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];