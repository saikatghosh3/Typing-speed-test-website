const sentences = [
	"After all, you're only an immortal until someone manages to kill you. After that, you were just long-lived. As long as poverty, injustice and gross inequality persist in our world, none of us can truly rest.",
	"We were like deaf people trying to dance to a beat we couldn't hear, long after the music actually stopped. For once you have tasted flight you will walk the earth with your eyes turned skywards, for there you have been and there you will long to return.",
	"Time plays like an accordion in the way it can stretch out and compress itself in a thousand melodic ways. Months on end may pass blindingly in a quick series of chords, open-shut, together-apart; and then a single melancholy week may seem like a year's pining, one long unfolding note.",
	"Life is beautiful, as long as it consumes you. When it is rushing through you, destroying you, life is gorgeous, glorious. It is when you burn a slow fire and save fuel, that life's not worth having.",
	"As long as people have been on this earth, the moon has been a mystery to us. Think about it. She is strong enough to pull the oceans, and when she dies away, she always comes back again. My mama used to tell me Our Lady lived on the moon and that I should dance when her face was bright and hibernate when it was dark.",
	"The Censored Press benefits from a robust partnership with Seven Stories Press, the Project’s long-time publisher and stalwart ally, which will print and distribute Censored Press titles in an  arrangement similar to its cooperation with Human Rights Watch to publish HRW’s Annual Report. As pub most important partners.",

	"The support of generous anonymous donors ensures that The Censored Press will be a sustainable publishing imprint. Its development is guided by a distinguished founding editorial board that includes Mischa Geracoulis, Mickey Huff, Veronica Liu, Nora Barrows-Friedman, Andy Lee Roth, T.M. Scruggs, and Dan Simon."
];

const msg = document.getElementById('msg');
const typedWords = document.getElementById('mywords');
const btn = document.getElementById('btn');

let startTime, endTime;

const playGame = () => {
	let randomNumber = Math.floor(Math.random() * sentences.length);
	msg.innerText = sentences[randomNumber];   // Display random sentence
	typedWords.value = '';  // Clear any previously typed words
	typedWords.disabled = false;  // Enable typing area
	typedWords.focus();  // Focus on the typing area
	let date = new Date();
	startTime = date.getTime();  // Start the timer
	btn.innerText = "Done";  // Change button text to 'Done'
}



const endGame = () => {
	let date = new Date();
	endTime = date.getTime();  // End the timer
	let totalTimeInSeconds = Math.round((endTime - startTime) / 1000);
	let minutes = Math.floor(totalTimeInSeconds / 60);
	let seconds = totalTimeInSeconds % 60;

	let totalStr = typedWords.value;  // Get the typed text
	let wordCount = wordCounter(totalStr);  // Count total words typed

	// Get the original sentence
	let originalStr = msg.innerText;

	// Compare the original and typed words
	let correctWordCount = compareWords(originalStr, totalStr);

	// Display result message in msg section
	let finalMsg = `You typed ${correctWordCount} correct words out of ${wordCount} in ${minutes} minute${minutes !== 1 ? 's' : ''} and ${seconds} second${seconds !== 1 ? 's' : ''}.`;
	msg.innerText = finalMsg;

	// Reset everything for the next round
	btn.innerText = "Start";  // Change button text to 'Start'
	typedWords.disabled = true;  // Disable the typing area
	typedWords.value = '';  // Clear the typing area
}

// Function to compare words
const compareWords = (original, typed) => {
	let originalWords = original.trim().split(/\s+/);  // Split original sentence into words
	let typedWords = typed.trim().split(/\s+/);  // Split typed sentence into words
	let correctWords = 0;

	// Compare each word from the original and typed text
	originalWords.forEach((word, index) => {
		if (word === typedWords[index]) {
			correctWords++;  // Increment if the word matches
		}
	});
	return correctWords;
}


const wordCounter = (str) => {
	let words = str.trim().split(/\s+/).filter(function(word) {
		return word.length > 0;
	});
	return words.length;
}

// Event listener for the button click
btn.addEventListener('click', function() {
	if (this.innerText == 'Start') {
		playGame();  // Start the game
	} else if (this.innerText == "Done") {
		endGame();  // End the game
	}
});
