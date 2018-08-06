const Dictionary = require("./../app/dictionary");
const expect = require("chai").expect;

const dictionary_file = "etc/small_dictionary.txt";


describe("Dictionary", function () {
	describe("#getLetters()", function () {
		it("foo should be part of foobarbaz", function () {
			const dictionary = new Dictionary(dictionary_file);
			expect(dictionary.isPartOfLongerWord("foo")).to.equal(true);
		});
		it("bar should be part of foobarbaz", function () {
			const dictionary = new Dictionary(dictionary_file);
			expect(dictionary.isPartOfLongerWord("bar")).to.equal(true);
		});
		it("chided should not be part of a larger word", function () {
			const dictionary = new Dictionary(dictionary_file);
			expect(dictionary.isPartOfLongerWord("chided")).to.equal(true);
		});
		it("chided should be a valid word", function () {
			const dictionary = new Dictionary(dictionary_file);
			expect(dictionary.isValidWord("chided")).to.equal(true);
		});
	});
});