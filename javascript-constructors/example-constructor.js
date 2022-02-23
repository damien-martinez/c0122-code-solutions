function ExampleConstructor() {

}

console.log('typeOf exampleConstructor prototype', ExampleConstructor.prototype);
console.log('typeOf exampleConstructor prototype', typeof ExampleConstructor.prototype);

var newExample = new ExampleConstructor();

console.log('called function with new', newExample);

var instanceOfExample = newExample instanceof ExampleConstructor;

console.log(instanceOfExample);
