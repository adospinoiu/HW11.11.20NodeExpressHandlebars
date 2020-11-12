// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".delete-burger").on("click", function (event) {
    const id = $(this).data("id");

    console.log(id);
    const newBurger = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurger
    }).then(
      function () {
        console.log("Ate a burger", newBurger);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  
  // This will add a new burger to the database
  $(".create-form").on("submit", function (event) {
    // Prevent default on a submit event.
    event.preventDefault();

    // Pull out the new burger name
    const newBurger = {
      name: $("#ca").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("Added New Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
