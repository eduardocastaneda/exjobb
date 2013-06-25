$(document).ready(function(){
	onClick();
});

$(window).resize(function() {
    checkSize();
});

function checkSize() {
    if ($(window).width() < 768) {
        $('.main-nav').hide();
    }
    if($(window).width() >= 768){
    	$('.main-nav').show();
    }
}

function onClick() {
	$('.menubutton').click(function(){
			$('.main-nav').toggle();
	});
}
