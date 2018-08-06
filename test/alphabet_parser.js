const AlphabetGrid = require("./../app/alphabet_grid");
const expect = require("chai").expect;

const sample_alphabet_grid = "ABCDE,FGHIJ,KLMNO,PQRST,UVWXY";
// ABCDE
// FGHIJ
// KLMNO
// PQRST
// UVWXY


describe("AlphabetGrid", function () {
	describe("#getLetters()", function () {
		it("should parse 25 letters into the dictionary", function () {
			const grid_parser = new AlphabetGrid(sample_alphabet_grid, ",");
			const lettters = grid_parser.getLetters();
			expect(lettters).to.have.members("ABCDEFGHIJKLMNOPQRSTUVWXY".split(""));
		});
	});
	describe("#getConnectedLetters()", function () {
		it("should find AEBFU connected to A", function () {
			const grid_parser = new AlphabetGrid(sample_alphabet_grid, ",");
			const connected_letters = grid_parser.getConnectedLetters("A");
			expect(connected_letters).to.have.members(["A", "E", "B", "F", "U"]);
		});

		it("should find LMNHR connected to M", function () {
			const grid_parser = new AlphabetGrid(sample_alphabet_grid, ",");
			const connected_letters = grid_parser.getConnectedLetters("M");
			expect(connected_letters).to.have.members(["L", "M", "N", "H", "R"]);
		});

		it("should find XYUTE connected to Y", function () {
			const grid_parser = new AlphabetGrid(sample_alphabet_grid, ",");
			const connected_letters = grid_parser.getConnectedLetters("Y");
			expect(connected_letters).to.have.members(["X", "Y", "U", "T", "E"]);
		});
		it("should find HIDJN connected to I", function () {
			const grid_parser = new AlphabetGrid(sample_alphabet_grid, ",");
			const connected_letters = grid_parser.getConnectedLetters("I");
			expect(connected_letters).to.have.members(["H", "I", "D", "J", "N"]);
		});
	});
});