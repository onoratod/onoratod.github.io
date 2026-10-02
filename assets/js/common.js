$(document).ready(function() {
    $('a.abstract').click(function() {
        var entry = $(this).parent().parent();
        entry.find(".abstract.hidden").toggleClass('open');
        entry.toggleClass('abstract-open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');
});
