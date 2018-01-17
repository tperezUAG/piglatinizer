// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
var words;
var consonants;
var letter;
var vowelChecker;
var letterCounter = 0;
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
function sentenceToPigLatin(sentence){
	words = sentence.split(' ');
	
}
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
			consonants = consonants + letter;
		}
	return newWord.slice(letterCounter-1,newWord.length) + consonants + "ay";
	}
}

function wayAdder(newWord) {
	return newWord + "way"
}

/*function wordIteration(newWords) {
	
}*/

