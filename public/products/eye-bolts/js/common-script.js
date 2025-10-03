// JavaScript Document
//==============================
//	Right Click Disabled
//==============================
 $(document).ready(function () {
//        //below javascript is used for Disabling right-click on HTML page
        document.oncontextmenu = new Function("return false"); //Disabling right-click
//
//
//        //below javascript is used for Disabling text selection in web page
        document.onselectstart = new Function("return false"); //Disabling text selection in web page
        if (window.sidebar) {
			
            //document.onmousedown = new Function("return false");
            //document.onclick = new Function("return true");
//
//
//            //Disable Cut into HTML form using Javascript 
          document.oncut = new Function("return false");
//
//
//            //Disable Copy into HTML form using Javascript 
         document.oncopy = new Function("return false");
//
//
//            //Disable Paste into HTML form using Javascript  
           document.onpaste = new Function("return false");
       }
 });



//Prevent Ctrl+S (and Ctrl+W for old browsers and Edge)
document.onkeydown = function (e) {
    e = e || window.event;//Get event

    if (!e.ctrlKey) return;

    var code = e.which || e.keyCode;//Get key code

    switch (code) {
        case 83://Block Ctrl+S
        case 87://Block Ctrl+W -- Not work in Chrome and new Firefox
            e.preventDefault();
            e.stopPropagation();
            break;
    }
};

//---------------------DISABLE [CTRL + U] ---------------------//

jQuery(document).ready(function($){
    $(document).keydown(function(event) { 
        var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();
        
        if (event.ctrlKey && (pressedKey == "c" || pressedKey == "u")) {
             
            //disable key press porcessing
            return false; 
        }
    });
});


//:::::::::::::::::::::::MENU SCRIPT::::::::::::::::::::::
//(function($) {
//$.fn.menumaker = function(options) {  
// var cssmenu = $(this), settings = $.extend({
//   format: "dropdown",
//   sticky: false
// }, options);
// return this.each(function() {
//   $(this).find(".button").on('click', function(){
//     $(this).toggleClass('menu-opened');
//     var mainmenu = $(this).next('ul');
//     if (mainmenu.hasClass('open')) { 
//       mainmenu.slideToggle().removeClass('open');
//     }
//     else {
//       mainmenu.slideToggle().addClass('open');
//       if (settings.format === "dropdown") {
//         mainmenu.find('ul').show();
//       }
//     }
//   });
//   cssmenu.find('li ul').parent().addClass('has-sub');
//multiTg = function() {
//     cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
//     cssmenu.find('.submenu-button').on('click', function() {
//       $(this).toggleClass('submenu-opened');
//       if ($(this).siblings('ul').hasClass('open')) {
//         $(this).siblings('ul').removeClass('open').slideToggle();
//       }
//       else {
//         $(this).siblings('ul').addClass('open').slideToggle();
//       }
//     });
//   };
//   if (settings.format === 'multitoggle') multiTg();
//   else cssmenu.addClass('dropdown');
//   if (settings.sticky === true) cssmenu.css('position', 'fixed');
//resizeFix = function() {
//  var mediasize = 767;
//     if ($( window ).width() > mediasize) {
//       cssmenu.find('ul').show();
//     }
//     if ($(window).width() <= mediasize) {
//       cssmenu.find('ul').hide().removeClass('open');
//     }
//   };
//   resizeFix();
//   return $(window).on('resize', resizeFix);
// });
//  };
//})(jQuery);
//
//(function($){
//$(document).ready(function(){
//$("#cssmenu").menumaker({
//   format: "multitoggle"
//});
//});
//})(jQuery);
//:::::::::::::::::::::::MENU SCRIPT::::::::::::::::::::::

//Blog Left Menu Script 

jQuery(document).ready(function ($) {
	 /* prepend menu icon */
    $('#blog-menu').prepend('<div id="blog-menu-icon">Blog Categories</div>');
	
    /* toggle nav */
    $("#blog-menu-icon").on("click", function () {
        $(".blog-left-menu").slideToggle();
        $(this).toggleClass("active");
		
    });	
		});


//*============================== SCROLL TO TOP ==============================
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

});


//*============================== SCROLL TO DOWN ==============================

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});


// ::::::::::::::::::: TIME SCRIPT :::::::::::::::::::: 
$(document).ready(function () {
var tday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");

function GetClock(){
var d=new Date();
var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate();
var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;

if(nhour==0){ap=" AM";nhour=12;}
else if(nhour<12){ap=" AM";}
else if(nhour==12){ap=" PM";}
else if(nhour>12){ap=" PM";nhour-=12;}

if(nmin<=9) nmin="0"+nmin;
if(nsec<=9) nsec="0"+nsec;

document.getElementById('clockbox').innerHTML=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+" "+nhour+":"+nmin+":"+nsec+ap+"";
}

window.onload=function(){
GetClock();
setInterval(GetClock,1000);
}
});	



