/**
 * Faz o Bootstrap do JS da aplicação
 * 
 */
try {
    
    // Carrega o jQuery
    window.$ = window.jQuery = require( 'jquery' );

    // Carrega o Popper
    window.Popper = require( 'popper.js' );

} catch (error) {}

// Inclui o Bootstrap
require( 'bootstrap' );

// JS
require( '../js/sidebar' );

// End of file
