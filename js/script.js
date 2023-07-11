$(function(){
	// type js
	$(".typed").typed({
		strings: ["Bootstrap 5+", "Tailwind", "Jquary"],
		stringsElement: null,
		typeSpeed: 20,
		startDelay: 100,
		backSpeed: 0.5,
		backDelay: 1000,
		loop: true,
		showCursor: false,
		cursorChar: "|",
		attr: null,
		contentType: 'html',
		callback: function() {},
		preStringTyped: function() {},
		onStringTyped: function() {},
		resetCallback: function() {}
	});

	// tilt js
	$('.experianc_card').tilt({
		scale: 1.1
	})
	// $('.work_lg_img').tilt({
	// 	scale: 1.0,
		
	// })

	// aos js
	AOS.init();

	// counter up
	$('.counter').counterUp({
		delay: 100,
		time: 2000
	});

	// banner down icon
	$(".banner_down_icon a").on('click', function(event) {
		if (this.hash !== "") {
		  event.preventDefault();
		  var hash = this.hash;
		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 800, function(){
			window.location.hash = hash;
		  });
		}
	  });
});

$(function(){
	
	// slick slider
	$('.testimonial_main').slick({
		arrows:true,
		autoplay:false,
		autoplaySpeed:2000,
		dots: false,
		prevArrow: '.prev_arrows',
		nextArrow: '.next_arrows',
	});

	// nav active

	$(window).scroll(function(){
		let nav_active = $(this).scrollTop()
		if(nav_active > 150){
			$(".navbar").addClass("active_nav")

		}else{
			$(".navbar").removeClass("active_nav")
			
		}
	})


	// top to bottom
	$(".top_to_bottom").click(function(){
		$("html,body").animate({scrollTop:0},2000)
	})
	$(window).scroll(function(){
		var scrolling = $(this).scrollTop();
		if( scrolling > 150){
			$(".top_to_bottom").fadeIn(300)
			$(".top_to_bottom").css({top:"550px"})
		}else{
			$(".top_to_bottom").fadeOut(300)
			$(".top_to_bottom").css({top:"600px"})
			
		}
	})


	// preloader
	$(window).load(function(){
		$("#preloader").delay(2000).fadeOut(500)

	})


	// cursor pointr

	var cursor = document.querySelector('.cursor');
	var cursorinner = document.querySelector('.cursor2');
	var a = document.querySelectorAll('a');

	document.addEventListener('mousemove', function(e){
	var x = e.clientX;
	var y = e.clientY;
	cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
	});

	document.addEventListener('mousemove', function(e){
	var x = e.clientX;
	var y = e.clientY;
	cursorinner.style.left = x + 'px';
	cursorinner.style.top = y + 'px';
	});

	document.addEventListener('mousedown', function(){
	cursor.classList.add('click');
	cursorinner.classList.add('cursorinnerhover')
	});

	document.addEventListener('mouseup', function(){
	cursor.classList.remove('click')
	cursorinner.classList.remove('cursorinnerhover')
	});

	a.forEach(item => {
	item.addEventListener('mouseover', () => {
		cursor.classList.add('hover');
	});
	item.addEventListener('mouseleave', () => {
		cursor.classList.remove('hover');
	});
	})


	// smoth scroll
	$(".nav-item a").on('click', function(event) {
		if (this.hash !== "") {
		  event.preventDefault();
		  var hash = this.hash;
		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 800, function(){
			window.location.hash = hash;
		  });
		}
		
	  });
})
