
// Reserved words
/* abstract boolean break byte case catch char class const continue
debugger default delete do double else enum export extends false
final finally float for function goto if implements import in
instanceof int interface long native new null package private
protected public return short static super switch synchronized
this throw throws transient true try typeof var void volatile
while with */

// Expression = fragment of code that produces a value Statement = performs an
// action 
// Object = any unordered collection of key-value pairs. If it’s not a
// primitive (undefined, null, boolean, number or string) it’s an object.
// Prototype = an object from which other objects inherit properties

// Keywords
var foo // variables exist and are only acessible within the block its defined (within {})
let bar // 
const baz // Declare variables that do not get reassigned

///////////////
// Operators //
///////////////

// ?? Null coalescing operator
// Selects first defined variable
let a = false
let b = true
let x = a ?? b

/////////////
// STRINGS //
/////////////

// Instance properties
String.prototype.length // Reflects the length of the string. Read-only.

// Instance methods
String.prototype.charAt(index) // Returns the character (exactly one UTF-16 code unit) at the specified index.
    "Gilgamesh".charAt(3) == 'g'
    "Gilgamesh"[3]; //Same as above
String.prototype.charCodeAt(index) // Returns a number that is the UTF-16 code unit value at the given index.
String.prototype.codePointAt(pos) // Returns a nonnegative integer Number that is the code point value of the UTF-16 encoded code point starting at the specified pos.
String.prototype.concat(str [, ...strN ]) // Combines the text of two (or more) strings and returns a new string.
String.prototype.includes(searchString [, start_position]) // Determines whether the calling string contains searchString.
    "Califoonia".includes("foo") //= true
String.prototype.endsWith(searchString [, length]) // Determines whether a string ends with the characters of the string searchString.
    'pre-funded'.endsWith('funded') //= true
String.prototype.indexOf(searchValue [, fromIndex]) // Returns the index within the calling String object of the first occurrence of searchValue, or -1 if not found.
String.prototype.lastIndexOf(searchValue [, fromIndex]) // Returns the index within the calling String object of the last occurrence of searchValue, or -1 if not found.
    //Using indexOf to find a substring
    if (name.indexOf('Guest') == 0) { /*...*/ }
    //Use indexof() to count the number of characters in a string
    count = 0;
    pos = str.indexOf("x");
    while ( pos != -1 ) {
        count++;
        pos = str.indexOf( "x",pos + 1 );
    }
String.prototype.localeCompare(compareString [, locales [, options]]) // Returns a number indicating whether the reference string compareString comes before, after, or is equivalent to the given string in sort order.
String.prototype.match(regexp) // Used to match regular expression regexp against a string.
String.prototype.matchAll(regexp) // Returns an iterator of all regexp's matches.
String.prototype.normalize([form]) // Returns the Unicode Normalization Form of the calling string value.
String.prototype.padEnd(targetLength [, padString]) // Pads the current string from the end with a given string and returns a new string of the length targetLength.
    'fuu'.padEnd(5) == 'fuu  '
String.prototype.padStart(targetLength [, padString]) // Pads the current string from the start with a given string and returns a new string of the length targetLength.
    'fuu'.padStart(5, '!') == 'fuu!!'
String.prototype.repeat(count) // Returns a string consisting of the elements of the object repeated count times.
    'nom'.repeat(3) == 'nomnomnom'
String.prototype.replace(searchFor, replaceWith) // Used to replace occurrences of searchFor using replaceWith. searchFor may be a string or Regular Expression, and replaceWith may be a string or function.
String.prototype.replaceAll(searchFor, replaceWith) // Used to replace all occurrences of searchFor using replaceWith. searchFor may be a string or Regular Expression, and replaceWith may be a string or function.
String.prototype.search(regexp) // Search for a match between a regular expression regexp and the calling string.
String.prototype.slice(beginIndex[, endIndex]) // Extracts a section of a string and returns a new string.
String.prototype.split([sep [, limit] ]) // Returns an array of strings populated by splitting the calling string at occurences of the substring sep.
String.prototype.startsWith(searchString [, length]) // Determines whether the calling string begins with the characters of string searchString.
    'pre-funded'.startsWith('pre-') === true
String.prototype.substr() // Returns the characters in a string beginning at the specified location through the specified number of characters.
String.prototype.substring(indexStart [, indexEnd]) // Returns a new string containing characters of the calling string from (or between) the specified index (or indeces).
String.prototype.toLocaleLowerCase( [locale, ...locales]) // The characters within a string are converted to lowercase while respecting the current locale.
String.prototype.toLocaleUpperCase( [locale, ...locales]) // The characters within a string are converted to uppercase while respecting the current locale.
String.prototype.toLowerCase() // Returns the calling string value converted to lowercase.
String.prototype.toString() // Returns a string representing the specified object. Overrides the Object.prototype.toString() method.
String.prototype.toUpperCase() // Returns the calling string value converted to uppercase.
String.prototype.trim() // Trims whitespace from the beginning and end of the string. Part of the ECMAScript 5 standard.
String.prototype.trimStart() // Trims whitespace from the beginning of the string.
String.prototype.trimEnd() // Trims whitespace from the end of the string.
String.prototype.valueOf() // Returns the primitive value of the specified object. Overrides the Object.prototype.valueOf() method.
//String.prototype.@@iterator() // Returns a new Iterator object that iterates over the code points of a String value, returning each code point as a String value.

// Primative string (literals) vs. String object
let s_prim = 'foo'
let s_obj = new String(s_prim)
console.log(typeof s_prim) //= "string"
console.log(typeof s_obj)  //= "object"

// Long string literals
let foo = 'Lorem ipsum ' +
          'blah blah';
let bar = 'Lorem ipsum\
blah blah';

// Template string literals
let firstName = 'Jane';
let lastName = 'Smith';
console.log(`Hello Mr. ${lastName}!
Welcome!
May I call you ${firstName}?`);

////////////
// NUMBER //
////////////

// Constructor
Number() // Creates a new Number object.

// Static methods
Number.isNaN() // Determine whether the passed value is NaN.
Number.isFinite() // Determine whether the passed value is a finite number.
Number.isInteger() // Determine whether the passed value is an integer.
Number.isSafeInteger() // Determine whether the passed value is a safe integer (number between -(253 - 1) and 253 - 1).
Number.parseFloat(string) // This is the same as the global parseFloat() function.
Number.parseInt(string, [radix]) // This is the same as the global parseInt() function.

// Instance methods
Number.prototype.toExponential(fractionDigits) // Returns a string representing the number in exponential notation.
Number.prototype.toFixed(digits) // Returns a string representing the number in fixed - point notation.
    // Parse a number to dollars
    function toDollars(number){
        return '$' + parseFloat(number).toFixed(2);
    }
    toDollars(10); //"$10.00"
Number.prototype.toLocaleString([locales[, options]]) // Returns a string with a language sensitive representation of this number.Overrides the Object.prototype.toLocaleString() method.
Number.prototype.toPrecision(precision) // Returns a string representing the number to a specified precision in fixed - point or exponential notation.
Number.prototype.toString([radix]) // Returns a string representing the specified object in the specified radix("base").Overrides the Object.prototype.toString() method.
Number.prototype.valueOf() // Returns the primitive value of the specified object.Overrides the Object.prototype.valueOf() method.

// Convert string to number
+"08";
Number("3");
parseInt("3"); //slower than the above two, but necessary when the string is something like "08 foo"
parseFloat("3.14"); //3.14
2.34.toFixed(1); //"2.3" <- String representation of the number

//////////
// MATH //
//////////

Math.ceil(x) // Round x up
Math.floor(x) // Round x down
Math.max([value1[, value2[, ...]]]) // Return the largest number
Math.min([value1[, value2[, ...]]]) // Return the lowest number
Math.round(x) // Returns the value of the number x rounded to the nearest integer.
Math.trunc(x) // Cut off the dot and digits to the right of the integer

////////////
// ARRAYS //
////////////

// Array literal
var foo = [];

// Array constructor/declaration
var foo = new Array(n); // n int indicate the size of the array

// Static methods
Array.from(arrayLike [, mapFn [, thisArg]]) // Creates a new Array instance from arrayLike, an array-like or iterable object.
    Array.from({length: 2, 0: 'zero', 1:'one'}) == ["zero", "one"]
    Array.from('foo') == ["f", "o", "o"]
    Array.from([1, 2, 3], item => item * item) == [1, 4, 9]
Array.isArray() // Returns true if value is an array, or false otherwise.
Array.of() // Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
    Array.of(1, 2) == [1, 2] == Array(1, 2)
    Array.of(3) == [3]
    Array(3) == [undefined, undefined, undefined]

// Instance properties
Array.prototype.length // Reflects the number of elements in an array.
// Array.prototype[@@unscopables] // A symbol containing property names to exclude from a with binding scope.

// Instance methods
Array.prototype.concat() // Returns a new array that is this array joined with other array(s) and/or value(s).
    [1,2,3].concat([4,5,6])
    // Use spread operator to acheive same result:
    [...[1,2,3], ...[4,5,6]]
Array.prototype.copyWithin() // Copies a sequence of array elements within the array.
Array.prototype.entries() // Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
    // use Object.entries() and destructuring with the for-of loop
    let arr = ['one', 'two', 'three']
    for (const [index, entry] of arr.entries()) { /*...*/ }
Array.prototype.every() // Returns true if every element in this array satisfies the testing callbackFn.
Array.prototype.fill() // Fills all the elements of an array from a start index to an end index with a static value.
    // the second and third arguments to fill() below say, start filling at index 0 and stop at index 2
    console.log([5,5,5,5].fill('foo',0,2)) // logs ["foo", "foo", 5, 5]
    // replace all values from index 2 on with 'foo'
    console.log([5,5,5,5].fill('foo',2)) // logs [5, 5, "foo", "foo"]
    // replace all values with 'foo'
    console.log(Array(4).fill('foo')) // logs ["foo", "foo", "foo", "foo"]
Array.prototype.filter(callback(element[, index, [array]])[, thisArg]) // Returns a new array containing all elements of the calling array for which the provided filtering callbackFn returns true.
Array.prototype.find() // Returns the found element in the array, if some element in the array satisfies the testing callbackFn, or undefined if not found.
    [1, 2, 3].find(function(i){ return i > 2; }) == 3
Array.prototype.findIndex() // Returns the found index in the array, if an element in the array satisfies the testing callbackFn, or -1 if not found.
    [1, 2, 3].findIndex(function(i){ return i > 2; }) == 2
Array.prototype.forEach() // Calls a callbackFn for each element in the array.
Array.prototype.includes() // Determines whether the array contains valueToFind, returning true or false as appropriate.
    ['foo', 'bar'].includes('foo') === true
Array.prototype.indexOf() // Returns the first (least) index of an element within the array equal to searchElement, or -1 if none is found.
Array.prototype.join() // Joins all elements of an array into a string.
Array.prototype.keys() // Returns a new Array Iterator that contains the keys for each index in the array.
Array.prototype.lastIndexOf() // Returns the last (greatest) index of an element within the array equal to searchElement, or -1 if none is found.
Array.prototype.map() // Returns a new array containing the results of calling callbackFn on every element in this array.
Array.prototype.pop() // Removes the last element from an array and returns that element.
Array.prototype.push() // Adds one or more elements to the end of an array, and returns the new length of the array.
Array.prototype.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue]) // Apply a callbackFn against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.
    // Reduce an array to get the average
    myArray = [1, 2, 3, 4, 5, 6]
    myArray.reduce((a, b) => a + b) / myArray.length
    // Reduce can also be used to render a new array
    // Count instances of a string in an array
    let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
    let countedNames = names.reduce(function (allNames, name) {
        if (name in allNames) {
            allNames[name]++
        } else {
            allNames[name] = 1
        }
        return allNames
    }, {}); // Empty Object as accumulater starter
    countedNames ==  { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
Array.prototype.reduceRight() // Apply a callbackFn against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.
Array.prototype.reverse() // Reverses the order of the elements of an array in place. (First becomes the last, last becomes first.)These methods modify the array:
Array.prototype.shift() // Removes the first element from an array and returns that element.
Array.prototype.slice([start[, end]]) // Extracts a section of the calling array and returns a new array.
    // Get the last several items in an array
    ['a', 'b', 'c', 'd'].slice(-2) == ['c', 'd']
Array.prototype.some() // Test values until a test returns true
    true === [1, 2, 3].some(function(value, index, whole_array) {
        return value >= 2;
    })
Array.prototype.sort([compareFunction]) // Sorts the elements of an array in place and returns the array.
    // If compareFunction is not supplied, elements are sorted by converting them to strings and comparing strings in
    // Unicode code point order. For example, "Cherry" comes before "banana". In a numeric sort, 9 comes before 80, but 
    // because numbers are converted to strings, "80" comes before "9" in Unicode order.
    // If compareFunction(a, b) is greater than 0, sort b to a lower index than a.
    // If compareFunction(a, b) is less than 0, sort a to a lower index than b, i.e. a comes first.
    // If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements.
    [4, 22, 5, 10, 3].sort(function (a, b) {
        return a - b;
    });
    // Randomize an array
    ["a", "b", "c"].sort(function () { return 0.5 - Math.random() });
    // For non-ASCII chars, use localeCompare
    ["réservé", "premier", "cliché", "communiqué", "café", "adieu"].sort(function (a, b) {
        return a.localeCompare(b);
    });
Array.prototype.splice(start[, deleteCount[, item1[, item2[, ...]]]]) // Adds and/or removes elements from an array.
Array.prototype.toLocaleString() // Returns a localized string representing the array and its elements. Overrides the Object.prototype.toLocaleString() method.
Array.prototype.toString() // Returns a string representing the array and its elements. Overrides the Object.prototype.toString() method.
Array.prototype.unshift() // Adds one or more elements to the front of an array, and returns the new length of the array.
Array.prototype.values() // Returns a new Array Iterator object that contains the values for each index in the array.
Array.prototype[@@iterator]() // Returns a new Array Iterator object that contains the values for each index in the array.

// Destructuring an array
let [one, two] = [1, 2]
one == 1
// Use the spread operator (...) to define undefined variables
let [one, two, ...buckle_my_shoe] = [1, 2, 3, 4]
one == 1
buckle_my_shoe == [3, 4]

// Using for-of to iterate over the VALUES (not indexes) of iterable objects like arrays [ES6]
// also works with break, return, and continue
for (var value of ["a", "b", "c"]) {
    console.log(value);
}
// use Object.entries() and destructuring with the for-of loop
let arr = ['one', 'two', 'three']
for (const [index, entry] of arr.entries()) { /*...*/ }

// using indexOf to find an variable within an object/array
var JOURNAL = [
    {"events":["carrot","exercise","weekend"],"squirrel":false},
    {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false}
]
function hasEvent(event, entry) {
    return entry.events.indexOf(event) != -1;
}
var index=0;
if (hasEvent("carrot", JOURNAL[0])) index += 1;

// iterating with forEach
var arr = [1,2,3,4,5,6,7,8];
// Uses the usual "for" loop to iterate
for(var i = 0, l = arr.length; i < l; i++){
    console.log(arr[i]);
}
//Uses forEach to iterate [ES5]
arr.forEach(function(item, index){
    console.log(item);
});

// Arrays, like objects, should be called using literal notation
// but using a constructor can be useful on occasion:
var whitespace = new Array(256).join(" "); // string with 255 whitespaces 
// another example:
Array.apply(null, Array(31)).map(function (_, i) { return i + 1; }).forEach(function(day){
    var node = document.createElement("div"),
        text = document.createTextNode(day);
    node.appendChild(text);
    document.getElementById("calendar").appendChild(node);
});

// Array iterators
// [].keys() [].values() [].entries() return items as an Array iterator object
let pile = ["eggshell", "orange peel", "worm"];
let pile_values = pile.values();
pile_values.next().value() == "eggshell";
pile_values.next().value() == "orange peel";
pile_values.next().value() == "worm";
pile_values.done() === true;
let pile_entries = pile.entries();
pile_entries.next().value() == [0, "eggshell"];

//////////
// Sets //
//////////

// A set is list of unique values

// Instance properties
Set.prototype.size // Returns the number of values in the Set object.

// Instance methods
Set.prototype.add(value) // Appends value to the Set object. Returns the Set object.
    myset.add('foo').add('bar')
Set.prototype.clear() // Removes all elements from the Set object.
Set.prototype.delete(value) // Removes the element associated to the value and returns the value that Set.prototype.has(value) would have previously returned. Set.prototype.has(value) will return false afterwards.
Set.prototype.entries() // Returns a new Iterator object that contains an array of[value, value] for each element in the Set object, in insertion order. This is similar to the Map object, so that each entry's key is the same as its value for a Set.
Set.prototype.forEach(callbackFn[, thisArg]) // Calls callbackFn once for each value present in the Set object, in insertion order. If a thisArg parameter is provided, it will be used as the this value for each invocation of callbackFn.
Set.prototype.has(value) // Returns a boolean asserting whether an element is present with the given value in the Set object or not.

// Set <--> Array
let foobar = ['foo', 'bar']
let myset = new Set(foobar)
[...myset] ==  foobar

// Str --> Set
new Set('foo') == ['f','o']

//////////////
// DATETIME //
//////////////

// Date object
var today = new Date();
print("Year: ", today.getFullYear(), ", month: ", today.getMonth(), ", day: ", today.getDate());

///////////////
// FUNCTIONS //
///////////////

// Instance properties
Function.displayName  // The display name of the function.
Function.length // Specifies the number of arguments expected by the function.
Function.name // The name of the function.

// Instance methods
Function.prototype.apply(thisArg [, argsArray]) // Calls a function and sets its this to the provided thisArg. Arguments can be passed as an Array object.
Function.prototype.bind(thisArg[, arg1[, arg2[, ...argN]]]) // Creates a new function which, when called, has its this set to the provided thisArg. Optionally, a given sequence of arguments will be prepended to arguments provided the newly-bound function is called.
    // Examples about bind() at the end of Functions section
Function.prototype.call(thisArg[, arg1, arg2, ...argN]) // Calls a function and sets its this to the provided value. Arguments can be passed as they are.
Function.prototype.toString() // Returns a string representing the source code of the function. Overrides the Object.prototype.toString method.

// Function literal / function expression
let add = function (a, b) {
    return a + b;
}

// Function declaration
// Not part of the top-to-bottom flow control -- moved to the top of their scope
// But can only be called within the same scope!
add(1, 2);
function add(a, b) {
    return a + b;
}

// Function constructor
var topEnv = Object.create(null);
["+", "-", "*", "/", "==", "<", ">"].forEach(function (op) {
    topEnv[op] = new Function("a, b", "return a " + op + " b;");
});

// Array as argument
let myFunction = function ([foo, bar]) {}
myFunction(['foo', 'bar']);

// Use the spread operator (...) to pack undefined arguments into an array
const func = function (param1, param2, ...restOfArguments) {
    console.log(param1, param2, restOfArguments);
}
func(1, 2, 3, 4, 5, 6, 7); // logs 1 2 [3, 4, 5, 6, 7]

// The 'this' parameter is determined by the invocation parameter
// 
// 1. Method invocation
// this is bound to the method
var foo = {
    val: 0,
    increment: function (x) {
        this.val += x;
    }
}
foo.increment(1);//1
foo.increment(2);//3
//
// 2. Function invocation
// this is bound to the global object!!!
var sum = add(2, 3);
// 
// 3. Constructor invocation
// this -> new object constructed
// 
// 4. Apply invocation
// this -> assigned
// 
// Fat arrow functions use lexically scoped this
var counter = function () {
    this.num = 0;
    this.timer = setTimeout(() => {
        console.log(this.num); // this, is counter instance
        this.num++; // this refers to what we want now with no hack
        console.log(`Fixed this = ${this.num}`);
    }, 1000);
}
var counterInstance = new counter();

// Closures, functions within functions, maintain their scope and state in the
// environment they were created
var el = document.getElementById("button");
el.onclick = (function () {
    var count = 0; //private
    return function () {
        if (count++ === 3) {
            alert("Third time's the charm");
        }
    }
})();

// another example
for (var d = 0; d < 3; d++) (function (d) {
    setTimeout(function () {
        console.log(d);
    }, d * 200);
})(d);

//Wrap a library (these two methods are the same)
var myLib = (function () {
    function myLib() { }
    return myLib;
})();
(function () {
    var myLib = window.myLib = function () { };
})();

// Cascading/chaining
function a(foo) {
    return {
        'b': function (bar) {
            return foo + bar;
        }
    }
}
a(1).b(2); // --> 3

// Closure with methods
function createCounter() {
    let val = 0;
    return {
        increment() { val++ },
        getVal() { return val }
    }
}
let counter = createCounter();
counter.increment();// 1
counter.increment();// 2

//ABSTRACTION
sum(range(1, 10));

// Recusion
// recursing with setTimeout
var fade = function (node) {
    var level = 1;
    var step = function () {
        var hex = level.toString(16);
        node.style.backgroundColor = '#FFFF' + hex + hex;
        if (level < 15) {
            level += 1;
            setTimeout(step, 100);
        }
    };
    setTimeout(step, 100);
};
fade(document.body);

// Closures have access to the actual variables of the outer functions and not copies
// Make a function that assigns event handler functions to an array of nodes the wrong way.
// When you click on a node, an alert box is supposed to display the ordina of the node.
// But it always displays the number of nodes instead.
var add_the_handlers = function (nodes) {
    var i;
    for (i = 0; i < nodes.length; i += 1) {
        nodes[i].onclick = function (e) {
            alert(i);
        };
    }
};
// BETTER EXAMPLE
var add_the_handlers = function (nodes) {
    var helper = function (i) {
        return function (e) {
            alert(i);
        };
    };
    var i;
    for (i = 0; i < nodes.length; i += 1) {
        modes[i].onclick = helper(i);
    }
};
  // The moral of the story: avoid making functions within a loop

/**
 * bind
 * fun.bind(thisArg[, arg1[, arg2[, ...]]])
 * 
 * Create a partially applied version of the funtion
 * -- Solves the problem of how to keep the context of `this` within 
 * another function -- an alternate solution for referencing `this` 
 * with another variable like `self`, `_this`, or `context`
 * -- Solves `Uncaught TypeError: Object [object global] has no method 'specialFunction'`
 */
// Binding a function within an object
var myObj = {
  specialFunction: function () {},
  anotherSpecialFunction: function () {},
  getAsyncData: function (cb) {
    cb();
  },
  /* Good */
  render: function () {
    var that = this;
    this.getAsyncData(function () {
      that.specialFunction();
      that.anotherSpecialFunction();
    });
  },
  /* Better */
  render: function () {
    this.getAsyncData(function () {
      this.specialFunction();
      this.anotherSpecialFunction();
    }.bind(this));
  }
};
myObj.render();

// Event handler
var logger = {
    x: 0,
    updateCount: function(){
        this.x++;
        console.log(this.x);
    }
}
// Instead of this empty anonymous function...
document.querySelector('button').addEventListener('click', function(){
    logger.updateCount();
});
// ... just bind the `updateCount()` function to the `logger` object itself
document.querySelector('button').addEventListener('click', logger.updateCount.bind(logger));

// You can also add extra parameters after the 1st parameter and bind will
// pass in those values to the original function before passing in the extra
// parameters you pass to the bound function:
var sum = function(a, b) {
  return a + b;
};
var add5 = sum.bind(null, 5);
console.log(add5(10)); // --> 15
// another example:
function list() {
  var args = Array.prototype.slice.call(arguments); //create an array
  return args;
}
var list1 = list(1, 2, 3); // [1, 2, 3]
// Create a function with a preset leading argument
var leadingThirtysevenList = list.bind(undefined, 37);
var list2 = leadingThirtysevenList(); // [37]
var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]

// when `this` refers to the global object
x = 9;
var module = {
    x: 81,
    getX: function () {
        return this.x;
    }
};
module.getX(); // 81
var getX = module.getX;
getX(); // 9, because in this case, "this" refers to the global object
// create a new function with 'this' bound to module
var boundGetX = getX.bind(module);
boundGetX(); // 81

/////////////
// Objects //
/////////////

// Static methods
Object.assign() // Copies the values of all enumerable own properties from one or more source objects to a target object.
    // Commonly used to merge two objects
    var foo = {'foo':'foo'};
    var bar = {'bar':'bar'};
    var foobar = Object.assign(foo, bar);
    // Use the spread operator to merge two objects
    var foobar_spread = {...foo, ...bar}
Object.create() // Creates a new object with the specified prototype object and properties.
Object.defineProperty() // Adds the named property described by a given descriptor to an object.
Object.defineProperties() // Adds the named properties described by the given descriptors to an object.
Object.entries() // Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.
Object.freeze() // Freezes an object. Other code cannot delete or change its properties.
Object.fromEntries() // Returns a new object from an iterable of [key, value] pairs. (This is the reverse of Object.entries).
Object.getOwnPropertyDescriptor() // Returns a property descriptor for a named property on an object.
Object.getOwnPropertyDescriptors() // Returns an object containing all own property descriptors for an object.
Object.getOwnPropertyNames() // Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties.
Object.getOwnPropertySymbols() // Returns an array of all symbol properties found directly upon a given object.
Object.getPrototypeOf() // Returns the prototype (internal [[Prototype]] property) of the specified object.
Object.is() // Compares if two values are the same value. Equates all NaN values (which differs from both Abstract Equality Comparison and Strict Equality Comparison).
Object.isExtensible() // Determines if extending of an object is allowed.
Object.isFrozen() // Determines if an object was frozen.
Object.isSealed() // Determines if an object is sealed.
Object.keys() // Returns an array containing the names of all of the given object's own enumerable string properties.
Object.preventExtensions() // Prevents any extensions of an object.
Object.seal() // Prevents other code from deleting properties of an object.
Object.setPrototypeOf() // Sets the object's prototype (its internal [[Prototype]] property).
Object.values() // Returns an array containing the values that correspond to all of a given object's own enumerable string properties.

// Instance properties
Object.prototype.constructor // Specifies the function that creates an object's prototype.
Object.prototype.__proto__ // Points to the object which was used as prototype when the object was instantiated.
Object.prototype.__noSuchMethod__ // Allows a function to be defined that will be executed when an undefined object member is called as a method.

// Instance methods
Object.prototype.__defineGetter__() // Associates a function with a property that, when accessed, executes that function and returns its return value.
Object.prototype.__defineSetter__() // Associates a function with a property that, when set, executes that function which modifies the property.
Object.prototype.__lookupGetter__() // Returns the function associated with the specified property by the __defineGetter__() method.
Object.prototype.__lookupSetter__() // Returns the function associated with the specified property by the __defineSetter__() method.
Object.prototype.hasOwnProperty() // Returns a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.
Object.prototype.isPrototypeOf() // Returns a boolean indicating whether the object this method is called upon is in the prototype chain of the specified object.
Object.prototype.propertyIsEnumerable() // Returns a boolean indicating if the internal ECMAScript [[Enumerable]] attribute is set.
Object.prototype.toLocaleString() // Calls toString().
Object.prototype.toString() // Returns a string representation of the object.
Object.prototype.unwatch() // Removes a watchpoint from a property of the object.
Object.prototype.valueOf() // Returns the primitive value of the specified object.
Object.prototype.watch() // Adds a watchpoint to a property of the object.

// Object: collection of properties
// Property: association between a name (key) and a value
// Method: A property which has a function as a value

console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.getPrototypeOf([]) == Array.prototype);
console.log(Object.getPrototypeOf(isNaN) == Function.prototype);

//immutability of objects
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };
console.log(object1 == object2); //= true
console.log(object1 == object3); //= false
//
object1.value = 15;
console.log(object2.value); //= 15
console.log(object3.value); //= 10

// iterating over an object using for-in
// this works on objects and NOT arrays because for-in iterates over INDEXES not
// values, and index of an array will be a string, not a number)
var ages = {};
function storeAge(name, age) {
    ages[name] = age;
}
storeAge("Larry", 58);
storeAge("Simon", 55);
for (var name_ in ages)
    console.log(name_ + " is " + ages[name_] + " years old");
//= Larry is 58 years old
//= Simon is 55 years old

//Iterate over an associative object
var list = { value: 1, rest: { value: 2, rest: null } };
for (var node = list; node; node = node.rest) {
    //...
}

// Object literal methods and shorthands
let foo = 'fuu';
let bar = {
    // Shorthand property assignment:
    foo, //= 'fuu'
    // Getter and Setter
    // Computed properties that are methods but not invoked()
    firstName: '',
    lastName: '',
    get name() {
        return this.firstName + ' ' + this.lastName;
    },
    set name(name) {
        [this.firstName, this.lastName] = name.split(' ');
    },
    // Shorthand method assignment
    myMethod(_params) {},
    // Identical to:
    myMethod: function(_params){},
};
bar.name = 'foo bar';
console.log(bar.name); // logs 'foo bar'; 

// Object destructuring
const foobar = {
    'baz': 'baz',
    'foo': 'foo',
    'bar': 'bar',
}
let {foo, bar} = foobar

// Joining two objects with spread operator
const profile = { firstName: 'Robin', lastName: 'Wieruch'};
const address = { country: 'Germany', city: 'Berlin', code: '10439'};
const user = { ...profile, gender: 'male', ...address};

//exercise with ancestry
//find the average age by century
//some useful instructions for iterating over objects using IN and FOR
function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}
var getCentury = function (p) { return Math.ceil(p.died / 100); },
    age = function (p) { return p.died - p.born; },
    centuryData = {},
    centuryDataAverages = {};
var century;
ancestry.forEach(function (p) {
    century = getCentury(p);
    if (century in centuryData) centuryData[century].push(age(p));
    else centuryData[century] = [age(p)];
});
for (var i in centuryData) {
    centuryDataAverages[i] = Math.ceil(average(centuryData[i]), 4);
};

// Constructors and prototypes
function Creature(type) {
    this.type = type;
}
var cicada = new Creature("insect");
var giraffe = new Creature("mammal");
//It's better to append the method to the prototype rather than inside the
//constructor because the method won't make use of closures (functions within
//functions) which affect performance
Creature.prototype.speak = function (sound) {
    console.log("The ", this.type, " is a ", this.type, " that says '", sound, "'.");
}
cicada.speak("yayayayaya");
giraffe.speak("nomnom");
Creature.prototype.edible = false;
console.log(cicada.edible); //false
cicada.edible = true;

// Encapsulation - Objects are like an interface that presents a simple
// control system, while those methods inside are complex.

// Creating a new object with Object.create()
// Object.create creates a new object from a prototype of the given argument
var person = {
    kind: 'person'
}
var zack = Object.create(person); //person is the prototype
console.log(zack.kind); // => ‘person’
//checking the object prototype
Object.getPrototypeOf(zack); //=> Object {kind: "person"} 
console.log(person.isPrototypeOf(zack)) //=> true
//Changing the prototype will also change all the objects that inherited from it
person.kind = "alien";
console.log(zack.kind); //alien
//Deleting a property will invert it back to the prototype of that property!
zack.kind = "person";
delete zack.kind;
console.log(zack.kind); //alien

// Constructors
function Foo() { }
var foo = new Foo();
console.log(foo instanceof Foo) //=> true

// Inheritance
function Person() { }
Person.prototype.getName = function () {
    return this.name;
};
var Me = function () {
    this.name = "Matt";
}
Me.prototype = Person.prototype;
var me = new Me();
console.log(me.getName()); //Matt

// Overwrite methods in the prototype
// antipattern?
var alex = { firstName: "Alex", lastName: "Russell" };
alex.toString(); // "[object Object]"
var brendan = {
    firstName: "Brendan",
    lastName: "Eich",
    toString: function () { return this.firstName + " " + this.lastName; }
};
brendan.toString() // "Brendan Eich"

// If .toJSON exists on an object, it will be used by 
// JSON.stringify calls to get the JSON format.
var User = function (obj) {
    this.username = obj.username;
    this.password = obj.password;
}
User.prototype.toJSON(){
    return {
        username: this.username
    }
}
var tobi = new User({ username: "Tobi", password: "ferret" });
JSON.stringify(tobi); //-> "{"username":"Tobi"}"

// Enumerating, checking for instances
var foo = { "a": 1, "b": 2 };
for (var x in foo) console.log(x); //-> a; b;
console.log("toString" in foo); // true because toSting() is not enumerable, so it won't show up in the for loop, but it will show up in the instance check because it inherited prototype
console.log(foo.hasOwnProperty("toString")); //->false because foo itself does not have the property toString (hasOwnProperty doesnt check prototypes)
console.log(foo.hasOwnProperty("a")); //->true
for (var x in foo) {
    if (foo.hasOwnProperty(x)) {
        // ... this is a real property
    }
}
// in the above example, foo has a prototype. we can create an object without
// a prototype like so
var ages = Object.create(null);
ages.Brendan = 52;
console.log("toString" in ages);// false
console.log("Brendan" in ages);// true
// another (super interesting) example from JS PATTERNS
// access Object.prototype.hasOwnProperty, and invoke (call()) it with an altered 'this' val
var i,
    hasOwn = Object.prototype.hasOwnProperty;
for (i in foo) {
    if (hasOwn.call(foo, i)) {
        console.log(i, ":", foo[i]);
    }
}
//More on the above method:
var object = Object.create(null);
object.quack = function () {
    console.log('quack');
}
Object.getPrototypeOf(object) === Object.prototype // => false
Object.getPrototypeOf(object) === null             // => true
object.hasOwnProperty('quack')// => TypeError: Object object has no method 'hasOwnProperty'
//We can still use `hasOwnProperty` from the `Object.prototype` though, if we
//call it with the `this` value set to something that 'looks like an object'.
//Function#call allows us to invoke any function with an altered `this` value.
//The first argument to call becomes the value of `this`  the rest of the
//arguments are passed to the function as per
Object.prototype.hasOwnProperty.call(object, 'quack') // => true

// Self-invoking constructor
// ensures the object is called properly with NEW
var Fn = function () {
    if (!(this instanceof Fn)) { //instanceof operator returns bool
        return new Fn();
    }
}
// Strict mode can also catch improperly invoked constructors!
function Point(x, y) {
    'use strict';
    this.x = x;
    this.y = y;
}
var p = Point(7, 5); // TypeError: Cannot set property 'x' of undefined

// Using call() to construct a new sub-class
function Product(name, price) {
    this.name = name;
    this.price = price;

    if (price < 0)
        throw RangeError('Cannot create product "' + name + '" with a negative price');
    return this;
}
function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}
Food.prototype = new Product();
function Toy(name, price) {
    Product.call(this, name, price);
    this.category = 'toy';
}
Toy.prototype = new Product();
var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);
//another example
function logFive(seq) {
    var len = seq.sequence.length < 5 ? seq.sequence.length : 5;
    for (var i = 0; i < len; i++)
        console.log(seq.sequence[i]);
}
var ArraySeq = function (arr) {
    this.sequence = arr;
}
var RangeSeq = function (from, to) {
    var arr = [];
    var i = from;
    while (i <= to) {
        arr.push(i);
        i++;
    }
    ArraySeq.call(this, arr);
}
logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104

// Getters and setters
//When specifying an interface, it is possible to include properties that are
//not methods. We could have defined minHeight and minWidth to simply hold
//numbers. But that’d have required us to compute them in the constructor,
//which adds code there that isn’t strictly relevant to constructing the
//object, and it would cause problems if, for example, the inner cell of an
//underlined cell was changed, at which point the size of the underlined cell
//should also change.
var pile = {
    elements: ["eggshell", "orange peel", "worm"],
    get height() {
        return this.elements.length;
    },
    set height(value) {
        console.log("Ignoring attempt to set height to", value);
    }
};
console.log(pile.height);// → 3
pile.height = 100;// → Ignoring attempt to set height to 100
console.log(pile.height);// → 3
//You can also add such a property to an existing object, for example a
//prototype, using the Object.defineProperty function (which we also used to
//create non-enumerable properties).
function Point(x, y) {
    this.x = x;
    this.y = y;
}
Point.prototype.plus = function (point) {
    return new Point(this.x + point.x, this.y + point.y);
}
Point.prototype.minus = function (point) {
    return new Point(this.x - point.x, this.y - point.y);
}
Object.defineProperty(Point.prototype, "distance", {//Distance from 0, 0
    get: function () { return Math.sqrt((this.x * this.x) + (this.y * this.y)); } //Using Pythagoras’ (a2+b2=c2) theorem to calculate
});
console.log(new Point(1, 2).plus(new Point(2, 3)));// → Point{x: 3, y: 5}
console.log(new Point(1, 2).minus(new Point(2, 3)));// → Point{x: -1, y: -1}
console.log(new Point(3, 4).distance);// → 5

// Extract a certain property from a collection of objects
function prop(propName) {
    return function (obj) {
        return obj[propName];
    }
}
[{ name: "larry", location: "MN" }, { name: "curly", wife: "marge" }].map(prop('name')); // ["larry", "curly"]

//////////
// Maps //
//////////

// Map performs better in scenarios involving frequent additions and removals of key - value pairs.

// Constructor
Map() // Creates a new Map object.

// Instance properties
Map.prototype.size // Returns the number of key / value pairs in the Map object.

// Instance methods
Map.prototype.clear() // Removes all key - value pairs from the Map object.
Map.prototype.delete(key) // Returns true if an element in the Map object existed and has been removed, or false if the element does not exist. Map.prototype.has(key) will return false afterwards.
Map.prototype.entries() // Returns a new Iterator object that contains an array of [key, value] for each element in the Map object in insertion order.
Map.prototype.forEach(callbackFn[, thisArg]) // Calls callbackFn once for each key-value pair present in the Map object, in insertion order. If a thisArg parameter is provided to forEach, it will be used as the this value for each callback.
Map.prototype.get(key) // Returns the value associated to the key, or undefined if there is none.
Map.prototype.has(key) // Returns a boolean asserting whether a value has been associated to the key in the Map object or not.
Map.prototype.keys() // Returns a new Iterator object that contains the keys for each element in the Map object in insertion order.
Map.prototype.set(key, value) // Sets the value for the key in the Map object.Returns the Map object.
Map.prototype.values() // Returns a new Iterator object that contains the values for each element in the Map object in insertion order.

// Iterate with for..of or Map.prototype.forEach
let papp = new Map()
papp.set('pen', 'apple')
papp.set('pineapple', 'pen')
for (let [key, val] of papp) {}
for (let key of papp.keys()) {}
for (let value of papp.values()) {}
papp.forEach(function(value, key) {}); // Why does value come before key... ?

// Map -- Array
let array = [['key1', 'val1'], ['key2', 'val2']]
let map = new Map(arr)
Array.from(map) == array == [...map]
// Array of keys
Array.from(map.keys()) == ['key1', 'key2']
// Use array methods on a map
[...papp].filter(function(key_value_pair, index, whole_array) {
    return key_value_pair[0].includes('1'); //
});

//////////////
// Classes  //
//////////////

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    toString() {
        return super.toString() + ' in ' + this.color;
    }
}
let cp = new ColorPoint(25, 8, 'green');
cp.toString(); // '(25, 8) in green'
console.log(cp instanceof ColorPoint); // true
console.log(cp instanceof Point); // true

// Class declarations aren't hoisted (they are scoped by order they appear)
new Foo(); //ReferenceError
class Foo {}


///////////
// Regex //
///////////

//1. Regular expression literals provide compilation of the regular expression
//when the script is loaded. When the regular expression will remain constant,
//use this for better performance.
var re = /ab+c/;

//2. Using the constructor function provides runtime compilation of the
//regular expression. Use the constructor function when you know the regular
//expression pattern will be changing, or you don't know the pattern and are
//getting it from another source, such as user input.
var re = new RegExp("ab+c");

//String.prototype.match() method retrieves the matches when matching a string against a regular expression.
//Returns an Array containing the matched results or null if there were no matches.
str.match(regexp);

// Using functions to replace
var stock = "1 lemon, 2 cabbages, and 101 eggs";
stock = stock.replace(/(\d+) (\w+)/g, eatOne);
function eatOne(match, amount, unit) {
    amount = Number(amount) - 1;
    if (amount == 1) {
        unit = unit.slice(0, unit.length - 1);
    }
    else if (amount == 0) {
        unit = unit + "s";
        amount = "no";
    }
    return amount + " " + unit;
}

// An object of several replacements
function escapeHTML(text) {
    var replacements = {
        "<": "&lt;", ">": "&gt;",
        "&": "&amp;", "\"": "&quot;"
    };
    return text.replace(/[<>&"]/g, function (character) {
        return replacements[character];
    });
}
console.log(escapeHTML("The 'pre-formatted' tag is written \"<pre>\"."));

// Looping over matches
var input = "A string with 3 numbers in it... 42 and 88.";
var number = /\b(\d+)\b/g;
var match;
while (match = number.exec(input))
  console.log("Found", match[1], "at", match.index);
// → Found 3 at 14
//   Found 42 at 33
//   Found 88 at 40

// Regular Expression syntax //
/**
Element            Matches this...
[xyz]              Any one character x or y or z, as listed in square brackets
[x-z]              Any one character within the range specified in brackets
[^xyz]             Any one character except x, y, z
[^x-z]             Any one character except the range in brackets
.                  Any character except newline
\d \D              Any digit (\d), any non-digit (\D) 
\s \S              Any whitespace (\s), any non-whitespace (\S) 
\w \W              Any word character (\w), any non-word character (\W) 
\b \B              Word boundary (\b), non-boundary (\B)
[\b]               Backspace (the square brackets help distinguish backspace from word boundary)
 ^                 Beginning of string; beginning of line if the m flag is set
 $                 End of string; end of line if the m flag is set
\n \r \f \t \v     Newline, carriage return, form feed, tab, vertical tab
\+ \- \. \* \? \|  Match + - . * ? | etc. verbatim (not as a special character)
\/ \\ \^ \$        Match / \ ^ $ verbatim (not as a special character)
\[ \] \( \) \{ \}  Match brackets/parentheses/braces verbatim
\xAB               Match the character with hexadecimal code AB
\uABCD             Match the Unicode character with hexadecimal code ABCD

x|y                Match x or y
+                  Match the preceding element one or more times
*                  Match the preceding element zero or more times
?                  Match the preceding element zero or one time
{n}                Match the preceding element exactly n times
{n,}               Match the preceding element n or more times
{m,n}              Match the preceding element at least m, at most n times

(...)              Match ... as a capturing group: store the matching substring
                   (used with string.match(re) to return an array of matching strings)
\1 \2 \3 etc.    Match the same substring as in capturing group number 1, 2, 3 etc. 
$1 $2 $3 etc.    Replace with the characters that matched group number 1, 2, 3 etc.
                   (used in the second argument of replace() method)
(?:...)            Match ... as a non-capturing group: grouping only, no storing

RegExp flags can be any combination of the following:
    i       Ignore case (both lowercase and uppercase letters will match)
    g       Global (allow multiple matches)
    m       Multiline (^ and $ will match the beginning/end of lines)

The effect of not setting these flags is as follows:
i not set   The regular expression is case-sensitive
g not set   Use only the first match (no global search)
m not set   ^ and $ match the beginning/end of the entire string

Notes
(1) A whitespace (\s) in a regular expression matches any one of the characters: space, formfeed (\f), newline (\n), return (\r), tab (\t), vertical tab (\v), non-breaking space (\xA0), as well as the Unicode characters \u00A0 \u2028 \u2029.
(2) When using the RegExp constructor: for each backslash in your regular expression, you have to type \\ in the RegExp constructor. (In JavaScript strings, \\ represents a single backslash!) For example, the following regular expressions match all leading and trailing whitespaces (\s); note that \\s is passed as part of the first argument of the RegExp constructor:
re = /^\s+|\s+$/g
re = new RegExp('^\\s+|\\s+$','g') 
**/

//////////////
// Promises //
//////////////

// Static methods
Promise.all(iterable) // Wait for all promises to be resolved, or for any to be rejected. ... 
Promise.allSettled(iterable) // Wait until all promises have settled (each may resolve or reject). Returns a promise that resolves after all of the given promises have either resolved or rejected, with an array of objects that each describe the outcome of each promise.
Promise.race(iterable) // Wait until any of the promises is resolved or rejected. If the returned promise resolves, it is resolved with the value of the first promise in the iterable that resolved. If it rejects, it is rejected with the reason from the first promise that was rejected.
Promise.reject(reason) // Returns a new Promise object that is rejected with the given reason.
Promise.resolve(value) // Returns a new Promise object that is resolved with the given value.If the value is a thenable(i.e.has a then method), the returned promise will "follow" that thenable, adopting its eventual state; otherwise the returned promise will be fulfilled with the value. Generally, if you don't know if a value is a promise or not, Promise.resolve(value) it instead and work with the return value as a promise.

// Instance methods
Promise.prototype.catch() // Appends a rejection handler callback to the promise, and returns a new promise resolving to the return value of the callback if it is called, or to its original fulfillment value if the promise is instead fulfilled.
Promise.prototype.then() // Appends fulfillment and rejection handlers to the promise, and returns a new promise resolving to the return value of the called handler, or to its original settled value if the promise was not handled(i.e.if the relevant handler onFulfilled or onRejected is not a function).
Promise.prototype.finally() // Appends a handler to the promise, and returns a new promise that is resolved when the original promise is resolved.The handler is called when the promise is settled, whether fulfilled or rejected.

//////////
// JSON //
//////////

JSON.parse(text[, reviver]) // Parse the string text as JSON, optionally transform the produced value and its properties, and return the value. Any violations of the JSON syntax, including those pertaining to the differences between JavaScript and JSON, cause a SyntaxError to be thrown. The reviver option allows for interpreting what the replacer has used to stand in for other datatypes.
    // Example with reviver
    // Parse a date-like string into a Date object
    const dateRegex = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');
    function jsonDateReviver(key, value) {
        if (dateRegex.test(value)) return new Date(value);
        return value;
    }
    JSON.parse('{"not_date":"foobar", "is_date":"2020-02-20"}', jsonDateReviver);
JSON.stringify(value[, replacer[, space]]) // Return a JSON string corresponding to the specified value, optionally including only certain properties or replacing property values in a user-defined manner. By default, all instances of undefined are replaced with null, and other unsupported native data types are censored. The replacer option allows for specifying other behavior.

////////////////////
// Best Practices //
////////////////////

// Use the || operator to specify a default value.
var ev = e || event;

//named function expressions
//neednt use arguments.callee
[1,2,3,4,5].map(function factorial (n) {
    return !(n > 1) ? 1 : factorial(n-1)*n;
});

getElementById("identifier") /* is faster than */ $("#identifier")

// typeof operator
typeof 37               === 'number';
typeof 42n              === 'bigint';
typeof ''               === 'string';
typeof 'bla'            === 'string';
typeof `templ litrl`    === 'string';
typeof '1'              === 'string'; // note that a number within a string is still typeof string
typeof true             === 'boolean';
typeof undeclaredVar    === 'undefined';
typeof { a: 1 }         === 'object';
// use Array.isArray or Object.prototype.toString.call
// to differentiate regular objects from arrays
typeof [1, 2, 4]        === 'object';
typeof function () { }  === 'function';
typeof class C { }      === 'function';

//Error handling
try {
    //some error occurs
    throw {
        name: "foo",
        message: "bar",
        remedy: errorHandler
    } 
} catch (e) { 
    e.remedy() 
}
function errorHandler(){
    console.log(this); //this = throw object data [name, message, remedy] 
}

//function expression aka anonymous function
var foo = function (a, b){};
//named function expression
//useful when debugging or recursing
var foo = function bar (a, b){};
foo.name; //-> bar
// function declarations
// moved to the top of the scope!
function foo (a, b) {}

// IMMEDIATE FUNCTIONS // Self-executing functions that can keep public/private scope 
// See Module Pattern below
(function (){
    // execute!
}());
(function(who, when){
    console.log("I met " + who + " on " + when);
})("Bob Doe", new Date()); //alternate syntax
(function (global) {
    //access global object
})(this);
//returning values
var result = function(){
    return 2 + 2;
}(); // result == 4 //wrapped parens can be omitted when assigning a return value to a variable.
var getResult = function(){
    var result = 3 + 3;
    return function(){
        return result;
    }
}(); // typeof getResult == "function"; getResult() == 6
//immediate object initialization
({
    max_width: 400,
    max_height: 500,
    getMax: function(){
        return this.max_width + "x" + this.max_height;
    },
    init: function(){
        //initialization tasks
        console.log(this.getMax());
    }
}).init();

// Comparing is in general best done by looking for truthyness or falsyness
// When only evaluating that an array has length,
// instead of this:
if ( array.length > 0 ) {}

// ...evaluate truthiness, like this:
if ( array.length ) {}

// When only evaluating that an array is empty,
// instead of this:
if ( array.length === 0 ) {}

// ...evaluate truthiness, like this:
if ( !array.length ) {}

// When only evaluating that a string is not empty,
// instead of this:
if ( string !== "" ) {}

// ...evaluate truthiness, like this:
if ( string ) {}

// When only evaluating that a string _is_ empty,
// instead of this:
if ( string === "" ) {}

// ...evaluate falsy-ness, like this:
if ( !string ) {}

// When only evaluating that a reference is true,
// instead of this:
if ( foo === true ) {}

// ...evaluate like you mean it, take advantage of built in capabilities:
if ( foo ) {}

// When evaluating that a reference is false,
// instead of this:
if ( foo === false ) {}

// ...use negation to coerce a true evaluation
if ( !foo ) {}

// ...Be careful, this will also match: 0, "", null, undefined, NaN
// If you _MUST_ test for a boolean false, then use
if ( foo === false ) {}

// When only evaluating a ref that might be null or undefined, but NOT false, "" or 0,
// instead of this:
if ( foo === null || foo === undefined ) {}

// ...take advantage of == type coercion, like this:
if ( foo == null ) {}

// Remember, using == will match a `null` to BOTH `null` and `undefined`
// but not `false`, "" or 0
null == undefined

// 
NaN === NaN; //false
isNaN(NaN); //true

//Falsy:
false;
null;
undefined;
'';
0;
NaN;

// 3.B.2.1
var number = 1,
  string = "1",
  bool = false;
number;// 1
number + "";// "1"
string;// "1"
+string;// 1
+string++;// 1
string;// 2
bool;// false
+bool;// 0
bool + "";// "false"
// 3.B.2.2
var number = 1,
  string = "1",
  bool = true;
string === number;// false
string === number + "";// true
+string === number;// true
bool === number;// false
+bool === number;// true
bool === string;// false
bool === !!string;// true (! converts the string to boolean[false] and !! false->true)
// 3.B.2.3
var array = [ "a", "b", "c" ];
!!~array.indexOf("a");// true
!!~array.indexOf("b");
!!~array.indexOf("c");// true
!!~array.indexOf("d");// false
// Note that the above should be considered "unnecessarily clever"
// Prefer the obvious approach of comparing the returned value of
// indexOf, like:
if ( array.indexOf( "a" ) >= 0 ) {
  // ...
}
// 3.B.2.4
var num = 2.5;
parseInt( num, 10 );
// is the same as...
~~num;
num >> 0;
num >>> 0;
// All result in 2
// Keep in mind however, that negative numbers will be treated differently...
var neg = -2.5;
parseInt( neg, 10 );
// is the same as...
~~neg;
neg >> 0;// All result in -2
// However...
neg >>> 0;// Will result in 4294967294

// Converting data into a program
// eval() is a bad idea.
// A better way of converting data into program is to use the Function constructor. 
// This takes as arguments first a string containing a comma-separated list of argument 
// names, and then a string containing the function’s body.
var plusOne = new Function("n", "return n + 1;");
console.log(plusOne(4));// → 5

//a new scope is added to the scope chain when a try-catch block or a with
//block is encountered. In either of these cases, a new object is created and
//placed at top of the scope chain:
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};
function persist(person) {
  with (person) {
    // The 'person' object was pushed onto the scope chain when we
    // entered this "with" block, so we can simply reference
    // 'firstName' and 'lastName', rather than person.firstName and
    // person.lastName
    if (!firstName) {
      throw new Error('FirstName is mandatory');
    }
    if (!lastName) {
      throw new Error('LastName is mandatory');
    }
  }
  try {
    person.save();
  } catch(error) {
    // A new scope containing the 'error' object is accessible here
    console.log('Impossible to store ' + person + ', Reason: ' + error);
  }
}
var p1 = new Person('John', 'Doe');
persist(p1);

// Method overloading
function makeNinja(name){} 
function makeSamurai(name, rank){} 
makeNinja.length == 1; //true
makeSamurai.length == 2; //true
// Making use of the length property to overload methods
function addMethod(object, name, fn){ 
  // Save a reference to the old method 
  var old = object[ name ]; 
  // Overwrite the method with our new one 
  object[ name ] = function(){ 
    // Check the number of incoming arguments, 
    // compared to our overloaded function 
    if ( fn.length == arguments.length ) 
      // If there was a match, run the function 
      return fn.apply( this, arguments ); 
 
    // Otherwise, fallback to the old method 
    else if ( typeof old === "function" ) 
      return old.apply( this, arguments ); 
  }; 
} 
function Ninjas(){ 
  var ninjas = [ "Dean Edwards", "Sam Stephenson", "Alex Russell" ]; 
  addMethod(this, "find", function(){ 
    return ninjas; 
  }); 
  addMethod(this, "find", function(name){ 
    var ret = []; 
    for ( var i = 0; i < ninjas.length; i++ ) 
      if ( ninjas[i].indexOf(name) == 0 ) 
        ret.push( ninjas[i] ); 
    return ret; 
  }); 
  addMethod(this, "find", function(first, last){ 
    var ret = []; 
    for ( var i = 0; i < ninjas.length; i++ ) 
      if ( ninjas[i] == (first + " " + last) ) 
        ret.push( ninjas[i] ); 
    return ret; 
  }); 
} 
var ninjas = new Ninjas(); 
assert( ninjas.find().length == 3, "Finds all ninjas" ); 
assert( ninjas.find("Sam").length == 1, "Finds ninjas by first name" ); 
assert( ninjas.find("Dean", "Edwards").length == 1, "Finds ninjas by first and last name" ); 
assert( ninjas.find("Alex", "X", "Russell") == null, "Does nothing" );


//////////////
// PATTERNS //
//////////////

// Module pattern //
// Emulate private/public classes
var mod = (function(){
  var _public = {},
      privateVar = 0;
      privateMethod = function(foo){
        console.log(foo, privateVar);
      };
  _public.publicVar = "foo";
  _public.publicFunction = function(bar){
    privateVar++;
    privateMethod(bar);
  }
  return _public;
})();

var myNamespace = (function () {

  var myPrivateVar = 0, // A private counter variable
      myPrivateMethod = function( foo ) { // A private function which logs any arguments
        console.log( foo );
      };

  return {
    myPublicVar: "foo",
    myPublicFunction: function( bar ) {
      myPrivateVar++;
      myPrivateMethod( bar );
    }
  };

})();

// Example of above pattern
var basketModule = (function () {
  // privates
  var basket = []; 
  function doSomethingPrivate() {
    //...
  }
  function doSomethingElsePrivate() {
    //...
  }
  // Return an object exposed to the public
  return { 
    // Add items to our basket
    addItem: function( values ) {
      basket.push(values);
    },
    // Get the count of items in the basket
    getItemCount: function () {
      return basket.length;
    },
    // Public alias to a  private function
    doSomething: doSomethingPrivate,
    // Get the total value of items in the basket
    getTotal: function () {
      var q = this.getItemCount(),
          p = 0;
      while (q--) {
        p += basket[q].price;
      }
      return p;
    }
  };
}());

// basketModule returns an object with a public API we can use
basketModule.addItem({
  item: "bread",
  price: 0.5
});
basketModule.addItem({
  item: "butter",
  price: 0.3
});
console.log( basketModule.getItemCount() );// Outputs: 2
console.log( basketModule.getTotal() );// Outputs: 0.8

// However, the following will not work:
console.log( basketModule.basket );// Outputs: undefined 
// This is because the basket itself is not exposed as a part of our
// the public API

// This also won't work as it only exists within the scope of our
// basketModule closure, but not the returned public object
console.log( basket ); 

// PUBLISH/SUBSCRIBE PATTERN // Similar to Observer pattern, it observs for
// actions executes an anonymous method upon acting
var pubsub = {};
(function(q) {
      var topics = {},
          subUid = -1;
    // Publish or broadcast events of interest
    // with a specific topic name and arguments
    // such as the data to pass along
    q.publish = function( topic, args ) {
        if ( !topics[topic] ) {
            return false;
        }
        var subscribers = topics[topic],
            len = subscribers ? subscribers.length : 0;
        while (len--) {
            subscribers[len].func( topic, args );
        }
        return this;
    };
    // Subscribe to events of interest
    // with a specific topic name and a
    // callback function, to be executed
    // when the topic/event is observed
    q.subscribe = function( topic, func ) {
      if (!topics[topic]) {
        topics[topic] = [];
      }
      var token = ( ++subUid ).toString();
      topics[topic].push({
        token: token,
        func: func /** the observer!!!! */
      });
      return token;
    };
    // Unsubscribe from a specific
    // topic, based on a tokenized reference
    // to the subscription
    q.unsubscribe = function( token ) {
        for ( var m in topics ) {
            if ( topics[m] ) {
                for ( var i = 0, j = topics[m].length; i < j; i++ ) {
                    if ( topics[m][i].token === token) {
                        topics[m].splice( i, 1 );
                        return token;
                    }
                }
            }
        }
        return this;
    };
}( pubsub ));

var messageLogger = function ( topics, data ) {
    console.log( "Logging: " + topics + ": " + data );
};
var subscription = pubsub.subscribe( "inbox/newMessage", messageLogger );
pubsub.publish( "inbox/newMessage", "hello world!" );
pubsub.publish( "inbox/newMessage", ["test", "a", "b", "c"] );
pubsub.publish( "inbox/newMessage", {
  sender: "hello@google.com", 
  body: "Hey again!"
});
// pubsub.unsubscribe( subscription );
// Once unsubscribed, this for example won't result in our
// messageLogger being executed as the subscriber is
// no longer listening
pubsub.publish( "inbox/newMessage", "Hello! are you still there?" );

// FACAD PATTERN //
var module = (function() {
    var _private = {
        i:5,
        get : function() {
            console.log( "current value:" + this.i);
        },
        set : function( val ) {
            this.i = val;
        },
        run : function() {
            console.log( "running" );
        },
        jump: function(){
            console.log( "jumping" );
        }
    };
    return {
        facade : function( args ) {
            _private.set(args.val);
            _private.get();
            if ( args.run ) {
                _private.run();
            }
        }
    };
}());
// Outputs: "current value: 10" and "running"
module.facade( {run: true, val:10} );

// MIXIN PATTERN //
// with super- and sub-classes

var Person =  function( firstName , lastName ){
  this.firstName = firstName;
  this.lastName =  lastName;
  this.gender = "male";
};
    
// a new instance of Person can then easily be created as follows:
var clark = new Person( "Clark" , "Kent" );
       
// Define a subclass constructor for for "Superhero":
var Superhero = function( firstName, lastName , powers ){
    
    // Invoke the superclass constructor on the new object
    // then use .call() to invoke the constructor as a method of
    // the object to be initialized.
    
    Person.call( this, firstName, lastName ); // Use Person() as a constructor with the arguments given to Superhero method
    //now this.firstname, this.lastname, and this.gender are defined

    // Finally, store their powers, a new array of traits not found in a normal "Person"
    this.powers = powers;
};

SuperHero.prototype = Object.create( Person.prototype );
var superman = new Superhero( "Clark" ,"Kent" , ["flight","heat-vision"] );
console.log( superman ); 

// Another example of Mixin:

// Define a simple Car constructor
var Car = function ( settings ) {
  this.model = settings.model || "no model provided";
  this.color = settings.color || "no colour provided";
};

// Mixin
var Mixin = function () {};
Mixin.prototype = {
    driveForward: function () {
        console.log( "drive forward" );
    },
    driveBackward: function () {
        console.log( "drive backward" );
    },
    driveSideways: function () {
        console.log( "drive sideways" );
    }
};

// Extend an existing object with a method from another
function augment( receivingClass, givingClass ) {
    // only provide certain methods
    if ( arguments[2] ) {
        for ( var i = 2, len = arguments.length; i < len; i++ ) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    }
    // provide all methods
    else {
        for ( var methodName in givingClass.prototype ) {

            // check to make sure the receiving class doesn't 
            // have a method of the same name as the one currently 
            // being processed 
            if ( !Object.hasOwnProperty(receivingClass.prototype, methodName) ) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }

            // Alternatively:
            // if ( !receivingClass.prototype[methodName] ) {
            //  receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            // }
        }
    }
}

// Augment the Car constructor to include "driveForward" and "driveBackward"
augment( Car, Mixin, "driveForward", "driveBackward" );

// Create a new Car
var myCar = new Car({
    model: "Ford Escort",
    color: "blue"
});

// Test to make sure we now have access to the methods
myCar.driveForward();// drive forward
myCar.driveBackward();// drive backward

// We can also augment Car to include all functions from our mixin
// by not explicitly listing a selection of them
augment( Car, Mixin );

var mySportsCar = new Car({
    model: "Porsche",
    color: "red"
});

mySportsCar.driveSideways();// drive sideways

// Merge defaults and options, without modifying the defaults
var defaults = { validate: false, limit: 5, name: "foo" };
var options = { validate: true, name: "bar" };
// Merge defaults and options, without modifying defaults
var settings = _.defaults(defaults, options); //underscore
var settings = $.extend( {}, defaults, options ); //Jquery

/***************/
/** LIBRARIES **/
/***************/

/** Axios **/
// Promise based HTTP client for the browser and node.js
// https://github.com/axios/axios

/** Formik **/
// Forms in React
// https://jaredpalmer.com/formik