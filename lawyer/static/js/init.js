/*
 * Copyright (c) 2021 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	cavani_tm_page_transition();
	cavani_tm_trigger_menu();
	cavani_tm_my_progress();
	cavani_tm_circular_progress();
	cavani_tm_portfolio_popup();
	cavani_tm_news_popup();
	cavani_tm_cursor();
	cavani_tm_imgtosvg();
	cavani_tm_popup();
	cavani_tm_portfolio();
	cavani_tm_data_images();
	cavani_tm_contact_form();
	cavani_tm_mycarousel();
	hashtag();
	cavani_tm_ripple();
	
	jQuery(window).load('body', function(){
		cavani_tm_my_load();
	});
	
});

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------

// -----------------------------------------------------
// -------------   PAGE TRANSITION    ------------------
// -----------------------------------------------------

function cavani_tm_page_transition(){
	
	"use strict";
	
	var section 		= jQuery('.cavani_tm_section');
	var allLi 			= jQuery('.transition_link li');
	var button			= jQuery('.transition_link a');
	var wrapper 		= jQuery('.cavani_tm_all_wrap');
	var enter	 		= wrapper.data('enter');
	var exit		 	= wrapper.data('exit');
	
	button.on('click',function(){
		var element 	= jQuery(this);
		var href		= element.attr('href');
		if(element.parent().hasClass('cavani_tm_button')){
			jQuery('.menu .transition_link a[href="'+href+'"]').trigger('click');
			hashtag();
			return false;
		}
		var sectionID 	= jQuery(href);
		var parent	 	= element.closest('li');
			if(!parent.hasClass('active')) {
				allLi.removeClass('active');
				wrapper.find(section).removeClass('animated '+enter);
				if(wrapper.hasClass('opened')) {
					wrapper.find(section).addClass('animated '+exit);
				}
				parent.addClass('active');
				wrapper.addClass('opened');
				wrapper.find(sectionID).removeClass('animated '+exit).addClass('animated '+enter);
				jQuery(section).addClass('hidden');
				jQuery(sectionID).removeClass('hidden').addClass('active');
			}
		return false;
	});
}

// -----------------------------------------------------
// ---------------   TRIGGER MENU    -------------------
// -----------------------------------------------------

function cavani_tm_trigger_menu(){
	
	"use strict";

	var hamburger 		= jQuery('.cavani_tm_topbar .trigger .hamburger');
	var mobileMenu		= jQuery('.cavani_tm_mobile_menu');
	var mobileMenuList	= jQuery('.cavani_tm_mobile_menu ul li a');

	hamburger.on('click',function(){
		var element 	= jQuery(this);

		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.removeClass('opened');
		}else{
			element.addClass('is-active');
			mobileMenu.addClass('opened');
		}
		return false;
	});
	
	mobileMenuList.on('click',function(){
		jQuery('.cavani_tm_topbar .trigger .hamburger').removeClass('is-active');
		mobileMenu.removeClass('opened');
		return false;
	});
}

// -------------------------------------------------
// -------------  PROGRESS BAR  --------------------
// -------------------------------------------------

function cavani_tm_my_progress(){
	
	"use strict";
	
	jQuery('.progress_inner').each(function() {
		var progress 		= jQuery(this);
		var pValue 			= parseInt(progress.data('value'), 10);
		var pColor			= progress.data('color');
		var pBarWrap 		= progress.find('.bar');
		var pBar 			= progress.find('.bar_in');
		pBar.css({width:pValue+'%', backgroundColor:pColor});
		setTimeout(function(){pBarWrap.addClass('open');});
	});
}

// -----------------------------------------------------
// ---------------   CIRCULAR PROGRESS   ---------------
// -----------------------------------------------------

function cavani_tm_circular_progress(){
	
	"use strict";
	
	var ww		= jQuery(window).width();
	var circVal;
	
	if(ww > 1400){
		circVal = 120;
	}
	else if(ww >= 768){
		circVal = 100;
	}
	else{
		circVal = 80;
	}
	
	jQuery('.circular_progress_bar .myCircle').each(function(){
		var element	= jQuery(this);
		element.append('<span class="number"></span>');
		var value	= element.data('value');
		element.circleProgress({
			size: circVal,
			value: 0,
			animation: {duration: 1400},
			thickness: 3,
			fill: "#7d7789",
			emptyFill: 'rgba(0,0,0,0)',
			startAngle: -Math.PI/2
		}).on('circle-animation-progress', function(event, progress, stepValue) {
				element.find('.number').text(parseInt(stepValue.toFixed(2)*100) + '%');
		});
		element.circleProgress('value', 1.0);
		setTimeout(function() { element.circleProgress('value', value); }, 1400);
	});
}

// -------------------------------------------------
// -----------  PORTFOLIO POPUP  -------------------
// -------------------------------------------------

function cavani_tm_portfolio_popup(){
	
	"use strict";
	
	var modalBox		= jQuery('.cavani_tm_modalbox');
	var button			= jQuery('.cavani_tm_portfolio .portfolio_popup');
	var closePopup		= modalBox.find('.close');
	
	button.off().on('click',function(){
		var element = jQuery(this);
		var parent 	= element.closest('.list_inner');
		var content = parent.find('.hidden_content').html();
		var image	= parent.find('.image .main').data('img-url');
		var details = parent.find('.details').html();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.popup_details').prepend('<div class="top_image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+image+'"></div></div>');
		modalBox.find('.popup_details .top_image').after('<div class="portfolio_main_title">'+details+'<div>');
		cavani_tm_data_images();
		return false;
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

// -------------------------------------------------
// ----------------  NEWS POPUP  -------------------
// -------------------------------------------------

function cavani_tm_news_popup(){
	
	"use strict";
	
	var modalBox		= jQuery('.cavani_tm_modalbox');
	var button			= jQuery('.cavani_tm_news .cavani_tm_full_link,.cavani_tm_news .news_list ul li .metabox .title a');
	var closePopup		= modalBox.find('.close');
	
	button.on('click',function(){
		var element 	= jQuery(this);
		var parent 		= element.closest('.list_inner');
		var content 	= parent.find('.news_hidden_details').html();
		var image		= element.closest('.list_inner').find('.image .main').data('img-url');
		var category 	= parent.find('.metabox .category a').text();
		var title	 	= parent.find('.metabox .title a').text();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.news_popup_informations').prepend('<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+image+'"></div></div>');
		modalBox.find('.news_popup_informations .image').after('<div class="details"><span>'+category+'</span><h3>'+title+'</h3><div>');
		cavani_tm_data_images();
		return false;
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}




// -----------------------------------------------------
// ---------------   PRELOADER   -----------------------
// -----------------------------------------------------

function cavani_tm_preloader(){
	
	"use strict";
	
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
	var preloader = $('#preloader');
	
	if (!isMobile) {
		setTimeout(function() {
			preloader.addClass('preloaded');
		}, 800);
		setTimeout(function() {
			preloader.remove();
		}, 2000);

	} else {
		preloader.remove();
	}
}

// -----------------------------------------------------
// -----------------   MY LOAD    ----------------------
// -----------------------------------------------------

function cavani_tm_my_load(){
	
	"use strict";
	
	var speed	= 500;
	setTimeout(function(){cavani_tm_preloader();},speed);
}

// -----------------------------------------------------
// ------------------   CURSOR    ----------------------
// -----------------------------------------------------

function cavani_tm_cursor(){
	
    "use strict";
	
	var myCursor	= jQuery('.mouse-cursor');
	
	if(myCursor.length){
		if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
        let n, i = 0,
            o = !1;
        window.onmousemove = function (s) {
            o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
        }, $("body").on("mouseenter", "a,.cavani_tm_topbar .trigger, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
        }), $("body").on("mouseleave", "a,.cavani_tm_topbar .trigger, .cursor-pointer", function () {
            $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
        }), e.style.visibility = "visible", t.style.visibility = "visible"
    }
	}
};

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function cavani_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

function cavani_tm_popup(){
	
	"use strict";

	jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

	});
	jQuery('.popup-youtube, .popup-vimeo').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});
	
	jQuery('.soundcloude_link').magnificPopup({
	  type : 'image',
	   gallery: {
		   enabled: true, 
	   },
	});
}

// -------------------------------------------------
// -----------------    PORTFOLIO    ---------------
// -------------------------------------------------

function cavani_tm_portfolio(){

	"use strict";
	
	if(jQuery().isotope) {

		// Needed variables
		var filter		 = jQuery('.cavani_tm_portfolio .portfolio_filter ul');

		if(filter.length){
			// Isotope Filter 
			filter.find('a').on('click', function(){
				var element		= jQuery(this);
				var selector 	= element.attr('data-filter');
				var list		= element.closest('.cavani_tm_portfolio').find('.portfolio_list').children('ul');
				list.isotope({ 
					filter				: selector,
					animationOptions	: {
						duration			: 750,
						easing				: 'linear',
						queue				: false
					}
				});
				
				filter.find('a').removeClass('current');
				element.addClass('current');
				return false;
			});	
		}
	}
}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function cavani_tm_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}


// -----------------------------------------------------
// --------------    OWL CAROUSEL    -------------------
// -----------------------------------------------------

function cavani_tm_mycarousel(){
	
	"use strict";
	
	var carousel			= jQuery('.cavani_tm_about .testimonials .owl-carousel');
	
	carousel.owlCarousel({
		loop: true,
		items: 2,
		lazyLoad: false,
		margin: 30,
		autoplay: true,
		autoplayTimeout: 7000,
		dots: false,
		nav: false,
		navSpeed: false,
		responsive : {
			0 : {
				items: 1
			},
			768 : {
				items: 2
			}
		}
	});
}

// -----------------------------------------------------
// -------------------    HASHTAG    -------------------
// -----------------------------------------------------

function hashtag(){
	"use strict";
	var ccc 			= $('.cavani_tm_header .menu .ccc');
	var element 		= $('.cavani_tm_header .menu .active a');
	$('.cavani_tm_header .menu a').on('mouseenter',function(){
		var e 			= $(this);
		currentLink(ccc,e);
	});
	$('.cavani_tm_header .menu').on('mouseleave',function(){
		element 		= $('.cavani_tm_header .menu .active a');
		currentLink(ccc,element);
		element.parent().siblings().removeClass('mleave');
	});
	currentLink(ccc,element);
	
}

function currentLink(ccc,e){
	"use strict";
	if(!e.length){return false;}
	var left 		= e.offset().left;
	var width		= e.outerWidth();
	var menuleft 	= $('.cavani_tm_header .menu').offset().left;
	e.parent().removeClass('mleave');
	e.parent().siblings().addClass('mleave');
	ccc.css({left: (left-menuleft) + 'px',width: width + 'px'});
	
}


// -------------------------------------------------
// -------------  RIPPLE  --------------------------
// -------------------------------------------------

function cavani_tm_ripple(){
	
	"use strict";

	jQuery('#ripple').ripples({
		resolution: 500,
		dropRadius: 20,
		perturbance: 0.04
	});
}




function cavani_tm_modalbox(){"use strict";jQuery(".cavani_tm_all_wrap").prepend('<div class="cavani_tm_modalbox"><div class="box_inner"><div class="close"><a href="#"><i class="icon-cancel"></i></a></div><div class="description_wrap"></div></div></div>')}
function cavani_tm_news_popup(){"use strict";var e=jQuery(".cavani_tm_modalbox"),a=jQuery(".cavani_tm_news .news_list > ul > li .post_title h3 a"),i=e.find(".close");a.on("click",(function(){var a=jQuery(this).closest("li"),i=a.find(".news_hidden_details").html(),t=a.data("img"),n=a.find(".extra_metas").html(),r=a.find(".post_title a").text();return e.addClass("opened"),e.find(".description_wrap").html(i),e.find(".news_popup_informations").prepend('<div class="image"><img src="assets/img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+t+'"></div></div>'),e.find(".news_popup_informations .image").after('<div class="details"><div class="meta">'+n+'</div><div class="title"><h3>'+r+"</h3></div><div>"),cavani_tm_data_images(),!1})),i.on("click",(function(){return e.removeClass("opened"),e.find(".description_wrap").html(""),!1}))}
function cavani_tm_service_popup(){"use strict";var e=jQuery(".cavani_tm_modalbox"),a=jQuery(".cavani_tm_service .service_list ul li .cavani_tm_full_link"),i=e.find(".close");a.on("click",(function(){var a=jQuery(this).closest(".list_inner"),i=a.find(".popup_service_image").attr("src"),t=a.find(".title").html(),n=a.find(".service_hidden_details").html();return e.addClass("opened"),e.find(".description_wrap").html(n),e.find(".service_popup_informations").prepend('<div class="image"><img src="assets/img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+i+'"></div></div>'),cavani_tm_data_images(),e.find(".service_popup_informations .image").after('<div class="main_title"><h3>'+t+"</h3></div>"),!1})),i.on("click",(function(){return e.removeClass("opened"),e.find(".description_wrap").html(""),!1}))}
function cavani_tm_data_images(){"use strict";jQuery("*[data-img-url]").each((function(){var e=jQuery(this),a=e.data("img-url");e.css({backgroundImage:"url("+a+")"})}))}

function cavani_tm_moving_box(){
	
	"use strict";
	
	var e=$(".cavani_tm_news").find(".news_list > ul > li");
	$(".cavani_fn_moving_box").length||$("body").append('<div class="cavani_fn_moving_box"></div>');
	var a=$(".cavani_fn_moving_box");
	e.on("mouseenter",(function(){var e=$(this),i=e.data("img"),t=e.offset().top;if(""===i)return a.removeClass("opened"),!1;a.addClass("opened"),a.css({backgroundImage:"url("+i+")",top:t+"px"})})).on("mouseleave",(function(){a.removeClass("opened")}))}jQuery(document).ready((function(){"use strict";cavani_tm_modalbox(),cavani_tm_page_transition(),cavani_tm_my_progress(),cavani_tm_circular_progress(),cavani_tm_portfolio_popup(),cavani_tm_news_popup(),cavani_tm_service_popup(),cavani_tm_cursor(),cavani_tm_imgtosvg(),cavani_tm_popup(),cavani_tm_portfolio(),cavani_tm_data_images(),cavani_tm_mycarousel(),hashtag(),cavani_tm_ripple(),cavani_tm_moving_box(),jQuery(window).load("body",(function(){cavani_tm_my_load()}))})),$(".glitch").mgGlitch({destroy:!1,glitch:!0,scale:!0,blend:!0,blendModeType:"hue",glitch1TimeMin:200,glitch1TimeMax:400,glitch2TimeMin:10,glitch2TimeMax:100});
