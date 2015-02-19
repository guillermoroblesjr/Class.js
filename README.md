# Class.js

Making JavaScript prototypal inheritance easy since 2015.

![Screenshot](https://raw.githubusercontent.com/guillermoroblesjr/Class.js/master/Console.PNG)

# Getting started

All you really need is to include the Class.js file with a script tag in your HTML file. After that, you just use the global 'Class' variable.

To make your life easier, name your functions! So use named function expressions. When you print to the console to debug, it's going to look great!

E.g.
    
    // Create your classes
    var AnimalClass = Class.make(function AnimalClass(){
      this.animalThing = 4;
      this.numberOfEyes = 2;
      this.animalFunctionToBeInherited = function(){
        console.log('I am added to the AnimalClass prototype!');
      };
      return this;
    });

    var DogClass = Class.make(function DogClass(){
      return this;
    }, AnimalClass);

    var AwesomeDoggieClass = Class.make(function AwesomeDoggieClass(){
      this.awesomeDoggieThing = 2000;
      return this;
    }, DogClass);

    var SuperDoggieClass = Class.make(function SuperDoggieClass(){
      this.superDoggieThing = 9500;
      return this;
    }, AwesomeDoggieClass);

    // Create an instance
    var superDoggie = new SuperDoggieClass();

    // Continue adding to the prototype if needed.
    // Inheritance just works.
    DogClass.prototype.doggieThing = 503;

---------------------------------------

Want to get the a local server with tests running and files being watched with Grunt? No problem.

Run this in your console:
    
    cd ./into-your-directory
    git clone git@github.com:guillermoroblesjr/Class.js.git
    cd Class.js
    npm install
    bower install
    grunt serve

You should get 3 tabs to open in your browser, localhost:9001, localhost: 9002 and localhost:9003.

JavaScript classes are now so easy, a caveman can do it!
