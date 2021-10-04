// Preloader
$(window).on('load', function() {
  $('#preloader').delay(100).fadeOut('slow',function(){$(this).remove();});
});

class ResponsiveNav {
  constructor(options) {
    this.state = options.state;
    this.nav = options.nav;
    this.checkpoint = options.checkpoint;
    this.navContent = options.nav + ' *';
    this.tuggleBtn = options.tuggleBtn;
    this.tuggleBtnContent = options.tuggleBtn + ' *';
    this.navLink = options.navLink;
    this.navLinkContent = options.navLink + ' *';

    this.$nav = $(this.nav);

    this._eddClickEvents();
    this._addResizeEvent();
  }
  _addResizeEvent() {
    window.addEventListener('resize', () => {
      if (window.innerWidth > this.checkpoint) this._cleare();
    }, true);
  }
  _eddClickEvents() {
    document.addEventListener('click', e => {
      if (window.innerWidth > this.checkpoint) return;

      if ($(e.target).is(`${this.tuggleBtn}, ${this.tuggleBtnContent}`))
      this._toggleNav(true);else
      if ($(e.target).is(`${this.navLink}, ${this.navLinkContent}`))
      this._toggleNav(false);else
      if ($(e.target).is(`${this.nav}, ${this.navContent}`))
      return;else
      this._toggleNav(false);
    }, true);
  }
  _cleare() {
    this._toggleNav(false);
  }
  _toggleNav(ifNavClosed) {
    if (ifNavClosed || this.$nav.hasClass(this.state)) this.$nav.toggleClass(this.state);
  }}


class ChangeNavIfWindowScroll {
  constructor(options) {
    this.options = options;
    this.nav = document.querySelector(this.options.nav);
    this.state = this.options.state;
    this.heightActivateState = this.options.heightActivateState;

    this._startToggleState();
  }
  _startToggleState() {
    $(window).on('scroll', () => {
      let scrolled = window.pageYOffset || document.documentElement.scrollTop,
      classList = this.nav.classList;

      if (scrolled > this.heightActivateState) {
        if (!classList.contains(this.state)) classList.add(this.state);
      } else
      {
        if (classList.contains(this.state)) classList.remove(this.state);
      }
    });
  }}


class ScrollToAnchor {
  constructor(options) {

    this.nav = options.nav;
    this.topPosition = options.topPosition;
    this.animationTime = options.animationTime;

    this._run();
  }
  _run() {
    let that = this;

    $(`${this.nav} a[href^="#"]`).click(function () {
      var el = $(this).attr('href');

      //$('body, html').stop().animate({
        //scrollTop: $(el).offset().top - that.topPosition },
      //that.animationTime);

      //return false;
    });
  }}


// if HTML DOM is ready
window.onload = function () {
  // options for responsiveNav
  let navOptions = {
    nav: '.main-nav', // DOM elemrnt (class or id)
    tuggleBtn: '.tuggle-btn', // DOM elemrnt (class or id)
    tuggleContent: '.tuggle-content', // DOM elemrnt (class or id)
    navLink: '.nav-link', // DOM elemrnt (class or id)
    state: 'open', // Which (class or id) use to change 'nav' of page if will be the size to screen is less checkpoint.
    checkpoint: 991 // Size for screen width when we use mobile menu.
  };

  let responsiveNav = new ResponsiveNav(navOptions); // created new responsiveNav.

  // options for changeNavIfWindowScroll
  let changeNavIfWindowScrollOptions = {
    nav: '.main-nav', // DOM elemrnt (class or id)
    state: 'active', // Which (class or id) use to change 'nav' of page if will be the scroll.
    heightActivateState: 50 // aqui le cambiamos a cuantos pixeles aparece la otra navbar blanca.
  };

  // created new changeNavIfWindowScroll.
  let changeNavIfWindowScroll = new ChangeNavIfWindowScroll(changeNavIfWindowScrollOptions);

  // otptions for ScrollToAnchor
  let scrollToAnchorOptions = {
    nav: '.main-nav', // DOM elemrnt (class or id)
    topPosition: 100, // how many px to top position stop animation scroll (px)
    animationTime: 1000 // animation scroll time (ms)
  };

  // create new ScrollToAnchor 
  let scrollToAnchor = new ScrollToAnchor(scrollToAnchorOptions);
};

 /* Video Popup*/

 $(document).ready(function(){
  const videoSrc = $("#player-1").attr("src");
  $(".video-play-btn, .video-popup").on("click" , function(){
    if($(".video-popup").hasClass("open")){
      $(".video-popup").removeClass("open");
      $("#player-1").attr("src" , "");
    }
    else{
      $(".video-popup").addClass("open");
      if($("#player-1").attr("src")==''){
        $("#player-1").attr("src" , videoSrc);
      }
    }
  });
  });


  	//Top scroll

$(document).ready(function(){
  // muestra el scroll oculto
  $(window).scroll(function(){
      if($(this).scrollTop() > 100){
      $('.scrollTopTop').fadeIn();
  } else {
      $('.scrollTopTop').fadeOut();

  }
});
//smooth scrolling to top
$('.scrollTopTop').click(function(){
  $('html,body').animate({scrollTop: 0}, 100)//colocar animacion
})
});





/* CAROUSEL */


$(document).ready(function(){
  $('.features-carousel').owlCarousel({
    loop:true,
	margin:0,
	autoplay: true,
	/*Aqui cambiamos el tiemppo*/
	autoplayTimeout: 2700,
	autoplayHoverPause: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
   })
  });

  $(document).ready(function(){
	$('.team-carousel').owlCarousel({
	  loop:true,
	  margin:0,
	  autoplay: true,
	  /*Aqui cambiamos el tiemppo*/
	  autoplayTimeout: 3700,
	  autoplayHoverPause: true,
	  responsiveClass:true,
	  responsive:{
		  0:{
			  items:1,
		  },
		  600:{
			  items:2,
		  },
		  1000:{
			  items:3,
		  }
	  }
	 })
	});

	/*---------- Testimonial carousel -----------*/

	$(document).ready(function(){
		$('.testimonials-carousel').owlCarousel({
		  loop:true,
		  margin:0,
		  autoplay: true,
		  /*Aqui cambiamos el tiemppo*/
		  autoplayTimeout: 3700,
		  autoplayHoverPause: true,
		  responsiveClass:true,
		  responsive:{
			  0:{
				  items:1,
			  },
			  600:{
				  items:2,
			  },
			  1000:{
				  items:3,
			  }
		  }
		 })
		});


/*AOS Library*/

$(document).ready(function(){
  AOS.init({
    easing: 'ease',
    duration: 1000,
    once: true
    });
  });

