/**
 * toggleDropbox
 * 
 * esconde/mostra o dropbox
 * 
 */
window.toggleDropbox = function(hide = false) {

    // esconde/mostra o drop box
    if (!hide)
        $('#dropbox').toggleClass('active');
    else
        $('#dropbox').removeClass('active');

    // retorna false por padrao
    return false;
}


$(window).click(function () {

    // esconde o menu
    toggleDropbox(true);
});
$('.avatar-wrapper').click(function (event) {
    event.stopPropagation();
});
$('#dropbox').click(function (event) {
    event.stopPropagation();
});


/* end of file */