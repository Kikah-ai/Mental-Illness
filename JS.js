var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlidesfade");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4500); // Change image every 2 seconds
}


// buttons
var inf = document.getElementById('info');

inf.onclick = function infohide(){
  if (inf.innerHTML == 'Information'){
    inf.innerHTML = 'Hide'
    document.getElementById('ocdinformation').style.display = 'block';

  }
  else if (inf.innerHTML == 'Hide'){
    inf.innerHTML = 'Information';
    document.getElementById('ocdinformation').style.display = 'none';

  }


}