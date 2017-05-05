$(document).ready(function(){
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



	$('#left-arrow').click(previousSlide);
	$('#right-arrow').click(nextSlide);
	$('.slide-image').click(nextSlide);

	function nextSlide(){
	  window.clearInterval(interval);
	  var $currentSlide = $('#mainimage').find('.slide-image:first');
	  var width = $currentSlide.width();
	  $currentSlide.animate({marginLeft: -width}, 1000, function(){
	    var $lastSlide = $('#mainimage').find('.slide-image:last')
	    $lastSlide.after($currentSlide);
	    $currentSlide.css({marginLeft: 0})
	    interval = window.setInterval(rotateSlides, 3000);
	  });
	}

	function previousSlide(){
	  window.clearInterval(interval);
	  var $currentSlide = $('#mainimage').find('.slide-image:first');
	  var width = $currentSlide.width();
	  var $previousSlide = $('#mainimage').find('.slide-image:last')
	  $previousSlide.css({marginLeft: -width})
	  $currentSlide.before($previousSlide);
	  $previousSlide.animate({marginLeft: 0}, 1000, function(){
	    interval = window.setInterval(rotateSlides, 3000);
	  });

	}


	// Get the modal
	var modal =$("#myModal");
	// Get the button that opens the modal
	$("#btn-wrapper img").click(function(){
		console.log("image clicked...");
		modal.show();
	})

	// Get the <span> element that closes the modal
	// var span = document.getElementsByClassName("close")[0];

	// When the user clicks the button, open the modal 
	// btn.onclick = function() {
	// 	console.log("modal clicked");
	//     modal.style.display = "block";
	//  }

	// When the user clicks on <span> (x), close the modal
	// span.onclick = function() {
	//     modal.style.display = "none";
	// }

	// var span = $(".close");
	$(".close").click(function(){
		console.log("image closed...")
		modal.hide();
	});

	// When the user clicks anywhere outside of the modal, close it
	// window.onclick = function(event) {
	//     if (event.target == modal) {
	//         modal.style.display = "none";
	//     }
	// }





});



	


