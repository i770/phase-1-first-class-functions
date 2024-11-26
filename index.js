// Function that receives a callback and calls it
function receivesAFunction(callback) {
    callback();
  }
  
  // Function that returns a named function
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("I am a named function");
    }
    return namedFunction;
  }
  
  // Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("I am an anonymous function");
    };
  }
  
  // Example usage:
  
  // 1. Using receivesAFunction
  receivesAFunction(() => console.log("Callback function called!"));
  
  // 2. Using returnsANamedFunction
  const namedFunc = returnsANamedFunction();
  namedFunc(); // Output: I am a named function
  
  // 3. Using returnsAnAnonymousFunction
  const anonFunc = returnsAnAnonymousFunction();
  anonFunc(); // Output: I am an anonymous function
  