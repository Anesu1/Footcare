$('header ul li').on('click', function () {
  
  $('header ul li').removeClass('active');
  var $this = $(this);
  if (!$this.hasClass('active')) {
      $this.addClass('active');   
  }
  
});


$('header label').on('click', function () {
  
  document.querySelector("header").classList.toggle("active");
  
});

$(window).on('scroll', function(){
  if($(window).scrollTop()){
  $('header').addClass('scrollDown')
  }
  else{
  $('header').removeClass('scrollDown')
  }
  })


  AOS.init();