/* global describe, it */

(function () {
  'use strict';


  // debugger;

  // describe('Give it some context', function () {
  //   describe('maybe a bit more context here', function () {
  //     it('should run here few assertions', function () {

  //       //Class.prototype.constructor = Class;
        
  //       expect(Class).to.be.a('object');
  //       //expect(Class.prototype.constructor).to.equal(Class);
  //     });
  //   });
  // });

  //require(['/scripts/Class.js/Class.js']);

  describe("Class", function() {
    describe("constructor", function() {
      it("should have a default name", function() {
        //var classInstance = new Class();
        expect(Class.temp()).to.equal("I am a temp function.");
      });

      // it("should set cow's name if provided", function() {
      //   var cow = new Cow("Kate");
      //   expect(cow.name).to.equal("Kate");
      // });
    });

    // describe("#greets", function() {
    //   it("should throw if no target is passed in", function() {
    //     expect(function() {
    //       (new Cow()).greets();
    //     }).to.throw(Error);
    //   });

    //   it("should greet passed target", function() {
    //     var greetings = (new Cow("Kate")).greets("Baby");
    //     expect(greetings).to.equal("Kate greets Baby");
    //   });
    // });
  });




})();
