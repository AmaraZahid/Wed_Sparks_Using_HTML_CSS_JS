// Collapse the navbar when the user clicks outside of it
$(document).click(function(event) {
    var navbarToggler = $(".navbar-toggler");
    if (navbarToggler.attr("aria-expanded") === "true") {
      if (!event.target.matches(".navbar-toggler") && !event.target.matches(".navbar-toggler-icon")) {
        navbarToggler.trigger("click");
      }
    }
  });
  
  // Smooth scrolling for links with hashes
  $("a[href^='#']").click(function() {
    var target = $(this.hash);
    if (target.length) {
      $("html, body").animate({scrollTop: target.offset().top}, 1000);
      return false;
    }
  });
  
//   // Activate the current link in the navbar when scrolling
//   $(window).scroll(function() {
//     var scrollDistance = $(window).scrollTop();
//     $(".section").each(function(index) {
//       if ($(this).position().top <= scrollDistance + 100) {
//         $(".nav-link.active").removeClass("active");
//         $(".nav-link").eq(index).addClass("active");
//       }
//     });
//   });
  
//   // Add smooth scrolling to the "Back to Top" button
//   $("#back-to-top-btn").click(function() {
//     $("html, body").animate({scrollTop: 0}, 1000);
//   });
  
//   // Show or hide the "Back to Top" button based on scroll position
//   $(window).scroll(function() {
//     if ($(this).scrollTop() > 100) {
//       $("#back-to-top-btn").fadeIn();
//     } else {
//       $("#back-to-top-btn").fadeOut();
//     }
//   });
  


// Rotating images in image slider
$(document).ready(function() {
	$('#image-slider').carousel({
		interval: 5000
	});

	$('#image-slider').on('slid.bs.carousel', function() {
		var currentImg = $('.carousel-item.active');
		var nextImg = currentImg.next();

		if (nextImg.length === 0) {
			nextImg = $('.carousel-item').first();
		}

		currentImg.removeClass('active');
		nextImg.addClass('active');
	});
});

  // js for Our services 
// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }



//   about us 

  
  // Get the carousel element
  var carouselEl = document.querySelector('#image-slider');

  // Set the transition duration to 3 seconds
  carouselEl.style.transitionDuration = '3s';

  // Listen for the slide.bs.carousel event
  carouselEl.addEventListener('slide.bs.carousel', function() {
    // Add the 'fade' class to the carousel element
    carouselEl.classList.add('fade');
  });

  // Listen for the slid.bs.carousel event
  carouselEl.addEventListener('slid.bs.carousel', function() {
    // Remove the 'fade' class from the carousel element
    carouselEl.classList.remove('fade');
  });



//   Back to Top button
$(document).ready(function() {
  let mybutton = $("#back-to-top-btn");

  $(window).scroll(function() {
      if ($(this).scrollTop() > 20) {
          mybutton.fadeIn();
      } else {
          mybutton.fadeOut();
      }
  });

  mybutton.click(function() {
      $("html, body").animate({scrollTop: 0}, 800);
      return false;
  });
});
   