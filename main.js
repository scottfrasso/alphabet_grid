/* eslint-disable no-console */
// This is just an example solution to the alphabet grid problem given a generic
// english dictionary and the alphabet grid in order. We could substitute any
// dictionary and any alphabet grid (as long as its 5x5).

import Solver from "./app/alphabet_solver.js";

const large_dictionary_file = "./etc/large_dictionary.txt";
const sample_alphabet_grid = "ABCDE,FGHIJ,KLMNO,PQRST,UVWXY";

console.log("Using the sample alphabet grid of " + sample_alphabet_grid);
console.log("With the dictionary found at " + large_dictionary_file);
const solver = new Solver(sample_alphabet_grid, large_dictionary_file);

console.log("Start looking for the longest word, this may take a few seconds...");
const longest_word = solver.solve();
if (longest_word) {
	console.log(`Longest word found = ${longest_word}`);
} else {
	// This is almost never going to happen because even 'I' or 'A' are words.
	console.log("Unable to find a word....");
}
