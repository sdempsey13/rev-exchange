
/*------ HOMEPAGE SLIDESHOW ---------*/
/* Slideshow URL: https://www.w3schools.com/howto/howto_js_slideshow.asp */



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


/*
//AUTOMATIC SCROLL
var slideIndex = 0;

showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 7000); // Change image every 7 seconds
}
*/

$(document).ready(function() {

/*------ Waypoints ---------*/

$('.js--section-listings').waypoint(function(direction) {
    
    if (direction == "down") {
        
        $('nav').addClass('sticky');
        
    } else {
        
        $('nav').removeClass('sticky');
        
    }
    
}, {
  offset: '175px;'
});

/*
var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})
*/

/*------ Animations on Scroll ---------*/
    
$('.js--wp-1').waypoint(function(direction){
    
    $('.js--wp-1').addClass('animated fadeIn');
    
}, {
    offset: '75%'
});
    
$('.js--wp-2').waypoint(function(direction){
    
    $('.js--wp-2').addClass('animated pulse');
    
}, {
    offset: '75%'
});   

});


$('#headClick').on("click", function() {
    
    $('.js--pulse').addClass('animated pulse');
    
})

//Navigation Scroll    
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 4000);
            return false;
          }
        }
      });
    });














