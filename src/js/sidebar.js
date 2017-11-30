/**
 * Bootstrap Accordion header active v1.0
 * Manu Morante @unavezfui
 * Last update: 20/10/2014
 * https://codepen.io/unavezfui/pen/HibzA
 */
(function() {
  
  $(".sidebar-group-list").on("show.bs.collapse hide.bs.collapse", function(e) {
    
    if( $( e.target ).hasClass( 'sidebar-group-list' ) ) {
      if ( e.type == 'show' ){
        $( this ).siblings( '.sidebar-group-title' ).addClass('active');
      } else {
        $( this ).siblings( '.sidebar-group-title' ).removeClass('active');
      }
    }
  });

  $(".toggle-sidebar").click( function() {
    
    $( '.sidebar' ).toggleClass( 'toggled' );
    $( this ).toggleClass( 'active' );
  });

}).call(this);
