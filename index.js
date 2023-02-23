var num=document.querySelectorAll(".drum").length;
for(var i=0; i<num; i++){    //7 can also be added as end of loop;
document.querySelectorAll("button")[i].addEventListener("click",function(){     //this is for checking which button (on screen) is getting clicked;
    var buttonInnerHtml = this.innerHTML;   
    makeSound(buttonInnerHtml);
    buttonAnimations(buttonInnerHtml);     
});

document.addEventListener("keydown",function(event){  //this is for checking which key is getting clicked;

    makeSound(event.key);
    buttonAnimations(event.key);
});
}

function makeSound(key){
    switch(key) {
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break; 
        case 's':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;  
        case 'd':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;  
        case 'k':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;   
        case 'l':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;    
        default: console.log(buttonInnerHtml);             
    }
}
function buttonAnimations (curkey){
    var activeButton = document.querySelector("." + curkey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
},100);
    
}