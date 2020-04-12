// Detecting button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var cont = 0 ; cont <numberOfDrumButtons ; cont++){

  document.querySelectorAll(".drum")[cont].addEventListener("click", function (){

        var clickedButtom = this.innerHTML;
        whichkey(clickedButtom);

        buttonAnimation(clickedButtom);
   });
}


//Detecting Keyboard
 document.addEventListener("keydown", function(event){
          var keypressed = event.key;
          whichkey(keypressed);

          buttonAnimation(keypressed);
 });


function whichkey (key){

  switch (key) {
    case "w":
      var tom1 =  new Audio('sounds/tom-1.mp3');
      tom1.play();
    break;

    case "a" :
      var tom2 =  new Audio('sounds/tom-2.mp3');
      tom2.play();
    break;

    case "s" :
      var tom3 =  new Audio('sounds/tom-3.mp3');
      tom3.play();
    break;

    case "d" :
      var tom4 =  new Audio('sounds/tom-4.mp3');
      tom4.play();
    break;

    case "j" :
    var snare =  new Audio('sounds/snare.mp3');
    snare.play();
    break;

    case "k":
    var crash =  new Audio('sounds/crash.mp3');
    crash.play();
    break;

    case "l" :
    var kick =  new Audio('sounds/kick-bass.mp3');
    kick.play();
    break;


    default: console.log(clickedButtom);

  }

}

 function buttonAnimation(currentKey){

          var activeButton = document.querySelector("." + currentKey);
            activeButton.classList.add("pressed");

            setTimeout(function (){
              activeButton.classList.remove("pressed");
            }, 100 );
}
