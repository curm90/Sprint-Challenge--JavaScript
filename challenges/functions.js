// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

const consume = (num1, num2, callback) => {
  return callback(num1, num2);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

const add = (a, b) => a + b;

const multiply = (a, b) => a * b;

const greeting = (firstName, lastName) => `Hello ${firstName} ${lastName}, nice to meet you!`


/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)) // 160
console.log(consume("Mary","Poppins", greeting)) // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: nestedFunction has access to everything inside its own function scope and everything outside its own scope all the way up to the global scope. So, when called it is in the scope of myFunction, so,it looks inside and finds the nestedFunction declaration and runs it, which in turn logs the string 'Hello! I'm inside myFunction!'


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();