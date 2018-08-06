// The AlphabetGrid class provides an easy way of finding letters to start from
// in the grid and can return valid "moves" by the connected letters 
// using getConnectedLetters()

class AlphabetGrid {
	constructor(alphabet, delimiter) {
		// We need to put the alphabet into a dictionary so we can traverse it easier later.
		this.letter_dict = {};
		const rows = alphabet.split(delimiter);
		for (let row_number = 0; row_number < rows.length; row_number++) {
			const row = rows[row_number],
				columns = row.split("");
			for (let column_number = 0; column_number < columns.length; column_number++) {
				const letter = row[column_number];
				// Get the letters to the left, right, above, and below. Loop around if needed.
				// NOTE: This also assumes the grid is 5x5, if we wanted to support larger grids
				// we'd have to work on the math here.
				this.letter_dict[letter] = [
					row[(column_number + 4) % 5], // left
					row[(column_number + 6) % 5], // right
					rows[(row_number + 4) % 5][column_number], // above
					rows[(row_number + 6) % 5][column_number], // below
					letter // We can also loop back onto the same letter again
				];
			}
		}
	}

	getConnectedLetters(letter) {
		return this.letter_dict[letter];
	}

	getLetters() {
		return Object.keys(this.letter_dict);
	}
}

module.exports = AlphabetGrid;