// Hide contents and fade in slowly
$(document).ready(function() {
  $("body").fadeOut(1,function () {
    $("body").fadeIn(5000);
  });

  // Give each paragraph a yellow background only when the mouse is over it.
  $("p").on("mouseenter", function() {
    $(this).css({
      "background-color": "yellow"
    });
  })
  .on("mouseleave", function() {
    $(this).css({
      "background-color": ""
  });
});

  // Set up a click event on every <h2> element that simultaneously fades it to 25 percent opacity while growing its left-hand margin to 20px. Then, when this animation is complete, fade the speech text to 50 percent opacity.
  $("h2").on("click", function() {
    $(this).animate({
      "margin-left":"20px",
      "opacity":".25"
    }, function (){
      $(".speech").animate({
        "opacity":".50"
      });
    });
  });

  // Make the style switcher work.

  // React to presses of the arrow keys by smoothly moving the switcher box 20 pixels in the corresponding direction. The key codes for the arrow keys are: 37 (left), 38 (up), 39 (right), and 40 (down).

});
