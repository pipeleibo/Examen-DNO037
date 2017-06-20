/** *************Init JS*********************
 ** ***************************************/

 "use strict";
/*****Load function start*****/
$(window).load(function(){
	$(".preloader-it").delay(500).fadeOut("slow");
	if(window.location.href.indexOf("index.html#") > -1)
		$("html, body").animate({scrollTop: $(window.location.hash).offset().top - 50 }, 800);
});
/*****Load function* end*****/

/***** Set height-width function start *****/
var setHeightWidth = function () {
	var height = $(window).height();
	$('.full-height').css('min-height', (height));
	$('#map_canvas').height($('#form_card_height').height());
	$('.full-width-header').width($('.main-wrapper').width());
};
/***** Set height-width function end *****/

/***** resume function start *****/
var matResume = function () {
	/*SmoothScroll*/
	smoothScroll.init({
		speed: 800,
		easing: 'easeInOutCubic',
		offset: 50,
		updateURL: false,
		callbackBefore: function ( toggle, anchor ) {},
		callbackAfter: function ( toggle, anchor ) {},
	});

	/*Scrollspy*/
	var bodySel = $("#body");
	bodySel.scrollspy({ target: ".mdl-scroll-spy-1",offset:52 });
	var scollSpy2ActiveLI = "";
	bodySel.on('activate.bs.scrollspy', function () {
		if (scollSpy2ActiveLI != "") {
			scollSpy2ActiveLI.removeClass('active');
		}
		var activeTab = $('.mdl-scroll-spy-1 li.active a').attr('href');
		scollSpy2ActiveLI = $('.mdl-scroll-spy-2 li a[href="' + activeTab + '"]').parent();
		scollSpy2ActiveLI.addClass('active');
	})
	bodySel.trigger('activate.bs.scrollspy');

	/*Progressbar animation*/
	var progressBar = $('.progress-bar-graph div');
	for(var i = 0; i < progressBar.length; i++){
		$(progressBar[i]).appear(function(){
			var percent = $(this).find('span').attr('data-width');
			var $endNum = parseInt($(this).find('.bar-wrap strong i').text(),10);

			var $that = $(this);
			$(this).find('span').animate({
				'width' : percent + '%'
			},1600, function(){
			});
			$(this).find('.bar-wrap strong').animate({
				'opacity' : 1
			},1400);
			if(percent == '100'){
				$that.find('bar-wrap strong').addClass('full');
			}
		});
	}

	/*Slimscroll*/
	$('.nicescroll-bar').slimscroll({height:'100%',color: '#01c853',opacity:1,size:5});

	/*Referencias carrusel*/
	$('.testimonial-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		navText: ["<i class='zmdi zmdi-arrow-left'></i>","<i class='zmdi zmdi-arrow-right'></i>"],
		dots:false,
		autoplay:true,
		responsive:{
			0:{
				items:1
			}
		}
	});

	/*Clientes carrusel*/
	$('#client_sec .client-carousel').owlCarousel({
		loop:true,
		margin:15,
		nav:false,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			200:{
				items:2
			},
			400:{
				items:3
			},
			600:{
				items:4
			},
			1300:{
				items:5
			}
		}
	});
};
/***** resume function end *****/

/***** Portafolio function start *****/
if( $('.portfolio-wrap').length > 0 ){
	var $container = $('.portf'),
	$body = $('body');

	/*Filtro*/
	$(document).on( "click", "#filters a", function(e) {
		$('#filters a').removeClass('active');
		$(this).addClass('active');
		var selector = $(this).attr('data-filter');
		$('#portfolio').isotope({ filter: selector });
		return false;
	});
	/*Filtro*/

	/*On Resize Portafolio Function*/
	var onResizePort= function() {
		$body.find('.portf').each(function () {
			var winWidth = window.innerWidth;
			var container_mock = $('.gallery-wrap').width();
			columnNumb = 1;
			var attr_col = $(this).attr('data-col');

			 if (winWidth >= 1466) {

				$('.portfolio-wrap').css( {width : container_mock});
				$('.portfolio-wrap.no-gutter').css( {width : container_mock});
				$('.portfolio-wrap.no-gutter.full-width').css( {width : 100  + '%'});
				var portfolioWidth = $('.portfolio-wrap').width();

				if (typeof attr_col !== typeof undefined && attr_col !== false) {
					columnNumb = $(this).attr('data-col');
				} else columnNumb = 3;

				var postWidth = Math.floor(portfolioWidth / columnNumb)
				$(this).find('.item').each(function () {
					$(this).css( {
						width : postWidth - 20 + 'px',
						height : 'auto',
						margin : 10 + 'px'
					});
					$('.no-gutter .'+$(this).attr('class')).css( {
						width : postWidth  + 'px',
						height : 'auto',
						margin : 0 + 'px'
					});
					$('.wide.'+$(this).attr('class')).css( {
						width : postWidth * 2 - 20 + 'px'
					});
					$('.no-gutter .wide.'+$(this).attr('class')).css( {
						width : postWidth * 2 + 'px'
					});
					$('.tall.'+$(this).attr('class')).css( {
						height : 'auto'
					});
					$('.small.'+$(this).attr('class')).css( {
						height : 'auto',
					});

					$('.no-gutter .tall.'+$(this).attr('class')).css( {
						height : 'auto',
					});
					$('.wide-tall.'+$(this).attr('class')).css( {
						width : postWidth * 2 - 20 + 'px',
						height : postWidth * 2 - 20 + 'px'
					});
					$('.no-gutter .wide-tall.'+$(this).attr('class')).css( {
						width : postWidth * 2 + 'px',
						height : 'auto',
					});
				});


			} else if (winWidth > 1024) {

				$('.portfolio-wrap').css( {width : container_mock});
				$('.portfolio-wrap.no-gutter').css( {width : container_mock});
				var portfolioWidth = $('.portfolio-wrap').width();

				if (typeof attr_col !== typeof undefined && attr_col !== false) {
					columnNumb = $(this).attr('data-col'); //alert(columnNumb);
				} else columnNumb = 3;

				postWidth = Math.floor(portfolioWidth / columnNumb)
				$(this).find('.item').each(function () {

					$(this).css( {
						width : postWidth - 20 + 'px',
						height : 'auto',
						margin : 10 + 'px'
					});

					$('.no-gutter .' +$(this).attr('class')).css( {
						width : postWidth  + 'px',
						height : 'auto',
						margin : 0 + 'px'
					});
					$('.wide.'+$(this).attr('class') ).css( {
						width : postWidth * 2 - 20 + 'px'
					});
					$('.no-gutter .wide.'+$(this).attr('class')).css( {
						width : postWidth * 2 + 'px'
					});
					$('.tall.'+$(this).attr('class')).css( {
						height : 'auto',
					});
					$('.small.'+$(this).attr('class')).css( {
						height : 'auto',
					});
					$('.no-gutter .tall.'+$(this).attr('class')).css( {
						height : 'auto',
					});
					$('.wide-tall.'+$(this).attr('class')).css( {
						width : postWidth * 2 - 20 + 'px',
						height : 'auto',
					});
					$('.no-gutter .wide-tall.'+$(this).attr('class')).css( {
						width : postWidth * 2 + 'px',
						height : 'auto',
					});
				});


			} else if (winWidth > 767) {

				$('.portfolio-wrap').css( {width : container_mock});
				$('.portfolio-wrap.no-gutter').css({width : container_mock});
				var portfolioWidth = $('.portfolio-wrap').width(),

				columnNumb = 2;
				postWidth = Math.floor(portfolioWidth / columnNumb)
				$(this).find('.item').each(function () {
					$(this).css( {
						width : postWidth - 20 + 'px',
						height : 'auto',
						margin : 10 + 'px'
					});
					$('.no-gutter .'+$(this).attr('class')).css( {
						width : postWidth  + 'px',
						height : 'auto',
						margin : 0 + 'px'
					});
					$('.wide.'+$(this).attr('class')).css( {
						width : postWidth * 2 - 20 + 'px'
					});
					$('.no-gutter .wide.'+$(this).attr('class')).css( {
						width : postWidth * 2 + 'px'
					});
					$('.tall.'+$(this).attr('class')).css( {
						height : 'auto',
					});
					$('.small.'+$(this).attr('class')).css( {
						height : 'auto',
					});
					$('.no-gutter .tall.'+$(this).attr('class')).css( {
						height : 'auto',
					});
					$('.wide-tall.'+$(this).attr('class')).css( {
						width : postWidth * 2 - 20 + 'px',
						height : postWidth   + 'px',
					});
					$('.no-gutter .wide-tall.'+$(this).attr('class')).css( {
						width : postWidth * 2 + 'px',
						height : 'auto',
					});
				});


			}	else if (winWidth > 479) {

				$('.portfolio-wrap').css( {width : container_mock});
				$('.portfolio-wrap.no-gutter').css( {width : container_mock});
				var portfolioWidth = $('.portfolio-wrap').width(),

				columnNumb = 1;
				postWidth = Math.floor(portfolioWidth / columnNumb)
				$(this).find('.item').each(function () {
					$(this).css( {
						width : postWidth - 20 + 'px',
						height : 'auto',
						margin : 10 + 'px'
					});
					$('.no-gutter .'+$(this).attr('class')).css( {
						width : postWidth  + 'px',
						height : 'auto',
						margin : 0 + 'px'
					});
					$('.wide.'+$(this).attr('class')).css( {
						width : postWidth - 20 + 'px'
					});
					$('.no-gutter .wide.'+$(this).attr('class')).css( {
						width : postWidth + 'px'
					});
					$('.tall.'+$(this).attr('class')).css( {
						height : 'auto',
					});
					$('.small.'+$(this).attr('class')).css( {
						height : 'auto',
					});
					$('.no-gutter .tall.'+$(this).attr('class')).css( {
						height : 'auto',
					});
					$('.wide-tall.'+$(this).attr('class')).css( {
						width : postWidth - 20 + 'px',
						height : postWidth   + 'px',
					});
					$('.no-gutter .wide-tall.'+$(this).attr('class')).css( {
						width : postWidth  + 'px',
						height : postWidth   + 'px',
					});
				});


			}

			else if (winWidth <= 479) {

				$('.portfolio-wrap').css( {width : container_mock});
				$('.portfolio-wrap.no-gutter').css( {width : container_mock});
				var portfolioWidth = $('.portfolio-wrap').width(),

				columnNumb = 1;
				postWidth = Math.floor(portfolioWidth / columnNumb)
				$(this).find('.item').each(function () {
					$(this).css( {
						width : postWidth - 20 + 'px',
						height : 'auto',
						margin : 10 + 'px'
					});
					$('.no-gutter .'+$(this).attr('class')).css( {
						width : postWidth  + 'px',
						height : 'auto',
						margin : 0 + 'px'
					});
					$('.wide.'+$(this).attr('class')).css( {
						width : postWidth - 20 + 'px'
					});
					$('.no-gutter .wide.'+$(this).attr('class')).css( {
						width : postWidth + 'px'
					});
					$('.tall.'+$(this).attr('class')).css( {
						height : 'auto',
					});
					$('.small.'+$(this).attr('class')).css( {
						height : 'auto',
					});
					$('.no-gutter .tall.'+$(this).attr('class')).css( {
						height : 'auto',
					});
					$('.wide-tall.'+$(this).attr('class')).css( {
						width : postWidth - 20 + 'px',
						height : postWidth   + 'px',
					});
					$('.no-gutter .wide-tall.'+$(this).attr('class')).css( {
						width : postWidth + 'px',
						height : postWidth   + 'px',
					});
				});


			}
			//alert();

			//return columnNumb;
		});
		$container.isotope({
			itemSelector: '.item',
			gutter:0,
			layoutMode: 'packery',
			transitionDuration: "0.8s"
		});
	};
	/*On Resize Portfolio Function*/
}
/***** Portafolio function End *****/

/*****Ready function start*****/
$(document).ready(function(){
  matResume();
});
/*****Ready function end*****/

/***** Resize function start *****/
$(window).on("resize", function () {
	setHeightWidth();
	onResizePort();
}).resize();
/***** Resize function end *****/

/***** LightGallery init start *****/
$(document).on('click', '#goto_box_1', function (e) {
	e.preventDefault();
    $(this).lightGallery({
        dynamic: true,
		thumbnail: false,
		hash:false,
		autoplay:false,
        dynamicEl: [{
            "poster": 'img/gallery1.jpg',
			"html":'#video1',
            'subHtml': '<h4>HeyHey</h4><p>Share your voice in a fun and simple way.</p>'
        }, {
            'src': 'img/gallery2.jpg',
            'subHtml': "<h4>HeyHey</h4><p>Share your voice in a fun and simple way.</p>"
        }]
    })

});

$(document).on('click', '#goto_box_2', function (e) {
	e.preventDefault();
    $(this).lightGallery({
        dynamic: true,
		thumbnail: false,
		hash:false,
		autoplay:true,
        dynamicEl: [{
          "poster": 'img/gallery3.jpg',
    "html":'#video1',
          'subHtml': '<h4>HeyHey</h4><p>Share your voice in a fun and simple way.</p>'
      }, {
          'src': 'img/gallery4.jpg',
          'subHtml': "<h4>HeyHey</h4><p>Share your voice in a fun and simple way.</p>"
      }]
  })

});

$(document).on('click', '#goto_box_3', function (e) {
	e.preventDefault();
    $(this).lightGallery({
        dynamic: true,
		thumbnail: false,
		hash:false,
		autoplay:true,
        dynamicEl: [{
          "poster": 'img/gallery5.jpg',
    "html":'#video1',
          'subHtml': '<h4>HeyHey</h4><p>Share your voice in a fun and simple way.</p>'
      }, {
          'src': 'img/gallery6.jpg',
          'subHtml': "<h4>HeyHey</h4><p>Share your voice in a fun and simple way.</p>"
      }]
  })

});

$(document).on('click', '#goto_box_4', function (e) {
	e.preventDefault();
    $(this).lightGallery({
        dynamic: true,
		thumbnail: false,
		hash:false,
		autoplay:true,
        dynamicEl: [{
          "poster": 'img/gallery7.jpg',
    "html":'#video1',
          'subHtml': '<h4>HeyHey</h4><p>Share your voice in a fun and simple way.</p>'
      }, {
          'src': 'img/gallery8.jpg',
          'subHtml': "<h4>HeyHey</h4><p>Share your voice in a fun and simple way.</p>"
      }]
  })

});

$(document).on('click', '#goto_box_5', function (e) {
	e.preventDefault();
    $(this).lightGallery({
        dynamic: true,
		thumbnail: false,
		hash:false,
		autoplay:true,
        dynamicEl: [{
          "poster": 'img/gallery9.jpg',
    "html":'#video1',
          'subHtml': '<h4>HeyHey</h4><p>Share your voice in a fun and simple way.</p>'
      }, {
          'src': 'img/gallery10.jpg',
          'subHtml': "<h4>HeyHey</h4><p>Share your voice in a fun and simple way.</p>"
      }]
  })

});

$(document).on('click', '#goto_box_6', function (e) {
	e.preventDefault();
    $(this).lightGallery({
        dynamic: true,
		thumbnail: false,
		hash:false,
		autoplay:true,
        dynamicEl: [{
          "poster": 'img/gallery11.jpg',
    "html":'#video1',
          'subHtml': '<h4>HeyHey</h4><p>Share your voice in a fun and simple way.</p>'
      }, {
          'src': 'img/gallery12.jpg',
          'subHtml': "<h4>HeyHey</h4><p>Share your voice in a fun and simple way.</p>"
      }]
  })

});
/***** LightGallery init end*****/
