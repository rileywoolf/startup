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

- three ways to associate CSS with HTML
  1. `style` attribute of HTML element and explicitly assign declarations
  2. use the HTML `style` element to define CSS rules within the HTML (should appear in the head element)
  3. use HTML `link` element to create hyperlink ref to external file containing CSS (must appear in head element)
- rules cascade down from highest nodes to lowest level (lower declaration overrides higher)
- box model
  - innermost box: contains the element's content
  - padding
  - border
  - margin: considered external to actual styling of box, only represents whitespace

### Selectors

- element type selector
  - element name selector (like `body`)
  - can use wildcard element name selector (`*`) to select all elements
- combinators
  - descendant combinator: defined with a space delimited list of values where each item in the list is a descendant of the previous item (`body section` = any section that is a descendant of a body)
  - child: a list of direct children (`section > p` = any p that is a direct child of a section)
  - general sibling: a list of siblings (`p ~ div` = any p that has a div sibling)
  - adjacent sibling: a list of adjacent siblings (`p + div` = any p that has an adjacent div sibling)
- class selector (`.class-name`): can also be combined with element name
- id selector (`#id`)
- attribute selector
  - allows you to choose elements based on their attributes
  - ex. `p[class='summary']`
- pseudo selector: select based on positional relationships, mouse interactions, hyperlink visitation states, attributes)

### Declarations

- specify a property and value to assign when the rule selector matches 1+ elements
  | Property | Value | Discussion |
  | ------------------ | ---------------------------------- | ------------------------------------------------------------------------------ |
  | background-color | color | Fill the background color |
  | border | color width style | Sets the border using shorthand where any or all of the values may be provided |
  | border-radius | unit | The size of the border radius |
  | box-shadow | x-offset y-offset blu-radius color | Creates a shadow |
  | columns | number | Number of textual columns |
  | column-rule | color width style | Sets the border used between columns using border shorthand |
  | color | color | Sets the text color |
  | cursor | type | Sets the cursor to display when hovering over the element |
  | display | type | Defines how to display the element and its children |
  | filter | filter-function | Applies a visual filter |
  | float | direction | Places the element to the left or right in the flow |
  | flex | | Flex layout. Used for responsive design |
  | font | family size style | Defines the text font using shorthand |
  | grid | | Grid layout. Used for responsive design |
  | height | unit | Sets the height of the box |
  | margin | unit | Sets the margin spacing |
  | max-[width/height] | unit | Restricts the width or height to no more than the unit |
  | min-[width/height] | unit | Restricts the width or height to no less than the unit |
  | opacity | number | Sets how opaque the element is |
  | overflow | [visible/hidden/scroll/auto] | Defines what happens when the content does not fix in its box |
  | position | [static/relative/absolute/sticky] | Defines how the element is positioned in the document |
  | padding | unit | Sets the padding spacing |
  | left | unit | The horizontal value of a positioned element |
  | text-align | [start/end/center/justify] | Defines how the text is aligned in the element |
  | top | unit | The vertical value of a positioned element |
  | transform | transform-function | Applies a transformation to the element |
  | width | unit | Sets the width of the box |
  | z-index | number | Controls the positioning of the element on the z axis |
- units to define the size of a CSS property
  - px: number of pixels
  - pt: points (1/72 of an inch)
  - in: inches
  - cm: centimeters
  - %: percentage of parent element
  - em: multiplier of width of the letter m in the parent's font
  - rem: multiplier of width of the letter m in the root's font
  - ex: multiplier of the height of the element's font
  - vw: percentage of viewport's width
  - vh: percentage of viewport's height
  - vmin: percentage of viewport's smaller dimension
  - vmax: percentage of viewport's larger dimension
- color
  - keyword: set of predefined colors (`cornflowerblue`)
  - RGB hex: red, green, and blue as hex (with optional alpha opacity)
  - RGB function: rgb as percentage or num 0-255, with optional alpha opacity (`rbg(50%, 255, 128, 0,5)`)
  - HSL: hue (position on 365 degree color wheel), saturation (how gray the color is), and light (how bright the color is) with optional opacity percentage (`hsl(180, 30%, 90%, 0.5)`)

### Fonts

- font families: `serif` (small stroke attached to ends of major strokes), `sans-serif` (no extra strokes), `fixed` (all chars same size), `symbol` (non-lang chars like emojis or arrows)
- importing fonts
  - use `@font-face` rule to provide font name and source location
  - instead of hosting font files on your server, you can load them from a font provider (easiest way is to use CSS import statement)

### Animation

- add `animation-name` and `animation-duration` properties to the element you want to animate
- create `@keyframes name { from{...} to{...}}`

### Responsive Design

- common options for `display`: none (don't display), block (displays with width that fills its parent element), inline (displays with width only as large as its content), flex, grid
- viewport meta tag
  - include this in head element of all HTML pages to tell the browser not to scale the page
  - `<meta name="viewport" content="width=device-width,initial-scale=1"/>`
- float: moves an element to the left or right of its container element and allows inline elements to wrap around it
- media queries
  - dynamically detects the size and orientation of the device and applies CSS rules accordingly
  - `@media (orientation: portrait) { ... }`

#### grid

- set `display` property of container element to `grid`
- property `grid-template-columns` specifies the layout of grid columns
- `grid-gap` sets the gap between grid items

#### flex

- helpful to partition application into areas that responsively move around as window resizes/orientation changes
- set `display` property of container element to `flex`
- choose orientation by setting `flex-direction` property
- in the children elements, set the property of `flex`
  - `flex: 1` means that the child gets one fractional unit of growth
  - `flex: 0 80px` means that it will not grow and that its starting height is 80px

### Debugging

- use Google Chrome debugger by right clicking on the HTML page element you want to debug and clicking `inspect` (use the Live Server extension in VS Code to pull it up in your browser)
- can change the values right in the debugger to allow you to see how the property is affecting the page

### Frameworks

- provide functions and components that commonly appear in web applications
- bootstrap
  - integrate bootstrap into your web apps by adding the HTML link elements to your head element
  - after it is linked in your HTML files, you can use the components it provides

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

### Scope

- four different kinds
  1. global: visible to all code
  2. module: visible to all code running in a module
  3. function: visible within a function
  4. block: visible within a block of code delimited by curly braces
- `var` was the original keyword to declare a variable, but it ignores block scope SO USE `let` or `const`
- `this`: represents a variable that points to an object containing the context within the scope of line currently being executed
  1. global: referenced outside a function or object it refers to the `globalThis` object, which is the context for runtime environment
  2. function: referenced inside a function it refers to the object that owns the function
  3. object: referenced in an object, it refers to the object
- closure: a function and its surrounding state
  - whatever variables are accessible when a function is created are available inside that function (even if you pass the function outside the scope of its orginal creation)

### Modules

- have to explicitly export the objects you want to be visible outside the module: `export function alertDisplay(msg) { alert(msg); }`
- import the exported function into another module using `import` : `import { alertDisplay } from './alert.js';`
- modules can only be called from other modules

### DOM (Document Object Model)

- object representation of the HTML elements the browser uses to render the display
- provide access to the DOM through global var named `document` that points to the root element of the DOM
- everything in an HTML documeent has a node in the DOM
- accessing DOM: you can provide a CSS selector to the `querySelectorAll` function in order to select elements from the document
- modifying DOM
  - to create a new element, you first create the element on the DOM doc, then you insert the new element into the DOM tree by appending to an existing element
  ```
  function insertChild(parentSelector, text) {
    const newChild = document.createElement('div');
    newChild.textContent = text;
    const parentElement = document.querySelector(parentSelector);
    parentElement.appendChild(newChild);
  }
  insertChild('#courses', 'new course');
  ```
  - to delete element, call `removeChild` on the parent element
  ```
  function deleteChild(parentSelector) {
    const e1 = document.querySelector(parentSelector);
    e1.parentElement.removeChild(e1);
  }
  deleteChild('#courses div');
  ```
  - injecting HTML
    - `const e1 = document.querySelector('div'); e1.innerHTML = '<div class="injected"><b>Hello</b>!</div>';`
    - make sure that if you inject HTML it cannot be manipulated by a user (either sanitize any HTML that contains variables or just use DOM manipulation)
  - event listeners
    - all DOM elements support ability to attach a function that gets called when an event occurs on the element
    - this event listener gets called when an element gets clicked
    ```
    const submitDataE1 = document.querySelector('#submitData');
    submitDataE1.addEventListener('click', function (event) {
      console.log(event.type);
    });
    ```
    - common events: clipboard, focus, keyboard, mouse, text selection
