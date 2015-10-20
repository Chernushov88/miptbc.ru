$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});


$(document).ready(function() {
 
  var lwo = $("#lwo-demo");
 
  lwo.lwoCarousel({
      items : 7, //10 items above 1000px browser width
      itemsDesktop : [1000,5], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });
 
  // Custom Navigation Events
  $(".next").click(function(){
    lwo.trigger('lwo.next');
  })
  $(".prev").click(function(){
    lwo.trigger('lwo.prev');
  })
  $(".play").click(function(){
    lwo.trigger('lwo.play',1000); //lwo.play event accept autoPlay speed as second parameter
  })
  $(".stop").click(function(){
    lwo.trigger('lwo.stop');
  })
 
});

$(document).ready(function(){
	
	$(".button_menu").click(function(){
		$(this).next().slideToggle();
	})
})