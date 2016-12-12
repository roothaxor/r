var windowHeight = $(window).height(),
	topSection = $('.section');
topSection.css('height', windowHeight);

$(window).resize(function() {
	var windowHeight = $(window).height();
	topSection.css('height', windowHeight);
});

jQuery(document).ready(function() {
	jQuery("#player").jPlayer({
		ready: function() {
			jQuery(this).jPlayer("setMedia", {
				m4a: "0.m4a",
				oga: "0.ogg"
			}).jPlayer("play");

			var click = document.ontouchstart === undefined ? 'click' : 'touchstart';

			var kickoff = function() {
				jQuery("#player").jPlayer("play");
				document.documentElement.removeEventListener(click, kickoff, true);
			};

			document.documentElement.addEventListener(click, kickoff, true);
		},
		playing: function() {
			document.getElementById("spinner").style.display = "none";
			document.getElementById("volumeDiv").style.display = "block";
		},
		
		loop: true,
		supplied: "m4a, oga",
		preload: "none",
		volume: 1.0
	});
});
