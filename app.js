var phrases = [
"If &ldquo;Plan A&rdquo; didn't <br>work, the alphabet <br>has 25 more letters!<br> <b>Stay cool.</b>",
"Life is too <br>short to spend <br>it at war with<br> yourself",
"In the end,<br> we only <b>regret</b><br> the chance<br> we didn't <b>take</b>",
"Scars are <br>just another<br> kind of <br>memory",
"Don't set <br>yourself on fire <br>to keep others <br>warm",
"When it rains<br>look for <b>rainbow</b><br>When it's dark<br>look for <b>stars</b>",
"Stars can't<br> shine <br>without<br> darkness",
"Just be a <br><b>better</b><br> version of <br><b>yourself</b>",
"My parents are lucky<br>I was too lazy<br>to go through a<br>rebellious phase",
"Life is <br>better<br>when you're<br>laughing",
"You kown you're<br>lazy, when you get<br>excited about<br>cancelled plans",
"Leave<br>your<br>fear<br>behind",
"Are you<br> <b>living</b><br>your<br><b>dream</b>?",
];

var bg_colors = [
"#916ab1","#8fca40","#f29524","#f04090","#55b9fc","#fce94f","#edd400", "#fcaf3e",
"#e9b96e","#8ae234","#73d216","#ccff42","#9ade00","#ffff3e","#eccd84","#f1caff",
"#a4c400","#60a917","#f0a30a","#d8c100","#ffcc34","#2ada70","#48c9f8"
];


$(document).ready(function() {
    init();
});

var body, phrase_panel;

var init = function() {
	body = $("body");
	phrase_panel = $("#phrase");

	$("#phrase-container").on("click", function(){location.reload();});

	loadPhrase();

};



var loadPhrase = function(){
	var randomColorIndex = getRandomInt(0, bg_colors.length);
	body.css({backgroundColor: bg_colors[randomColorIndex]});
	
	var randomPhraseIndex = getRandomInt(0, phrases.length);
	phrase_panel.css('font-size', approximateFontSize(phrases[randomPhraseIndex]) + 'px');

	phrase_panel.html(phrases[randomPhraseIndex]);
};


var getRandomInt = function(max, min){
	return Math.floor(Math.random() * (max - min) + min);
}

var approximateFontSize = function(phrase){
	var factor = 1/6;  // approximate width-to-height ratio
	var font_size = phrase_panel.width()/(phrase.length * factor);
	return font_size>72?72:font_size;
}

