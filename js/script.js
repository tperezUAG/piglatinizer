// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.

// Variables
var words;
var word;
var finalWord;
var consonants;
var letter;
var lastPunctuation;
var endPunctuation;
var letterChecker;
var grammarChecker;
var letterCounter;
var leftovers;
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$(document).ready(function() {
	$("#translate-button").click(function() {
		$("#result-area").html(sentenceToPigLatin($("#typing-area").val()));
	});
	$("#clear-button").click(function() {
		$("#result-area").html("");
	});
});

// Create the sentenceToPigLatin function that takes a sentence as a parameter
//Loops through all the words in the sentence and transforms each word
//It should return a transfromed sentance
function sentenceToPigLatin(sentence) {
	words = sentence.split(' ');
	finalWord = words[words.length - 1];
	lastPunctuation = endingRemover(finalWord);
	if (lastPunctuation != "") {
		words[words.length - 1] = words[words.length - 1].slice(0, finalWord.length - 1);
	}

	for (var p = 0; p < words.length; p++) {
		letterCounter = 0;
		word = words[p];
		if (punctuationChecker(word)) {
			break;
		}
		else {
			words[p] = wordToPigLatin(word);
		}
	}
	if (grammarChecker) {
		return "<p>No punctuation other than the ending punctuation at the end is allowed!</p>";
	}
	else {
		return "<p>" + words.join(" ") + lastPunctuation + "</p>";
	}
}

// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 
function wordToPigLatin(newWord) {
	newWord = newWord.toLowerCase();
	consonants = "";
	while (true) {
		letter = newWord[letterCounter];
		letterCounter = letterCounter + 1;
		if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
			break;
		} else if (consonants == newWord) {
			return simplePigLatin(consonants);
		}
		else {
			consonants = consonants + letter;
		}
	}
	if (consonants == "") {
		newWord = newWord.toLowerCase();
		return wayAdder(newWord);
	}
	leftovers = newWord.slice(letterCounter - 1,newWord.length).toLowerCase();
	return leftovers + consonants + "ay";
}

function wayAdder(newWord) {
	return newWord + "way";
}

function simplePigLatin(consonantString) {
	leftovers = consonantString.slice(1,consonantString.length);
	return leftovers + consonantString[0] + "ay";
}

function punctuationChecker(string) {
	for (var q = 0; q < string.length; q++) {
		letterChecker = string[q].toLowerCase();
		for (var i = 0; i < alphabet.length; i++) {
			if (letterChecker == alphabet[i]) {
				grammarChecker = false;
				break;
			}
			else {
				grammarChecker = true;
			}
		}
		if (grammarChecker){
			break;
		}
	}
	return grammarChecker;
}

function endingRemover(endWord) {
	for (var y = 0; y < alphabet.length; y++) {
		
		if (endWord[endWord.length - 1].toLowerCase() == alphabet[y]) {
			return "";
		}
		else {
			endPunctuation = endWord[endWord.length - 1];
		}
	}
	return endPunctuation;
}

/*function wordIteration(newWords) {
	
}*/
