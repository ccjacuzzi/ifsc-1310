$(document).ready(function() {

// Your code goes here...
$('.gallery').cycle({ //target gallery class. call the function "cycle"
		fx: 'wipe', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
		speed: 2500, // how fast or slow the function happens
		sync: 1,
		
	});

});