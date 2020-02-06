jQuery.fn.center = function() {
    this.css("position", "absolute");
    this.css("top", ($(window).height() - this.height()) / 2 + $(window).scrollTop() + "px");
    this.css("left", ($(window).width() - this.width()) / 2 + $(window).scrollLeft() + "px");
    return this;
  }



$(".img1").on("mouseenter", function() {
    $(".img1").addClass("visible").animate({'zoom': 1.2  }, 600).delay(100);
    
  });

  $(".img1").on("mouseleave", function() {
    $(".img1").addClass("visible").animate({ 'zoom': 1}, 600);
  });




  $(".img2").on("mouseenter", function() {
    $(".img2").addClass("visible").animate({'zoom': 1.2  }, 600).delay(100);
    
  });

  $(".img2").on("mouseleave", function() {
    $(".img2").addClass("visible").animate({ 'zoom': 1}, 600);
  });



  $(".img3").on("mouseenter", function() {
    $(".img3").addClass("visible").animate({'zoom': 1.2  }, 600).delay(100);
    
  });

  $(".img3").on("mouseleave", function() {
    $(".img3").addClass("visible").animate({ 'zoom': 1}, 600);
  });



  $(".img4").on("mouseenter", function() {
    $(".img4").addClass("visible").animate({'zoom': 1.2  }, 600).delay(100);
    
  });

  $(".img4").on("mouseleave", function() {
    $(".img4").addClass("visible").animate({ 'zoom': 1}, 600);
  });



  $(".img5").on("mouseenter", function() {
    $(".img5").addClass("visible").animate({'zoom': 1.2  }, 600).delay(100);
    
  });

  $(".img5").on("mouseleave", function() {
    $(".img5").addClass("visible").animate({ 'zoom': 1}, 600);
  });


  $(".img6").on("mouseenter", function() {
    $(".img6").addClass("visible").animate({'zoom': 1.2  }, 600).delay(100);
    
  });

  $(".img6").on("mouseleave", function() {
    $(".img6").addClass("visible").animate({ 'zoom': 1}, 600);
  });