/* global describe, it */

(function () {
  'use strict';
  
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
