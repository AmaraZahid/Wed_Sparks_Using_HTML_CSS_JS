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

//js for filter
// Get the filter checkboxes
const checkboxes = document.querySelectorAll('.filter input[type="checkbox"]');

// Add event listener to each checkbox
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', (event) => {
    filterContent();
  });
});

// Get the cancellation radio buttons
const cancellationRadios = document.querySelectorAll('.cancellation-policy input[type="radio"]');

// Add event listener to each radio button
cancellationRadios.forEach((radio) => {
  radio.addEventListener('change', (event) => {
    filterContent();
  });
});

// Get the date input
const dateInput1 = document.querySelector('.calendar input[type="date"]');

// Add event listener to the date input
dateInput.addEventListener('change', (event) => {
  filterContent();
});

// Function to filter content based on selected filters
function filterContent() {
  // Get the selected filters
  const selectedFilters = {
    cities: [],
    subareas: [],
    price: '',
    services: '',
    cancellation: '',
    date: '',
  };

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const filterType = checkbox.name;
      const filterValue = checkbox.value;
      selectedFilters[filterType].push(filterValue);
    }
  });

  cancellationRadios.forEach((radio) => {
    if (radio.checked) {
      selectedFilters.cancellation = radio.value;
    }
  });

  selectedFilters.date = dateInput.value;

  // Filter the content based on selected filters
  // Add your code here to display the filtered content
}

/* body section */
// Script for the active button
$(document).ready(function() {
  $(".btn-custom").click(function() {
    $(".btn-custom").removeClass("active");
    $(this).addClass("active");
  });
});

// pagination
// Get all the page links and buttons
const pageLinks = document.querySelectorAll('.page-link');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Set the initial active page to 1
let activePage = 1;

// Add click event listener to each page link
pageLinks.forEach(pageLink => {
  pageLink.addEventListener('click', () => {
    // Remove active class from all page links
    pageLinks.forEach(pageLink => {
      pageLink.classList.remove('active');
    });
    
    // Set the clicked page as active
    activePage = parseInt(pageLink.textContent);
    pageLink.classList.add('active');
  });
});

// Add click event listener to the previous button
prevBtn.addEventListener('click', () => {
  // If the active page is greater than 1, decrement the active page and set it as active
  if (activePage > 1) {
    activePage--;
    pageLinks.forEach(pageLink => {
      if (parseInt(pageLink.textContent) === activePage) {
        pageLink.classList.add('active');
      } else {
        pageLink.classList.remove('active');
      }
    });
  }
});

// Add click event listener to the next button
nextBtn.addEventListener('click', () => {
  // If the active page is less than the total number of pages, increment the active page and set it as active
  if (activePage < pageLinks.length) {
    activePage++;
    pageLinks.forEach(pageLink => {
      if (parseInt(pageLink.textContent) === activePage) {
        pageLink.classList.add('active');
      } else {
        pageLink.classList.remove('active');
      }
    });
  }
});

