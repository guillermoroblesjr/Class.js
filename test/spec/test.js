/* global describe, it */

(function () {
  'use strict';
  
  describe("Class -- ", function() {

    var SomeClass;
    var classInstance;
    
    describe('creating a class', function(){

      it('should return a function', function(){
        SomeClass = Class.make(function SomeClass(){
        });
        expect(SomeClass).to.be.a('function');
      });

      it('should create a class instance', function(){
        classInstance = new SomeClass();
        expect(classInstance).to.be.instanceof(SomeClass);
      });

      it('should return all the properties', function(){
        // var SomeClass = Class.make(function SomeClass(){
        //   this.property1 = 1;
        //   // this.animalFunctionToBeInherited = function(){
        //   //   console.log('I am added to the prototype!');
        //   // };
        //   return this;
        // });
        // var classInstance = new SomeClass();
        // var properties = classInstance.getAllProperties();
        // expect(properties).to.have.property('property1');
      });

      it('should turn the class properties to prototypes', function(){
        // var SomeClass = Class.make(function SomeClass(){
        //   this.animalThing = 2;
        //   // this.animalFunctionToBeInherited = function(){
        //   //   console.log('I am added to the prototype!');
        //   // };
        //   return this;
        // });
        // expect()
      });
    });

    it('should turn the class methods to prototypes', function(){
      SomeClass = Class.make(function SomeClass(){
        this.animalThing = 2;
        // this.animalFunctionToBeInherited = function(){
        //   console.log('I am added to the prototype!');
        // };
        return this;
      });
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
