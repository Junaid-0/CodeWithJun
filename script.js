let eminem = new Audio("Audio/Rap-God.mp3")

let clicked = false;
// let flightbox = document.getElementsByClassName("services")[0];

// console.log(flightbox);

// flightbox.addEventListener("click", function(){
//     location.href = "https://akbartravels.com"
// })

document.querySelector(".profile").addEventListener("click",function(){
  if(!clicked){
    eminem.play();
    clicked = true;
  }
  else{
    eminem.pause();
    clicked = false;
  }
})

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2500); // Change image every 2 seconds
}
