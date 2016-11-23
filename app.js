// Hide contents and fade in slowly
$(document).ready(function() {
  $("body").fadeIn(5000);

  // Give each paragraph a yellow background only when the mouse is over it.
  $("p").on("mouseenter", function() {
    $(this).css({
      "background-color": "yellow"
    });
  })
  .on("mouseleave", function() {
    // $(this).css({
    //   "background-color": ""
    $(this).removeAttr("style");
  });

  // Set up a click event on every <h2> element that simultaneously fades it to 25 percent opacity while growing its left-hand margin to 20px. Then, when this animation is complete, fade the speech text to 50 percent opacity.
  $("h2").on("click", function() {
    $(this).animate({
      "margin-left":"20px",
      "opacity":".25"
    }, 2000, function (){
      $(".speech").animate({
        "opacity":".50"
      });
    });
  });

  // Make the style switcher work
  $("#switcher-default").on("click", function() {
    $("body").css("font-size", "62.5%");
  });
  $("#switcher-large").on("click", function() {
    // $("body").css("font-size", 100%);
    $("body").css("font-size", "+=5%");
  });
  $("#switcher-small").on("click", function() {
    // $("body").css("font-size", 50%);
    $("body").css("font-size", "-=5%");
  });

  // React to presses of the arrow keys by smoothly moving the switcher box 20 pixels in the corresponding direction. The key codes for the arrow keys are: 37 (left), 38 (up), 39 (right), and 40 (down).

  $(document).on("keydown", function(event) {
    console.log(event.which, "KEY PRESSED");
    var keyPressed = event.which;
    if (keyPressed === 37) {
      $("#switcher").stop().animate({
        "margin-left": "-=20px"
      });
    } else if (keyPressed === 38) {
      $("#switcher").stop().animate({
        "margin-top": "-=20px"
      });
    } else if (keyPressed === 39) {
      $("#switcher").stop().animate({
        "margin-left": "+=20px"
      });
    } else if (keyPressed === 40) {
        $("#switcher").stop().animate({
          "margin-top": "+=20px"
        });
    }
  });

});
