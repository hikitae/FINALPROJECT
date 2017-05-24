$(document).ready(function(){

// ---- SLIDESHOW  FADE IN / OUT with ARROWS-----//

  var slideInterval = 5000,
    fadeDuration = 400,
    $slideshow = $('#mainimage');
 
  $("#right-arrow").click(rotateSlideForward);
    $("#left-arrow").click(rotateSlideBackward);

  
  function rotateSlideForward(){
  	$slides = $slideshow.children("div");
  	console.log($slideshow.children("div"));
    $slides.eq(0).fadeOut(fadeDuration, function() {
      $(this).appendTo($slideshow);
    });
    $slides.eq(1).fadeIn(fadeDuration);
  	}
  	
  	 function rotateSlideBackward(){
  	$slides = $slideshow.children("div");
  	console.log($slideshow.children("div"));
    $slides.eq(-1).fadeOut(fadeDuration, function() {
      $(this).prependTo($slideshow);
    });

    $slides.eq(-1).fadeIn(fadeDuration);
  	
  	}


	// -----Get the modal----//

var modalOcean =$("#modalOcean");
//Get the button that opens the modal
$("#btn-wrapper-ocean img").click(function(){
	console.log("image clicked...");
	modalOcean.show();
	$("#vimeoOcean").attr("src","https://player.vimeo.com/video/216237111?autoplay=1");

});

$("#closeOcean").click(function(){
	console.log("image closed...");
	modalOcean.hide();
	$("#vimeoOcean").attr("src","");
});

var modalVegas =$("#modalVegas");
//Get the button that opens the modal
$("#btn-wrapper-vegas img").click(function(){
	console.log("image clicked...");
	modalVegas.show();
	$("#vimeoVegas").attr("src","https://player.vimeo.com/video/216101771?autoplay=1");

});

$("#closeVegas").click(function(){
	console.log("image closed...");
	modalVegas.hide();
	$("#vimeoVegas").attr("src","");
});


	// -----Navigation----//

var move = $(".section");
$(".nav").click(function(){
	move.css("padding-top","80px");
});

// -----MOBILE---//

$("header nav ul li:first-child").click(function(){
	console.log("hamburger clicked")
	event.preventDefault();
	$("header nav").toggleClass("show");
});

});




	







