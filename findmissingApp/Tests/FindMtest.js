var chai = require('chai');
var expect = chai.expect;
var myapp=require('../App/Findapp.js');
describe("input file exist", function() {
    it('input file exist', function() {
        expect(myapp).to.not.be.undefined;
    });
});
describe("Find missing number two lists: ", function() {

  describe("Case for en empty list", function() {

    it("should return 0 for empty list", function() {
      expect(myapp.findMissing([], [])).to.equal(0);
    });

  });

  describe("Case for lists with the same entries", function() {

    it("should return 0 for [2],[2]", function() {
      expect(myapp.findMissing([2], [2])).to.equal(0);
    });

    it("should return 0 for [4],[4]", function() {
      expect(myapp.findMissing([4], [4])).to.equal(0);
    });

    it("should return 0 for [7],[7]", function() {
      expect(myapp.findMissing([7], [7])).to.equal(0);
    });

  });

  describe("Case for lists with similar entries and a missing number", function() {

    it("should return 5 for [1,2],[1,2,5]", function() {
      expect(myapp.findMissing([1, 2], [1, 2, 5])).to.equal(5);
    });

    it("should return 10 for [4, 6, 8],[4, 6, 8, 10]", function() {
      expect(myapp.findMissing([4, 6, 8], [4, 6, 8, 10])).to.equal(10);
    });

    it("should return 1 for [5, 4, 7, 6, 11, 66],[5, 4, 1, 7, 6, 11, 66]", function() {
      expect(myapp.findMissing([5, 4, 7, 6, 11, 66], [5, 4, 1, 7, 6, 11, 66])).to.equal(1);
    });

  });
  describe("Case for invalid input", function() {

    it("should return 'Invalid Input' for [1,3,7],[1,2,5]", function() {
      expect(myapp.findMissing([1,3,7], [1, 2, 5])).to.equal('Invalid Input');
    });
    it("should return 'Invalid Input' for [1,3,7,6,7],[1,2,5]", function() {
      expect(myapp.findMissing([1,3,7,6,7], [1, 2, 5])).to.equal('Invalid Input');
    });
  });
});
