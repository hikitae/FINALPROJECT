$(document).ready(function(){

// ---- SLIDESHOW  SLIDE -----//
	// var interval = window.setInterval(rotateSlides, 5000)

	// function rotateSlides(){
	// var $firstSlide = $("#mainimage").find(".slide-image:first");
	// var width = $firstSlide.width();

	// $firstSlide.animate({marginLeft: -width}, 2000, function(){
	//   var $lastSlide = $("#mainimage").find(".slide-image:last")
	//   $lastSlide.after($firstSlide);
	//   $firstSlide.css({marginLeft: 0})
	// });
	// }


// ---- SLIDESHOW  FADE IN / OUT -----//

  var slideInterval = 5000,
    fadeDuration = 600,
    $slideshow = $('#mainimage'),
    $slides = $slideshow.children();
  
  $slides.eq(0).fadeIn(fadeDuration);
  
  setInterval(function() {
    $slides = $slideshow.children();
    $slides.eq(0).fadeOut(fadeDuration, function() {
      $(this).appendTo($slideshow);
    });
    $slides.eq(1).fadeIn(fadeDuration);
  }, slideInterval);
  


// ---- SLIDE FADE IN / OUT with ARROWS -----//
///////////////


// ---- SLIDE SHOW ARROWS-----//


	// $('#left-arrow').click(previousSlide);
	// $('#right-arrow').click(nextSlide);
	// $('.slideshow').click(nextSlide);

	// function nextSlide(){
	//   window.clearInterval(interval);
	//   var $currentSlide = $('#mainimage').find('.slide-image:first');
	//   var width = $currentSlide.width();
	//   $currentSlide.animate({marginLeft: -width}, 1000, function(){
	//     var $lastSlide = $('#mainimage').find('.slide-image:last')
	//     $lastSlide.after($currentSlide);
	//     $currentSlide.css({marginLeft: 0})
	//     interval = window.setInterval(rotateSlides, 3000);
	//   });
	// }

	// function previousSlide(){
	//   window.clearInterval(interval);
	//   var $currentSlide = $('#mainimage').find('.slide-image:first');
	//   var width = $currentSlide.width();
	//   var $previousSlide = $('#mainimage').find('.slide-image:last')
	//   $previousSlide.css({marginLeft: -width})
	//   $currentSlide.before($previousSlide);
	//   $previousSlide.animate({marginLeft: 0}, 1000, function(){
	//     interval = window.setInterval(rotateSlides, 3000);
	//   });

	// }




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



});
	



