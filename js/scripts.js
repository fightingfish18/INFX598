$(function() {
	$('.userInput').keyup(function(e) {
		if (e.keyCode == 32 || e.keyCode == 8) {
			var words = $('.userInput').val().split(' ');
			var wordMap = {};
			jQuery.each(words, function() {
				if (wordMap[this]) {
					wordMap[this]++;
				} else {
					wordMap[this] = 1;
				}
			});
		}
	});
});