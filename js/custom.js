(function ($) {
  "use strict";

  $(document).ready(function () {
    /* ----------------------------------------------------------- */
    /*  AJAX CONTACT FORM
        /* ----------------------------------------------------------- */

    $(document).ready(function () {
      $(".contactform").on("submit", function (e) {
        // Prevent form submission for now
        e.preventDefault();

        // Get form data
        var name = $('input[name="name"]').val();
        var email = $('input[name="email"]').val();
        var subject = $('input[name="subject"]').val();
        var message = $('textarea[name="message"]').val();

        // Simple form validation
        if (name === "" || email === "" || subject === "" || message === "") {
          // Display error message if any field is empty
          $(".output_message").text(
            "All fields are required. Please fill in all the fields."
          );
        } else if (!isValidEmail(email)) {
          // Validate email format
          $(".output_message").text(
            "Invalid email address. Please enter a valid email."
          );
        } else {
          // If all fields are filled and email is valid, proceed with form submission
          var formData = $(this).serialize();
          submitForm(formData);
        }
      });

      // Function to validate email format
      function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }

      // Function to submit form data via AJAX
      function submitForm(formData) {
        Swal.fire({
          title: "Loading...",
          html:
            '<div class="spinkit">' +
            '<div class="rectangle1"></div>' +
            '<div class="rectangle2"></div>' +
            '<div class="rectangle3"></div>' +
            '<div class="rectangle4"></div>' +
            '<div class="rectangle5"></div>' +
            "</div>",
          showConfirmButton: false,
          allowOutsideClick: false,
        });
        $.ajax({
          type: "POST",
          url: "https://script.google.com/macros/s/AKfycbyo67qatSKv6rBJ6YKnQp-jLKOJ5DDNdr6RU1IcAlzqhn-KGho00Rv7TMpUDf_wugsq/exec",
          data: formData,
          success: function (response) {
            Swal.fire({
              title: "Done",
              text: response,
              icon: "success",
            });
          },
          error: function (xhr, status, error) {
            Swal.fire({
              title: "Oops...",
              text: "An error occurred! Try again later",
              icon: "error",
              buttons: true,
            });
            console.error(error);
          },
        });
      }
    });
  });

  $(document).keyup(function (e) {
    /* ----------------------------------------------------------- */
    /*  KEYBOARD NAVIGATION IN PORTFOLIO SLIDESHOW
			/* ----------------------------------------------------------- */
    if (e.keyCode === 27) {
      stop_videos();
      $(".close-content").click();
      $("#navbar-collapse-toggle").removeClass("hide-header");
    }
    if (e.keyCode === 37 || e.keyCode === 39) {
      stop_videos();
    }
  });
})(jQuery);
