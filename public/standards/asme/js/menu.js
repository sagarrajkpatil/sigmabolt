jQuery(document).ready(function ($) {

    /* prepend menu icon */
    $('#nav-wrap').prepend('<div id="menu-icon">Menu</div>');


    /* toggle nav */
    $("#menu-icon").on("click", function () {
        $(".menu").slideToggle();
        $(this).toggleClass("active");
    });


    /*----------- Project Details Menu ----------- */

    /* prepend menu icon */
    $('#sub-menu').prepend('<div id="submenu-icon">Project Menu</div>');


    /* toggle nav */
    $("#submenu-icon").on("click", function () {
        $(".projectmenu").slideToggle();
        $(this).toggleClass("active");
    });


    /*----------- Static Section Menu ----------- */

    /* prepend menu icon */
    $('#section-links').prepend('<div id="sectionmenu-icon">Sub Menu</div>');


    /* toggle nav */
    $("#sectionmenu-icon").on("click", function () {
        $(".submenu").slideToggle();
        $(this).toggleClass("active");
    });

    $('.menu ul ul, ul.exp').filter(function () {
        return $(this).find('li').length > 8;
    }).addClass('split');

    $(' ul.promo').filter(function () {
        return $(this).find('li').length > 6;
    }).addClass('split');


    

});


jQuery(document).ready(function ($) {

    /* prepend menu icon */
    $('#leftnav').prepend('<div id="leftnav-icon">Sub Menu</div>');


    /* toggle nav */
    $("#leftnav-icon").on("click", function () {
        $(".left-menu").slideToggle();
        $(this).toggleClass("active");
    });
});





