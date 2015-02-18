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
  Class.prototype.make = function make(fn, parent){
    parent = parent || Object;
    var insFn = new fn();
    // everything will come from Class.prototype
    if (parent.name === 'Object') {
      var newParent = (function(Class, fn){

        var ClassY = new Class();
        var ClassX = ClassY.make(fn, Class);
        parent = ClassX;

        var child = function(){
          parent.call(this);
          return this;
        };
        child.prototype = Object.create(Object.prototype);
        child.prototype.constructor = child;

        return child;
      })(Class, fn);
       
      newParent.prototype = Object.create(Class.prototype);
      newParent.prototype.constructor = fn;

      for (var x in insFn) {
          newParent.prototype[x] = insFn[x];
      }

      return newParent;
    };


    // since the user isn't using <parent-fn>.call(this);
    // to inherit the parent properties we'll have to add
    // them to the prototype manually
    var child = function(){
      parent.call(this);
      return this;
    };
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = fn;
    
    for (var x in insFn) {
        child.prototype[x] = insFn[x];
    }
    // Add the current properties
    // var keys = Object.keys(insFn);
    // var currentKey;
    // for (var i = 0, len = keys.length; i < len; i++) {
    //   currentKey = keys[i];
    //   child[currentKey] = insFn[currentKey];
    //   console.log('currentKey: ', currentKey);
    // };
    // fn.prototype = Object.create(parent.prototype);
    // fn.prototype.constructor = fn;
    

    return child;
  };
   // Attach to the window
  window.Class = Object.create(Class.prototype);
})(window);