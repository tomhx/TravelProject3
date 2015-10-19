$(function() {

	// jQuery Goes here!
	$('.fa-bars').on('click', function(){
		$('div.rightnav ul').addClass('flexplicit');
	});

	$('div.rightnav ul li').on('click', function(){
		$('div.rightnav ul').removeClass('flexplicit');
	});

});