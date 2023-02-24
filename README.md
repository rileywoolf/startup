# startup

## design

Did you make a new year's resolution to read more books but aren't quite sure what to read? Do you love reading but need a place to keep track of your incredibly important opinions of the books you've read? We have just the app for you! Bibliobibuli allows you to share what book you are currently reading as well as see what others are reading. You can write reviews of the books you have read and see what others are saying about the books they've read. Get ready to read!

![wireframe of page design](resources/bibliobibuli-wireframe.png)

### Key Features

- secure login over HTTPS
- ability to list what book you're currently reading
- see what books others are reading
- rate a book and write a review
- see the book reviews of others
- reviews and currently reading are persistently stored

### Server IP Address (EC2)

http://18.216.215.40/

### Server Domain (Route 53)

https://riley260.click/

# Class Notes

### Github Assignment

I am modifying this for the first assignment!
GitHub assignment: I learned how to resolve merge conflicts!

### Caddy/HTTPS

Made my web server communication secure through Caddy.

## HTML

### Structure

- common elements: `body`, `header`, `footer`, `main`, `section`, `aside`, `p`, `table`, `ol/ul` ordered or unordered list, `div`, `span`
- block (distinct block in the structure) vs. inline (don't disrupt the flow of a block of content)

### Input

| Element    | Meaning                          | Example                                        |
| ---------- | -------------------------------- | ---------------------------------------------- |
| `form`     | Input container and submission   | `<form action="form.html" method="post">`      |
| `fieldset` | Labeled input grouping           | `<fieldset> ... </fieldset>`                   |
| `input`    | Multiple types of user input     | `<input type="" />`                            |
| `select`   | Selection dropdown               | `<select><option>1</option></select>`          |
| `optgroup` | Grouped selection dropdown       | `<optgroup><option>1</option></optgroup>`      |
| `option`   | Selection option                 | `<option selected>option2</option>`            |
| `textarea` | Multiline text input             | `<textarea></textarea>`                        |
| `label`    | Individual input label           | `<label for="range">Range: </label>`           |
| `output`   | Output of input                  | `<output for="range">0</output>`               |
| `meter`    | Display value with a known range | `<meter min="0" max="100" value="50"></meter>` |

- the purpose of a `form` element is to submit the inputs it contains (necessary before JavaScript)
- many different input types:
  - text: single line text value
  - password: obscured password
  - email
  - tel: telephone number
  - url: URL address
  - number
  - checkbox: inclusive selection
  - radio: exclusive selection
  - range: range-limited number
  - date: year, month, day
  - datetime-local: date and time
  - month: year, month
  - week: week of year
  - color
  - file: local file
  - submit: button to trigger form submission
- in order to create an input you have to specify the desired `type` attribute along with other attributed associated with that input type
- common input elemeent attributes
  - name: name of the input; submitted as the name of the input if used in a form
  - disabled: disables the user's ability to interact with the input
  - value: initial value for the input
  - required: requires that a value be entered
- `pattern` attribute exists for text, search, url, tel, email, and password inputs to provide a regex that has to match the input for it to be valid

### Media Elements

- external media: all media tags that reference external media take a URL as an attribute which can be either a relative or full path
  - image: `img` element has `src` attribute to specify URL to source image and `alt` attribute to describe the image
  - audio: `audio` element has `src` for the URL, `controls` if you want the user to be able to control playback, `autoplay` starts audio as soon as it is loaded, and `loop` keeps the audio playing over and over
  - video: `video` element has `src` for the URL, and `controls` and `autoplay` like audio
- internal media: allow you to create images directly in your HTML
  - `svg` (scalable vector graphics)
  - `canvas` (simple HTML for the canvas, but need JavaScript for drawing)

### Simon HTML Assignment

- One of the main things that this assignment taught me was how to add hyperlinks to other pages on the website so that you can click on the link to see a different page.
- Another thing that I learned on this assignment was how to use a header, main, and footer to set up a logical structure for the webpage.

## CSS

- CSS Practice assignment: learned about selectors, declarations, fonts, and animations.
- CSS Flex: to make a body element a responsive flexbox, set the display property to flex; `flex: 1` means that it will get one fractional unit of growth, while `flex: 0 80px` won't allow that element to grow and will give it a starting height of 80pixels

### Simon CSS Assignment

- To show that a certain navigation bar item is selected, set the class of that link to "nav-link active" instead of just "nav-link"
- When you need to set multiple aspects of the margin to different things, you can just do `margin: top right bottom left` instead of assiging each value of margin in a separate line
- Using the `!important` rule overrides all previous styling rules for that property on that element

### UX Design

- Tools to help choose a color palette: [Paletton](https://paletton.com/) and [Adobe](https://color.adobe.com/create/color-wheel)
- Fonts
  - San Serif for buttons, navigation links, body text
  - Serif for paragraph headings
  - Monospaced for code examples or text that need alignment
  - [See Google's open font collection](https://fonts.google.com/about)
- Some icon packages: [Font Awesome](https://fontawesome.com/), [Bootstrap Icons](https://icons.getbootstrap.com/), [Material Icons](http://google.github.io/material-design-icons/), [Flat Color Icons](https://github.com/icons8/flat-color-icons), [Ant Design Icons](https://github.com/ant-design/ant-design-icons)

## JavaScript

### JavaScript Console

- log
  - `console.log('MSG');`
  - create formatted messages (i.e. `console.log('%s', 'MSG');`
  - specify CSS declarations too: `console.log(%c MSG', 'font-size:1.5em; color:green;');`
- timers allow you to see how long a piece of code runs for

```
console.time('NAME');
// code here
console.timeEnd('NAME');
// OUTPUT: NAME: 349.49 ms
```

- `count` is used to see how many times a block of code is called

### Type and Construct

- declaring variables
  - `let` allows you to change the value of the variable
  - `const` causes an error if you try to change it
- types
  - `Null`: a var that has not been assigned a value
  - `Undefined`: a var that has not been defined
  - `Boolean`: true or false
  - `Number`: 64-bit signed number
  - `BigInt`: number of arbitrary magnitude
  - `String`: textual sequence of characters
  - `Symbol`: a unique value
- common operators
  - numbers: + - \* / === (for equality)
  - strings: + (concatenation) and === (equality)
- type conversions
  - since JavaScript is a weakly typed language, a variable can change type when assigned a new value or converted based on the context it used in
  - some funny business happens using `==`, so use the STRICT equality and inequality operators (`===` and `!==`)
- conditionals
  - ternary operator: `CONDITION ? TRUE EXPR : FALSE EXPR;`
- loops (along with for, do while, and while)
  - `for in`: iterates over an object's property names
  - `for of`: iterates over an iterable's property values (array, map, set, etc)

### String

- can be surrounded by single or double quotes
- can also use a backtick (\`), but this defines a string literal that may contain JavaScript that is evaluated in place and concatenated to the string (the replacement specifier is the dollar sign followed by a curly brace pair and everything in the braces is evaluated as js)
- common functions: length, indexOf, split, startsWith, endsWith, toLowerCase

### Functions

- first class objects: can be assigned a name, passed as a param, returned as a result, and referenced from an object or array like any other variable
- parameters
  - if a parameter is not provided in the call, then that parameter has a value of `undefined` on execution
  - a function can define a default value `function fun(val, val2='default'){...}`
- anonymous functions

```
const add = function (a, b) {
    return a + b;
};
```

- inner functions: functions declared within other functions (modularize code without exposing private details)

### Arrow Functions

- curly braces are optional
- return keyword is optional if no curly braces are provided, but necessary if curly braces are used
- inherit the `this` pointer from the scope it is created in, which makes a `closure` (allows a function to continue referencing its creation scope even after it has passed from that scope)

```
// start with an anonymous function
(function (name) {
  return 'hello' + name;
});
// remove function and put arrow between arg and opening bracket
(name) => {
  return 'hello' + name;
}
// remove body brackets and return
(name) => 'hello' + name;
// remove param parentheses
name => 'hello' + name;
```

### Arrays

- a sequence of other objects and primitives
- common functions: `push`, `pop`, `slice` (returns a sub-array), `sort`, `values` (creates an iterator to use with a `for of` loop), `find` (finds the first item satisfied by a test function), `forEach` (run a function on each item in the array), `reduce` (runs a function to reduce each item to a single item), `map` (run a function to map the array to a new array), `filter` (run a function to remove items), `every` (run a funcion to test if all items match), `some` (run a function to see if any items match)

### Objects and Classes

#### objects

- represents a collection of name value pairs (i.e. properties)
- once an object is declared (with `new` operator) a property can be added by referencing the property name in an assignment
  - `obj.prop=VAL`
  - `obj['prop']=VAL`
- any type of variable can be assigned to a property
- object-literal syntax

```
const obj = {
    a : hello,
    b: 35,
};
```

- common functions: `entries` (returns array of key value pairs), `keys` (returns array of keys), `values` (returns array of values)
- constructor: any function that returns an object; can be invoked with `new`

#### classes

- look similar to declaring an object, but have an explicit constructor and assumed function declarations
- make properties and functions private by prefixing `#`

### Regular Expressions

- regex support built into js
- can either use RegEx class constructor (`new RegEx('ab*', 'i')`) or regex literal (`/ab*/i`)
- `/pattern/modifiers;`
  - g: perform a global match (don't just stop after first match)
  - i: case-insensitive match
  - m: multiline matching

### Rest and Spread

- rest allows you to call a parameter with any number of parameters and it puts the parameters that aren't directly assigned to a parameter in an array
  - `function foo(param1, param2, ...others){...}`
- spread is the opposite of rest, it takes an object that is iterable and expands it to a function's params
  - `func(...[1, 2])` this will call func with a parameter of 1 and parameter of 2

### Destructuring

- pulls individual items out of an existing one
- can be done with arrays or objects
- with an array a: `[b, c] = a;` this line sets b to the first element and c to the second
  - combine multiple items from the original object using rest
- similar for objects, but you specify the property you want to pull from the source
  - `const o = {a: 1, b: 'hi', c: 4}; const {a, c} = o;`
  - can map names to new variables instead of just using original property names `const {a: count, b: type} = o;`

### Exceptions

- supports exception handling with `try catch` and `throw` syntax
- `finally` block also supported (always called when try block is exited, regardless if an exception was thrown)
- restrict exceptions to truly exceptional situations
- fallback pattern: put the normal feature path in try block and provide fallback implementation in catch block
