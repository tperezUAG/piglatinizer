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
var punctuation;
var letterChecker;
var vowelChecker;
var grammarChecker;
var translationConfirmation;
var letterCounter = 0;
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {
  $("#translate-button").click(function(){
  	$("#result-area").html(sentenceToPigLatin($("#typing-area").val()));
  });
  $("#clear-area").click(function(){
  	$("#result-area").html("");
  });
});

// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance
/*
function sentenceToPigLatin(sentence){
	words = sentence.split(' ');
	finalWord = words[words.length-1]
	lastPunctuation = endingRemover(finalWord);
	words[words.length-1] = words[words.length-1].slice(0,words.length);
	for (var p = 0; p < words.length; p++){
		word = words[p];
		if (punctuationChecker(word)){
			break
		}
		else {
			words[p] = wordToPigLatin(word)
		}
	}
	if (grammarChecker){
		return "<p>No punctuation other than the ending punctuation allowed!</p>";
	} else{
		return "" + words.join(" ") + "
	}
}*/
// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 
function wordToPigLatin(newWord){
	consonants = "";
	vowelChecker = false;
	while (vowelChecker == false){
		letter = newWord[letterCounter];
		letterCounter = letterCounter + 1;
		if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
			vowelChecker = true;
		} else{
			consonants = consonants + letter.toLowerCase();
		}
	}
	if (consonants == ""){
		newWord = newWord.toLowerCase();
		return wayAdder(newWord);
	}
	return newWord.slice(letterCounter-1,newWord.length) + consonants + "ay";
}

function wayAdder(newWord) {
	return newWord + "way";
}

function punctuationChecker(string){
	for (var q = 0; q < string.length; q++){
		letterChecker = string[q]
		for (var i = 0; i < alphabet.length; i++){
			if (letterChecker != alphabet[i]){
				grammarChecker = false;
			} else{
				grammarChecker = true;
				return grammarChecker;
			}
		}
	}
}

function endingRemover(endWord){
	if (finalWord[finalWord.length-1] != alphabet){
		
	}
}
/*function wordIteration(newWords) {
	
}*/

