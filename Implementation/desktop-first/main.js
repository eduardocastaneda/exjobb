$(document).ready(function(){
	onClick();
});

function onClick(){
	$('.mobilemenu img').click(function(){
			$('.main-nav').toggle();
		});	
}