$(function() {
	var stops = ["a's", "able", "about", "above", "according", "accordingly", "across", "actually", "after", "afterwards", "again", "against", "ain't", "all", "allow", "allows", "almost", "alone", "along", "already", "also", "although", "always", "am", "among", "amongst", "an", "and", "another", "any", "anybody", "anyhow", "anyone", "anything", "anyway", "anyways", "anywhere", "apart", "appear", "appreciate", "appropriate", "are", "aren't", "around", "as", "aside", "ask", "asking", "associated", "at", "available", "away", "awfully", "be", "became", "because", "become", "becomes", "becoming", "been", "before", "beforehand", "behind", "being", "believe", "below", "beside", "besides", "best", "better", "between", "beyond", "both", "brief", "but", "by", "c'mon", "c's", "came", "can", "can't", "cannot", "cant", "cause", "causes", "certain", "certainly", "changes", "clearly", "co", "com", "come", "comes", "concerning", "consequently", "consider", "considering", "contain", "containing", "contains", "corresponding", "could", "couldn't", "course", "currently", "definitely", "described", "despite", "did", "didn't", "different", "do", "does", "doesn't", "doing", "don't", "done", "down", "downwards", "during", "each", "edu", "eg", "eight", "either", "else", "elsewhere", "enough", "entirely", "especially", "et", "etc", "even", "ever", "every", "everybody", "everyone", "everything", "everywhere", "ex", "exactly", "example", "except", "far", "few", "fifth", "first", "five", "followed", "following", "follows", "for", "former", "formerly", "forth", "four", "from", "further", "furthermore", "get", "gets", "getting", "given", "gives", "go", "goes", "going", "gone", "got", "gotten", "greetings", "had", "hadn't", "happens", "hardly", "has", "hasn't", "have", "haven't", "having", "he", "he's", "hello", "help", "hence", "her", "here", "here's", "hereafter", "hereby", "herein", "hereupon", "hers", "herself", "hi", "him", "himself", "his", "hither", "hopefully", "how", "howbeit", "however", "i'd", "i'll", "i'm", "i've", "ie", "if", "ignored", "immediate", "in", "inasmuch", "inc", "indeed", "indicate", "indicated", "indicates", "inner", "insofar", "instead", "into", "inward", "is", "isn't", "it", "it'd", "it'll", "it's", "its", "itself", "just", "keep", "keeps", "kept", "know", "knows", "known", "last", "lately", "later", "latter", "latterly", "least", "less", "lest", "let", "let's", "like", "liked", "likely", "little", "look", "looking", "looks", "ltd", "mainly", "many", "may", "maybe", "me", "mean", "meanwhile", "merely", "might", "more", "moreover", "most", "mostly", "much", "must", "my", "myself", "name", "namely", "nd", "near", "nearly", "necessary", "need", "needs", "neither", "never", "nevertheless", "new", "next", "nine", "no", "nobody", "non", "none", "noone", "nor", "normally", "not", "nothing", "novel", "now", "nowhere", "obviously", "of", "off", "often", "oh", "ok", "okay", "old", "on", "once", "one", "ones", "only", "onto", "or", "other", "others", "otherwise", "ought", "our", "ours", "ourselves", "out", "outside", "over", "overall", "own", "particular", "particularly", "per", "perhaps", "placed", "please", "plus", "possible", "presumably", "probably", "provides", "que", "quite", "qv", "rather", "rd", "re", "really", "reasonably", "regarding", "regardless", "regards", "relatively", "respectively", "right", "said", "same", "saw", "say", "saying", "says", "second", "secondly", "see", "seeing", "seem", "seemed", "seeming", "seems", "seen", "self", "selves", "sensible", "sent", "serious", "seriously", "seven", "several", "shall", "she", "should", "shouldn't", "since", "six", "so", "some", "somebody", "somehow", "someone", "something", "sometime", "sometimes", "somewhat", "somewhere", "soon", "sorry", "specified", "specify", "specifying", "still", "sub", "such", "sup", "sure", "t's", "take", "taken", "tell", "tends", "th", "than", "thank", "thanks", "thanx", "that", "that's", "thats", "the", "their", "theirs", "them", "themselves", "then", "thence", "there", "there's", "thereafter", "thereby", "therefore", "therein", "theres", "thereupon", "these", "they", "they'd", "they'll", "they're", "they've", "think", "third", "this", "thorough", "thoroughly", "those", "though", "three", "through", "throughout", "thru", "thus", "to", "together", "too", "took", "toward", "towards", "tried", "tries", "truly", "try", "trying", "twice", "two", "un", "under", "unfortunately", "unless", "unlikely", "until", "unto", "up", "upon", "us", "use", "used", "useful", "uses", "using", "usually", "value", "various", "very", "via", "viz", "vs", "want", "wants", "was", "wasn't", "way", "we", "we'd", "we'll", "we're", "we've", "welcome", "well", "went", "were", "weren't", "what", "what's", "whatever", "when", "whence", "whenever", "where", "where's", "whereafter", "whereas", "whereby", "wherein", "whereupon", "wherever", "whether", "which", "while", "whither", "who", "who's", "whoever", "whole", "whom", "whose", "why", "will", "willing", "wish", "with", "within", "without", "won't", "wonder", "would", "would", "wouldn't", "yes", "yet", "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves", "zero"];
	$('.submit').click(function(e) {
		var words = $('.userInput').val().split(' ');
		var wordMap = {};
		var stems = [];
		jQuery('.wordList').html("");
		for (var i = 0; i < words.length; i++) {
			var word = words[i].toLowerCase().replace(/\b[-.,()&$#!\[\]{}"']+\B|\B[-.,()&$#!\[\]{}"']+\b/g, "");
			var stem = stemmer(word);
			if (stops.indexOf(word) == -1 && word.length > 0) {
				var stem = stemmer(word);
				if (wordMap[word]) {
					wordMap[word]["count"]++;
				} else {
					wordMap[word] = {};
					wordMap[word]["stem"] = stem;
					wordMap[word]["count"] = 1;
				}
				var found = false;
				for (var j = 0; j < stems.length; j++) {
					if (stems[j].indexOf(stem) != -1) {
						stems[j][1]++;
						found = true;
					}
				}
				if (!found) {
					stems.push([stem, 1]);
				}
			}
		}
		stems = stems.sort(sortBySize);
		if (stems.length > 10) {
			var sortedStems = stems.slice(stems.length - 11, stems.length);
			graph(sortedStems);
		} else {
			graph(stems);
		}
		populateUsageList(wordMap); 
	});

	function populateUsageList(wordMap) {
		$.each(wordMap, function(key, value) {
			if (value.count > 5) {
				$('.wordList').append("<li><span class='clickable'>" + key + "</span></li>");
			}
		});
		$('.clickable').click(function() {
			console.log(this.innerHTML);
			findSynonym(this.innerHTML);
		});
	}

	function findSynonym(word) {
		$.ajax({
			url : "http://words.bighugelabs.com/api/2/2f6bd952a1909283441fb3ad7ccf7195/" + word + "/json",
			dataType : 'json',
			success : function(res) {
				$.each(res, function(key, value) {
					$('.synonymList').append("<li><span class='typeSpeech'>" + key + "</span></li>");
					for (var i = 0; i < this.syn.length; i++) {
						$('.synonymList').append("<li>" + this.syn[i] + "</li>");
					}
				});
			},
			error : function(e) {
				alert("No synonyms found for this word");
			}
		});
	}

	function sortBySize(a, b) {
    	if (a[1] === b[1]) {
        return 0;
	    }
	    else {
	        return (a[1] < b[1]) ? -1 : 1;
	    }
	}

	function graph(data) {
		var margin = {top: 20, right: 20, bottom: 30, left: 40},
	    width = 1200 - margin.left - margin.right,
	    height = 600 - margin.top - margin.bottom;

		var x = d3.scale.ordinal()
		    .rangeRoundBands([0, width], .1);

		var y = d3.scale.linear()
		    .range([height, 0]);

		var xAxis = d3.svg.axis()
		    .scale(x)
		    .orient("bottom");

		var yAxis = d3.svg.axis()
		    .scale(y)
		    .orient("left")
		    .ticks(10);

		var svg = d3.select(".graphArea").append("svg")
		    .attr("width", width + margin.left + margin.right)
		    .attr("height", height + margin.top + margin.bottom).attr("id", "svgE")
		  .append("g")
		    .attr("transform", "translate(" + margin.left + "," + margin.top + ")").attr("id", "graphics");

	    x.domain(data.map(function(d) { return d[0]; }));
	    y.domain([0, d3.max(data, function(d) { return d[1]; })]);

	    tip = d3.tip().attr('class', 'd3-tip').html(function(d) { return d[1]; });
	    svg.call(tip);

	    svg.append("g")
	      .attr("class", "x axis")
	      .attr("transform", "translate(0," + height + ")")
	      .call(xAxis);

	    svg.append("g")
	      .attr("class", "y axis")
	      .call(yAxis)
	    .append("text")
	      .attr("transform", "rotate(-90)")
	      .attr("y", 6)
	      .attr("dy", ".71em")
	      .style("text-anchor", "end")
	      .text("Frequency Appearing");

	    svg.selectAll(".bar")
	      .data(data)
	    .enter().append("rect")
	      .attr("class", "bar")
	      .attr("id", function(d) { return d[0]; })
	      .attr("x", function(d) { return x(d[0]); })
	      .attr("width", x.rangeBand())
	      .attr("y", function(d) { return y(d[1]); })
	      .attr("height", function(d) { return height - y(d[1]); })
	      .on('mouseover', tip.show)
  		  .on('mouseout', tip.hide);
	}

	
});