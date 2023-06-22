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


// image gallery 
$(document).ready(function() {
  $('[data-fancybox="gallery"]').fancybox({
    buttons: [
      "zoom",
      "slideShow",
      "thumbs",
      "close"
    ],
    loop: true
  });

})



  // when a star is clicked
  $('.rating i').on('click', function() {

    // remove the selected class from all stars
    $(this).siblings().removeClass('selected');

    // add the selected class to the clicked star and all previous stars
    $(this).addClass('selected');
    $(this).prevAll().addClass('selected');

  });

  
  

$(document).ready(function() {
  $('#booking-btn').click(function() {
    // Simulating unavailable booking dates
    var unavailableDates = [
      '2023-05-20',
      '2023-05-22',
      '2023-05-25'
    ];

    $('#booking-modal').modal('show');

    $('#calendar').fullCalendar({
      defaultView: 'month',
      selectable: true,
      select: function(start, end) {
        if (unavailableDates.includes(start.format('YYYY-MM-DD'))) {
          alert('Booking is not available on the selected date: ' + start.format('YYYY-MM-DD'));
        } else {
          alert('Booking is available on the selected date: ' + start.format('YYYY-MM-DD'));
        }
      },
      dayRender: function(date, cell) {
        if (unavailableDates.includes(date.format('YYYY-MM-DD'))) {
          cell.addClass('fc-unavailable');
        }
      }
    });
  });
});


// buttons 
var buttons = document.getElementsByClassName("btn");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    // Remove active class from all buttons
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove("active");
    }

    // Add active class to the clicked button
    this.classList.add("active");

    // Show the corresponding section
    var sectionId = this.id.replace("Btn", "Section");
    showSection(sectionId);
  });
}

document.getElementById("commentForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var comment = document.getElementById("comment").value;

  // Create a new comment element
  var commentElement = document.createElement("div");
  commentElement.className = "comment";
  commentElement.innerHTML = "<h4>" + name + "</h4>" +
                             "<p>Email: " + email + "</p>" +
                             "<p>Comment: " + comment + "</p>";

  // Append the comment element to the comments container
  var commentsContainer = document.getElementById("commentsContainer");
  commentsContainer.appendChild(commentElement);

  // Reset the form
  document.getElementById("commentForm").reset();
});

function showSection(sectionId) {
  var sections = document.getElementsByClassName("section");
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }

  var section = document.getElementById(sectionId);
  if (section) {
    section.style.display = "block";
  }
}


//   footer
// Zoom in/out effect on social media buttons
const socialButtons = document.querySelectorAll('.social-links .btn');
socialButtons.forEach((button) => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.2)';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});
