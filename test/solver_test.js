const Solver = require("./../app/alphabet_solver");
const expect = require("chai").expect;

const small_dictionary_file = "etc/small_dictionary.txt";
const large_dictionary_file = "etc/large_dictionary.txt";
const sample_alphabet_grid = "ABCDE,FGHIJ,KLMNO,PQRST,UVWXY";

describe("Solver", function () {
	describe("#solve()", function () {
		it("should find chided", function () {
			const solver = new Solver(sample_alphabet_grid, small_dictionary_file);
			const longest_word = solver.solve();
			expect(longest_word.toLowerCase()).to.equal("chided");
		});

		it("should find chinook", function () {
			// This takes less than ~2 seconds to run depending on CPU power
			const solver = new Solver(sample_alphabet_grid, large_dictionary_file);
			const longest_word = solver.solve();
			expect(longest_word.toLowerCase()).to.equal("chinook");
		});
	});
});