$(document).ready(function(){

		$('.mobilemenu img').click(function(){
			$('.main-nav').toggle();
		});


		$(window).resize(function() {   
        if($(window).width() > 768)
        {
             $('.main-nav').show();
        }
        if($(window).width() <= 768)
        {
             $('.main-nav').hide();
        }

        if($(window).width() == 320)
        {
             console.log('mobiel breeee');
        }
    });
	
});