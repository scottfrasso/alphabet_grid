// The Dictionary class reads a dictionary file (one word per line with no spaces)
// and provides methods for figuring out if a word is part of a longer word
// (meaning we can keep traversing down to hopefully find that longer word...) or
// if a word is a valid word itself.

const fs = require("fs");

class Dictionary {
	constructor(dictionary_file, only_with_first_letter) {
		const dictionary_words = fs.readFileSync(dictionary_file).toString().split("\n");
		this.words = [];
		const that = this;
		// group the words by their first letter
		dictionary_words.forEach(function (word) {
			if (!word || word.length === 0 || !word.trim()) {
				return;
			}
			if (!only_with_first_letter) {
				that.words.push(word);
			} else if (only_with_first_letter.toLowerCase() === word.substr(0, 1).toLowerCase()) {
				that.words.push(word);
			}
		});
		// sort by descending length, if its part of a larger word we can keep going.
		this.words.sort(function (left_word, right_word) {
			return right_word.length - left_word.length;
		});
	}

	isPartOfLongerWord(word) {
		return this.isValidWord(word, true);
	}

	isValidWord(word, allow_partial) {
		// allow_partial - check to see if this word is part of a longer word.
		word = word.toLowerCase();
		for (let i = 0; i < this.words.length; i++) {
			const dictionary_word = this.words[i];
			if (dictionary_word === word || (allow_partial && dictionary_word.indexOf(word) > -1)) {
				return true;
			}
		}
		return false;
	}
}

module.exports = Dictionary;