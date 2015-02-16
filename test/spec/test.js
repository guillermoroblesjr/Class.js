/* global describe, it */

(function () {
  'use strict';
  
  describe("Class -- ", function() {

    describe('creating a class', function(){

      it('should return a function', function(){
        var SomeClass = Class.make(function SomeClass(){
        });
        expect(SomeClass).to.be.a('function');
      });

      it('should create a class instance', function(){
        var SomeClass = Class.make(function SomeClass(){
        });
        var classInstance = new SomeClass();
        expect(classInstance).to.be.instanceof(SomeClass);
      });

      it('should turn the class properties to prototypes', function(){
        var SomeClass = Class.make(function SomeClass(){
          this.property1 = true;
          return this;
        });
        var someInstance = new SomeClass();
        expect(someInstance).to.have.property('property1');
        expect(someInstance.method1).to.not.be.a('function');
      });

      it('should turn the class methods to prototypes', function(){
        var SomeClass = Class.make(function SomeClass(){
          this.method1 = function(){};
          return this;
        });
        var someInstance = new SomeClass();
        expect(someInstance).to.have.property('method1');
        expect(someInstance.method1).to.be.a('function');
      });

      it('should return all the properties', function(){
        var SomeClass = Class.make(function SomeClass(){
          this.property1 = 1;
          this.method1 = function(){
            return 'I am added to the prototype!';
          };
          return this;
        });
        var classInstance = new SomeClass();
        var properties = classInstance.getAllProperties();
        // expect(properties).to.have.all.keys('property1');
      });

      it('should turn the class methods to prototypes', function(){
        var SomeClass = Class.make(function SomeClass(){
          this.animalThing = 2;
          // this.animalFunctionToBeInherited = function(){
          //   console.log('I am added to the prototype!');
          // };
          return this;
        });
      });

      // expect('test').to.have.ownProperty('length');
    });

  });

})();
