$(document).ready(function(){
	var anchor = $('.home');
	$(window).scroll(function() {
	  if($(this).scrollTop() > 450){
  		$(anchor).removeClass('home')
      $(anchor).addClass('scrolled');
	  }
	  else{
  		$(anchor).addClass('home');
      $(anchor).removeClass('scrolled');
	  }
  });
});