/**
 *  TODO
 *
 *  Remove utility functions. Add them later.
 *  Just focus on a production version.
 *
 *  The production version should include 100% test code coverage.
 *  Decide to include polyfill in tests.
 */

(function(window, undefined){

  'use strict';

  var Class = function Class(){
    Object.call(this);
    return this;
  };
  Class.prototype = Object.create(Object.prototype);
  Class.prototype.constructor = Class;
  Class.prototype.createChild = function createChild(parent){
    var child = function(){
      parent.call(this);
      return this;
    };
    return child;
  };
  Class.prototype.addParentKeysToChildPrototype = function addParentKeysToChildPrototype(fn, child){
    var insFn = new fn();
    for (var x in insFn) {
        child.prototype[x] = insFn[x];
    }
  };
  Class.prototype.inheritFromParent = function inheritFromParent(child, childConstructor, parent){
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = childConstructor;
  };
  Class.prototype.buildChild = function buildChild(fn, parent){
    // since the user isn't using <parent-fn>.call(this);
    // to inherit the parent properties we'll have to add
    // them to the prototype manually
    var child = this.createChild(parent);

    // inherit from parent prototype
    this.inheritFromParent(child, fn, parent);
    
    // add the parents keys to the child prototype
    this.addParentKeysToChildPrototype(fn, child);
    
    // return the child so it can be instantiated
    return child;
  };
  Class.prototype.buildChildFromObject = function buildChildFromObject(fn, Class){
    
    var child = (function(fn, Class){

      // create the parent
      var ClassY = Object.create(Class.prototype);
      var ClassX = function(){
        var child = this.createChild(parent);
        // inherit from parent prototype
        this.inheritFromParent(child, fn, parent);
       
        // return the child so it can be instantiated
        return child;
      };
      parent = ClassX;

      // create a child from the parent
      var child = ClassY.createChild(parent);

      // inherit from parent prototype
      ClassY.inheritFromParent(child, fn, Object);

      return child;
    })(fn, Class);

    var parent = Class;

    // inherit from parent prototype
    this.inheritFromParent(child, fn, parent);
    
    // add the parents keys to the child prototype
    this.addParentKeysToChildPrototype(fn, child);

    return child;
  };
  Class.prototype.make = function make(fn, parent){
    
    // if the parent is undefined, the parent is thus Object
    parent = parent || Object;
    
    // everything will come from Class.prototype
    if (parent.name === 'Object') {
      var child = this.buildChildFromObject(fn, Class);
      return child;
    };

    var child = this.buildChild(fn, parent);

    return child;
  };
   // Attach to the window
  window.Class = Object.create(Class.prototype);
})(window);