
const activePage = window.location.pathname;
console.log(activePage);

var images = ['img/LowPolyCharacterPreview.png','img/LowPolyCharacter2.jpg','img/LowPolyCharacter3.jpg'];
var i = 0;
function slideShow(){
    document.getElementById("image").src = images[i];

    if(i<images.length-1){
        i++;
    }
    else {
        i=0;
    }
    setTimeout("slideShow()", 2000);
}

function setNewImage(){
    document.getElementById("image1").src = "img/image.png";
}

function setOldImage(){
    document.getElementById("image1").src = "img/151343.png";
}

function scrollAppear(){
    var textBlender = document.querySelector('.textblender');
    var firstPos = textBlender.getBoundingClientRect().top;
    var displayPosition = window.innerHeight/2;

    if(firstPos < displayPosition){
        textBlender.classList.add('appeartext');
    }
}

    window.addEventListener('scroll',scrollAppear);

function printMsg(){
    document.getElementById('output').innerHTML = 'Not available right now, try again later!'
}


window.onload = function(){
    slideShow();
    setNewImage();
    setOldImage();
    scrollAppear();
}