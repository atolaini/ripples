$(document).ready(function(){

    $('.content').on('click', function() {
		$($('.content')).ripples( {
            resolution: 128,
			dropRadius: 9, //px
            perturbance: 0.01,
            interactive: true
            });


	});
});