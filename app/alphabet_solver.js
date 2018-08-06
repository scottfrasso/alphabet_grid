// The Solver class uses a dictionary and an AlphabetGrid to walk through
// the grid of letters and find the longest valid word. 

const AlphabetGrid = require("./alphabet_grid.js"),
	Dictionary = require("./dictionary.js");

class Solver {
	constructor(alphabet, dictionary_file) {
		this.dictionary_file = dictionary_file;
		this.grid = new AlphabetGrid(alphabet, ",");
	}

	solve() {
		// alphabet is a comma delimited alphabet grid 5x5
		// ABCDE,FGHIJ,KLMNO,PQRST,UVWXY

		const letters = this.grid.getLetters();
		let longest_word = "";
		for (let i = 0; i < letters.length; i++) {
			// Only load the letters with the first word matching our first letter
			this.dictionary = new Dictionary(this.dictionary_file, letters[i]);
			const word = this.solveForWord(letters[i]);

			if (word.length > longest_word.length) {
				longest_word = word;
			}
		}

		return longest_word;
	}

	solveForWord(current_word) {
		let largest_word = current_word;
		const current_letter = current_word.substr(current_word.length - 1);
		const connected_letters = this.grid.getConnectedLetters(current_letter);
		for (let i = 0; i < connected_letters.length; i++) {
			const next_word = current_word + connected_letters[i];

			if (this.dictionary.isPartOfLongerWord(next_word)
				|| this.dictionary.isValidWord(next_word)) {
				const larger_word = this.solveForWord(next_word);
				if (larger_word.length > largest_word.length) {
					// We found a larger word
					largest_word = larger_word;
				}
			}
		}
		return largest_word;
	}
}

module.exports = Solver;