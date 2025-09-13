$(document).ready(function () {
    setTimeout(function () {
        // Accordion
        $('#sub-menu > li > a.expanded + ul').slideToggle('medium');
        $('#sub-menu > li > a').click(function () {
            $('#sub-menu > li > a.expanded').not(this).toggleClass('expanded').toggleClass('collapsed').parent().find('> ul').slideToggle('medium');
            $(this).toggleClass('expanded').toggleClass('collapsed').parent().find('> ul').slideToggle('medium');
        });
    }, 250);
});