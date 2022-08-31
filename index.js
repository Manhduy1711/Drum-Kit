var arrayButton = document.querySelectorAll("button");
for (var i =0 ; i < arrayButton.length; i ++) {
    arrayButton[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}
document.addEventListener("keydown", function (e) {
    makeSound(e.key);
    buttonAnimation(e.key);
})
function makeSound (key) {
    var soundPlay;
    switch (key) {
        case "w":
            soundPlay = new Audio("sounds/crash.mp3");
            soundPlay.play();
            break;
        case "a":
            soundPlay = new Audio("sounds/kick-bass.mp3");
            soundPlay.play();
            break;    
        case "s":
            soundPlay = new Audio("sounds/snare.mp3");
            soundPlay.play();
            break;
        case "d":
            soundPlay = new Audio("sounds/tom-1.mp3");
            soundPlay.play();
            break;
        case "j":
            soundPlay = new Audio("sounds/tom-2.mp3");
            soundPlay.play();
            break;  
        case "k":
            soundPlay = new Audio("sounds/tom-3.mp3");
            soundPlay.play();
            break;
        case "l":
            soundPlay = new Audio("sounds/tom-4.mp3");
            soundPlay.play();
            break;
        default: console.log(key);             
    }
}

function buttonAnimation (currentKey) {
    document.querySelector("." + currentKey).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("." + currentKey).classList.remove("pressed");
    }, 200);
}