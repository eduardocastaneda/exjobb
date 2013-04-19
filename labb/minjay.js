$( document ).ready(function() {
    $( 'a' ).click(function( event ) {
    	var link = $(this).parent();
        link.toggleClass('change1');
        console.log(link)
    });
});