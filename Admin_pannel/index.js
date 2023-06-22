$(document).ready(function(){

    // Show/hide sidebar on click
    $(".navbar-toggler").click(function(){
      $(".collapse").toggle();
    });
  
    // Display modal for adding a new service
    $("#add-service-btn").click(function(){
      $("#add-service-modal").modal();
    });
  
    // Display modal for editing a service
    $(".edit-service-btn").click(function(){
      var serviceId = $(this).data("service-id");
      $("#edit-service-modal-" + serviceId).modal();
    });
  
    // Display modal for deleting a service
    $(".delete-service-btn").click(function(){
      var serviceId = $(this).data("service-id");
      $("#delete-service-modal-" + serviceId).modal();
    });
  
    // Display modal for adding a new booking
    $("#add-booking-btn").click(function(){
      $("#add-booking-modal").modal();
    });
  
    // Display modal for editing a booking
    $(".edit-booking-btn").click(function(){
      var bookingId = $(this).data("booking-id");
      $("#edit-booking-modal-" + bookingId).modal();
    });
  
    // Display modal for deleting a booking
    $(".delete-booking-btn").click(function(){
      var bookingId = $(this).data("booking-id");
      $("#delete-booking-modal-" + bookingId).modal();
    });
  
  });
  