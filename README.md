# startup


## design

Did you make a new year's resolution to read more books but aren't quite sure what to read? Do you love reading but need a place to keep track of your incredibly important opinions of the books you've read? We have just the app for you! Bibliobibuli allows you to share what book you are currently reading as well as see what others are reading. You can write reviews of the books you have read and see what others are saying about the books they've read. Get ready to read!

![wireframe of page design](bibliobibuli-wireframe.png)


### Key Features
* secure login over HTTPS
* ability to list what book you're currently reading
* see what books others are reading
* rate a book and write a review
* see the book reviews of others
* reviews and currently reading are persistently stored

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
  - numbers: + - * / === (for equality)
  - strings: + (concatenation) and === (equality)
- type conversions
  - since JavaScript is a weakly typed language, a variable can change type when assigned a new value or converted based on the context it used in
  - some funny business happens using `==`, so use the STRICT equality and inequality operators (`===` and `!==`)
- conditionals
  - ternary operator: `CONDITION ? TRUE EXPR : FALSE EXPR;`
- loops (along with for, do while, and while)
  - `for in`: iterates over an object's property names 
  - `for of`: iterates over an iterable's property values (array, map, set, etc)
