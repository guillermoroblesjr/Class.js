/* global describe, it */

(function () {
  'use strict';
  
  describe("Class", function() {

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

      it('should have a property "property1" when created', function(){
        var SomeClass = Class.make(function SomeClass(){
          this.property1 = true;
          return this;
        });
        var someInstance = new SomeClass();
        expect(someInstance).to.have.property('property1');
        expect(someInstance.method1).to.not.be.a('function');
      });

      it('should have a function "method1" when created', function(){
        var SomeClass = Class.make(function SomeClass(){
          this.method1 = function(){};
          return this;
        });
        var someInstance = new SomeClass();
        expect(someInstance).to.have.property('method1');
        expect(someInstance.method1).to.be.a('function');
      });

      it('should turn the class properties to prototypes', function(){
        var SomeClass = Class.make(function SomeClass(){
          this.property1 = true;
          return this;
        });
        var someInstance = new SomeClass();
        expect(someInstance).to.have.property('property1');
        expect(someInstance).to.not.have.ownProperty('property1');
      });

      it('should turn the class methods to prototypes', function(){
        var SomeClass = Class.make(function SomeClass(){
          this.method1 = function(){};
          return this;
        });
        var someInstance = new SomeClass();
        expect(someInstance).to.have.property('method1');
        expect(someInstance).to.not.have.ownProperty('method1');
      });

    });

    describe('getAllKeys()', function(){

      it('should return an array', function(){
        var SomeClass = Class.make(function SomeClass(){
          return this;
        });
        var classInstance = new SomeClass();
        var properties = classInstance.getAllKeys();
        expect(properties).to.be.a('array');
      });

      it('should return all the keys', function(){
        var SomeClass = Class.make(function SomeClass(){
          this.property1 = 1;
          this.method1 = function(){
            return 'I am added to the prototype!';
          };
          return this;
        });
        var classInstance = new SomeClass();
        var properties = classInstance.getAllKeys();
        var propObj = {};
        for (var i = 0, len = properties.length; i < len; i++) {
          (function(i){
            var key = properties[i];
            propObj[key] = true;
          })(i);
        };
        expect(propObj).to.have.property('property1');
        expect(propObj).to.have.property('method1');
// expect({ a: 'b' }).to.have.key('a');
// expect({ a: 'b', c: 'd' }).to.only.have.keys('a', 'c');
//expect({ a: 'b', c: 'd' }).to.only.have.keys(['a', 'c']);
// expect({ a: 'b', c: 'd' }).to.not.only.have.key('a');
        // expect(propObj).to.not.only.have.key('property1');

      });

      it('x', function(){
        expect({ a: 'b', c: 'd' }).to.have.keys('a', 'c');
      });

      it('y', function(){
        expect({ a: 'b', c: 'd' }).to.have.keys('a', 'c');
      });
      it('z', function(){
        expect({ a: 'b', c: 'd' }).to.have.keys('a', 'c');
      });
    });

    ///////////////////////////////////////////////////////////
    it('x', function(){
      expect({ a: 'b', c: 'd' }).to.have.keys('a', 'c');
    });

    // expect(foo).to.be.an.instanceof(Foo);
    // expect('test').to.have.ownProperty('length');

  });

})();
