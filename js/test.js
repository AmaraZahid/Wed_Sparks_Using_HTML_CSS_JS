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
$("#back-to-top-btn").click(function() {
  $("html, body").animate({scrollTop: 0}, 1000);
});

// Show or hide the "Back to Top" button based on scroll position
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $("#back-to-top-btn").fadeIn();
  } else {
    $("#back-to-top-btn").fadeOut();
  }
});

// Search bar

// Get the input elements and the search button
const searchInput = document.querySelector('input[type="text"]');
const dateInput = document.querySelector('input[type="date"]');
const citySelect = document.querySelector('#city');
const searchButton = document.querySelector('button');

// Add an event listener to the search button
searchButton.addEventListener('click', () => {
  // Get the values of the input fields
  const searchValue = searchInput.value;
  const dateValue = dateInput.value;
  const cityValue = citySelect.value;

  // Construct the search query based on the input values
  let searchQuery = '';
  if (searchValue) {
    searchQuery += `&q=${searchValue}`;
  }
  if (dateValue) {
    searchQuery += `&date=${dateValue}`;
  }
  if (cityValue) {
    searchQuery += `&city=${cityValue}`;
  }

  // Redirect the user to the search results page with the search query
  window.location.href = `search-results.html?${searchQuery}`;
});

// image slider \
$(document).ready(function() {
$('.carousel').carousel({
  interval: 5000,
  pause: 'hover'
});

$('.carousel').on('slid.bs.carousel', function() {
  var currentIndex = $('.carousel-item.active').index() + 1;
  $('.carousel-indicators li').removeClass('active');
  $('.carousel-indicators li:nth-child(' + currentIndex + ')').addClass('active');
});

$('.carousel-caption').wrapInner('<div class="container"></div>');

$('.carousel').each(function() {
  var captionHeight = $(this).find('.carousel-caption').outerHeight();
  var captionPadding = parseInt($(this).find('.carousel-caption').css('padding-top'));
  $(this).find('.carousel-inner').css('padding-bottom', captionHeight + (captionPadding * 2) + 'px');
});

$('.carousel').each(function() {
  var carouselId = $(this).attr('id');
  var carouselItems = $(this).find('.carousel-item').length;
  $('<ol class="carousel-indicators"></ol>').insertBefore('#' + carouselId + ' .carousel-inner');
  for (var i = 0; i < carouselItems; i++) {
    var indicatorActive = (i === 0) ? 'active' : '';
    $('<li data-target="#' + carouselId + '" data-slide-to="' + i + '" class="' + indicatorActive + '"></li>').appendTo('#' + carouselId + ' .carousel-indicators');
  }
});

$('.carousel').each(function() {
  var buttonHtml = '<div class="carousel-button-container"><button type="button" class="btn btn-primary">HOME</button><button type="button" class="btn btn-secondary">SALONS</button></div>';
  $(this).find('.carousel-item').append(buttonHtml);
});
});

//js for filter// Remove filters
$('.remove-filter a').click(function(e) {
  e.preventDefault();
  $('input[type=checkbox]').prop('checked', false);
  $('select').prop('selectedIndex',0);
  $('input[type=number]').val('');
  $('#filterDate').val('');
});

// Show/hide subarea select field based on selected city
$('input[name=city]').click(function() {
  var city = $(this).val();
  if(city == 'City 1') {
    $('#subarea1').show();
    $('#subarea2').hide();
  } else if(city == 'City 2') {
    $('#subarea1').hide();
    $('#subarea2').show();
  } else {
    $('#subarea1').hide();
    $('#subarea2').hide();
  }
});

// Filter results based on selected options
$('#filterForm').submit(function(e) {
  e.preventDefault();
  
  // Get selected city and subarea
  var city = $('input[name=city]:checked').val();
  var subarea = $('select[name=subarea]').val();
  
  // Get selected price range
  var minPrice = $('#min-price').val();
  var maxPrice = $('#max-price').val();
  
  // Get selected services
  var services = [];
  $('input[name=services]:checked').each(function() {
    services.push($(this).val());
  });
  
  // Get selected cancellations policy
  var policy = $('select[name=policy]').val();
  
  // Get selected date
  var filterDate = $('#filterDate').val();
  
  // TODO: Perform filtering logic based on selected options
  
  // Example: Alert selected options
  var message = 'Selected Options:\n\nCity: ' + city + '\nSubarea: ' + subarea + '\nMin Price: ' + minPrice + '\nMax Price: ' + maxPrice + '\nServices: ' + services.join(', ') + '\nPolicy: ' + policy + '\nFilter Date: ' + filterDate;
  alert(message);
});


// Get the button:
let mybutton = document.getElementById("back-to-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
