$(document).ready(function(){
	onClick();
});

function onClick() {
	$('.menubutton').click(function(){
			$('.main-nav').toggle();
	});
}
