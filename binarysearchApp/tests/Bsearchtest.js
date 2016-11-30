var chai = require('chai');
var expect = chai.expect;
var arrayFunctions=require('../App/BsearchApp.js');
Array.prototype.search = arrayFunctions.search
Array.prototype.toTwenty = arrayFunctions.toTwenty
Array.prototype.toForty = arrayFunctions.toForty
Array.prototype.toOneThousand = arrayFunctions.toOneThousand
describe('Binary Search to traverse an ordered list, effectively', function() {
  describe('Populate the arrays with valid content', function() {
    
    it('should create an array from 1 to 20, with intervals of 1', function() {
      expect(oneToTwenty[0]).be.eql(1);
      expect(oneToTwenty[19]).be.eql(20);
      expect(oneToTwenty.length).be.eql(20);
      for(var i = 0; i < oneToTwenty.length - 1;i++) {
        expect(oneToTwenty[i + 1] - oneToTwenty[i]).be.eql(1);
      }
    });

    it('should create an array from 2 to 40, with intervals of 2', function() {
      expect(twoToForty[0]).be.eql(2);
      expect(twoToForty[19]).be.eql(40);
      expect(twoToForty.length).be.eql(20);
      for(var i = 0; i < twoToForty.length - 1;i++) {
        expect(twoToForty[i + 1] - twoToForty[i]).be.eql(2);
      }
    });

    it('should create an array from 10 to 10000, with intervals of 10', function() {
      expect(tenToOneThousand[0]).be.eql(10);
      expect(tenToOneThousand[99]).be.eql(1000);
      expect(tenToOneThousand.length).be.eql(100);
      for(var i = 0; i < tenToOneThousand.length - 1;i++) {
        expect(tenToOneThousand[i + 1] - tenToOneThousand[i]).be.eql(10);
      }
    });
  });

  describe('Get the index of the item with an expected number of loops in array [1, 2 . . . 20]', function() {

    it('should return {count: /* <= 4 */, index: 15} for 16', function() {
      var search  = oneToTwenty.search(16);
      expect(search.count).be.below(5);
      expect(search.index).be.eql(15);
    });

    it('should return {count: < /* array length */, index: -1} for 33 ', function () {
      var search = oneToTwenty.search(33);
      expect(search.count).be.below(search.length);
      expect(search.index).be.eql(-1);
    });
  });

  
  it('should not contain any form of `indexOf` in the search function', function() {
    expect(Array.prototype.search.toString().indexOf('indexOf')).be.eql(-1);      
  });
  
  describe('Get the index of the item with an expected number of loops in array [2, 4 . . . 40]', function() {

    it('should return {count: /* <= 4 */, index: 15} for 16', function() {
      var search  = twoToForty.search(16);
      expect(search.count).be.below(5);
      expect(search.index).be.eql(7);
    });

    it('should return {count: 0, index: 9} for 20', function() {
      var search  = twoToForty.search(20);
      expect(search.count).be.eql(0);
      expect(search.index).be.eql(9);
    });


    it('should return {count: 0, index: 19} for 40', function() {
      var search  = twoToForty.search(40);
      expect(search.count).be.eql(0);
      expect(search.index).be.eql(19);
    });

    it('should return {count: < /* array length */, index: -1} for 33 ', function () {
      var search = twoToForty.search(33);
      expect(search.count).be.below(search.length);
      expect(search.index).be.eql(-1);
    });
  });

  describe('Get the index of the item with an expected number of loops in array [10, 20 . . . 1000]', function() {

    it('should return {count: /* <= 3 */, index: 3} for 40', function() {
      var search  = tenToOneThousand.search(40);
      expect(search.count).be.below(4);
      expect(search.index).be.eql(3);
    });

    it('should return {count: /* <= 5*/, index: 87} for 800', function() {
      var search  = tenToOneThousand.search(880);
      expect(search.count).be.below(6);
      expect(search.index).be.eql(87);
    });

    it('should return {count: < /* array length */, index: -1} for 10000 ', function () {
      var search = tenToOneThousand.search(10000);
      expect(search.count).be.below(search.length);
      expect(search.index).be.eql(-1);
    });

  });
});

/*
* Block the indexOf Array function
*/
Array.prototype.indexOf = function () {
  throw new Error('You are not allowed to use the indexOf function');
};
var oneToTwenty = [].toTwenty();
var twoToForty = [].toForty();
var tenToOneThousand = [].toOneThousand();
