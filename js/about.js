// js for search 
// Get the search icon and search bar elements
const searchIcon = document.querySelector("#search-icon");
const searchBar = document.querySelector(".search-bar");


// Hide the search bar on page load
searchBar.style.display = "none";

// Add click event listener to search icon
searchIcon.addEventListener("click", function() {
  // Toggle the visibility of the search bar
  if (searchBar.style.display === "none") {
    searchBar.style.display = "flex";
  } else {
    searchBar.style.display = "none";
  }
});

// Add click event listener to document to close the search bar when user clicks outside it
document.addEventListener("click", function(event) {
  if (!searchBar.contains(event.target) && event.target !== searchIcon) {
    searchBar.style.display = "none";
  }
});
 



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


// Activate the current link in the navbar when scrolling
$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop();
  $(".section").each(function(index) {
    if ($(this).position().top <= scrollDistance + 100) {
      $(".nav-link.active").removeClass("active");
      $(".nav-link").eq(index).addClass("active");
    }
  });
});

// Add smooth scrolling to the "Back to Top" button
$("#back-to-top").click(function() {
  $("html, body").animate({scrollTop: 0}, 1000);
});

// Show or hide the "Back to Top" button based on scroll position
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $("#back-to-top").fadeIn();
  } else {
    $("#back-to-top").fadeOut();
  }
});







// image slider
$(document).ready(function() {
  // Initialize the carousel with a 3 second interval and pause on hover
  $('.carousel').carousel({
  interval: 3000,
  pause: 'hover'
  });
  // Update the active indicator when a slide is changed
  $('.carousel').on('slid.bs.carousel', function() {
  var currentIndex = $('.carousel-item.active').index() + 1;
  $('.carousel-indicators li').removeClass('active');
  $('.carousel-indicators li:nth-child(' + currentIndex + ')').addClass('active');
  });
  
  // Wrap the caption content in a container for styling purposes
  $('.carousel-caption').wrapInner('<div class="container"></div>');
  
  // Adjust the height of the carousel container to include the caption height
  $('.carousel').each(function() {
  var captionHeight = $(this).find('.carousel-caption').outerHeight();
  var captionPadding = parseInt($(this).find('.carousel-caption').css('padding-top'));
  $(this).find('.carousel-inner').css('padding-bottom', captionHeight + (captionPadding * 2) + 'px');
  });
  
  // Add indicators to the carousel
  $('.carousel').each(function() {
  var carouselId = $(this).attr('id');
  var carouselItems = $(this).find('.carousel-item').length;
  $('<ol class="carousel-indicators"></ol>').insertBefore('#' + carouselId + ' .carousel-inner');
  for (var i = 0; i < carouselItems; i++) {
  var indicatorActive = (i === 0) ? 'active' : '';
  $('<li data-target="#' + carouselId + '" data-slide-to="' + i + '" class="' + indicatorActive + '"></li>').appendTo('#' + carouselId + ' .carousel-indicators');
  }
  });
  
  // Add custom buttons to the carousel items
  $('.carousel').each(function() {
  var buttonHtml = '<div class="carousel-button-container"><button type="button" class="btn btn-primary">HOME</button><button type="button" class="btn btn-secondary">SALONS</button></div>';
  $(this).find('.carousel-item').append(buttonHtml);
  });
  });

  $('.carousel').on('slide.bs.carousel', function() {
    var $currentSlide = $(this).find('.carousel-item.active');
    var $caption = $currentSlide.find('.carousel-caption');
    var $img = $currentSlide.find('img');
  
    // Flip the caption from the bottom
    $caption.css('transform', 'translateY(100%)');
  
    // Apply the image scale animation
    $img.css('transform', 'scale(1)');
  });
  
  $('.carousel').on('slid.bs.carousel', function() {
    var $nextSlide = $(this).find('.carousel-item.active');
    var $caption = $nextSlide.find('.carousel-caption');
    var $img = $nextSlide.find('img');
  
    // Flip the caption from the bottom
    $caption.css('transform', 'translateY(0)');
  
    // Apply the image scale animation
    $img.css('transform', 'scale(1.1)');
  });
  

  
  

  // video slider
  $(document).ready(function() {
    // Activate the video slider
    $('#video-slider').carousel({
      interval: 5000, // Set the interval for auto sliding
      pause: 'hover', // Pause when mouse is over the slider
      keyboard: true, // Allow keyboard navigation
      ride: 'carousel' // Start sliding on page load
    });
  });
  








