function receivesAFunction(callback) {
  if (typeof callback === "function") {
    callback();
  } else {
    console.log("Argument is not a function");
  }
}
function returnsANamedFunction() {
  return function namedFunction() {
    console.log("This is a named function");
  };
}
function returnsAnAnonymousFunction() {
  return function () {
    console.log("This is an anonymous function");
  };
}