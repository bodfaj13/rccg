$(document).ready(function () {

	$('.dropdown-item').hover(function(){
		$(this).css('background-color','white');
	});

	$('.pass-addon').on('click',function(){
		if($(this).find('i').hasClass('fa-eye')){
			$(this).find('i').addClass('fa-eye-slash').removeClass('fa-eye');
			$('#password').attr('type','text');
		}else{
			$(this).find('i').removeClass('fa-eye-slash').addClass('fa-eye');
			$('#password').attr('type','password');
		}
	});




})