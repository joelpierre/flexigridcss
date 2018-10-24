# FlexigridCSS
A css framework which incorporates Flexbox and CSS Grid.

## Quick install

FlexigridCSS is constantly in development! Try it out now:

### NPM

```sh
npm install flexigridcss
```

**or**

### Yarn

```sh
yarn add flexigridcss
```
### Import
After installation, you can import the CSS file into your project using this snippet:

```sh
import 'flexigridcss/dist/flexigridcss.css'

// or

import 'flexigridcss/dist/flexigridcss.min.css'
```

Feel free to raise an issue or submit a pull request.

## The Grid

#### Whats in place now?
At present **``v.0.0.10``** we have the basic ``.container.row.flex-x-x`` setup. 

##### .container / .container-fluid
All ``.container / .container-fluid``'s are ``display: grid;``
with different column numbers based on the device type. ``.container`` having a fixed width and ``.container-fluid`` having the width of the entire viewport.

##### Rows/Columns
All ``.row``'s are 
````scss
.row {
  ...
  display: flex; 
  flex-direction: row;
  ...
}
```` 
with a 100% width. Which is used to encapsulate the flex items. 

Similarly to all ``.row``'s, all ``.column``'s are
````scss
.column {
  ...
  display: flex; 
  flex-direction: column;
  ...
}
```` 
this changes the flex items from moving across the x-axis to the y-axis.

We believe that due to Flexbox and Grid the way we look at "columns" need to change. With flexbox we can change the ``flex-direction`` property so our ``col-x-x`` then becomes a ``row`` like element which can get confusing but fundamentally it means it goes from following the x-axis to tracking along the y-axis.

---

#### Breakpoints and "Columns"

#### Whats to come?
We are working on "out-of-the-box" layout bodies using CSS Grid alone. These will typically follow the following markup:

````html
...

<body class="some-grid-class-name">
  <header class="header"></header>
  
  <main class="main" role="main"></main>
  
  <footer class="footer"></footer>
</body>

...
````

and at times...

````html
...

<body class="some-grid-class-name">
  <header class="header"></header>
  
  nav
  
  <main class="main" role="main"></main>
  
  <footer class="footer"></footer>
</body>

...
````

Where applying a class name to the ``<body>`` will then structure the ``<header>, <main> and <footer>`` accordingly. Using the correct properties so that these layouts are responsive and then having ``@supports`` fallbacks.

We can then go a step further and create layouts for the ``<header>`` & ``<footer>`` tags in order to have great ready made layouts. Again to reiterate the plan is not to make a super boiler plated framework but an easy to use helper class full framework for quickly building layouts for client projects. 

WATCH THIS SPACE!

## CSS only

FlexigridCSS is a **CSS** framework. As a result, the sole output is a single CSS file, with a min variation. [flexigridcss.css](https://github.com/joelpierre/flexigridcss/blob/master/dist/flexigridcss.css)

You can either use that file or download the Sass source files to customize the variables and change the default grid structure.

There is **no** JavaScript included. This is just a helpful style layer to add to your development and is not a full proof solution. It was made for developers needing a solid foundation and a foundation only. 

There are planned components to be styled and built however not enough to build a site from like bootstrap or foundation.

## Browser Support

FlexigridCSS uses [autoprefixer](https://github.com/postcss/autoprefixer) to make (most) Flexbox features compatible with earlier browser versions. According to [Can I use](https://caniuse.com/#feat=flexbox), FlexigridCSS is compatible with **recent** versions of:

* Chrome
* Edge
* Firefox
* Opera
* Safari

Internet Explorer (10+) is only partially supported. And we have fallbacks in place where ``display:grid;`` is not available.

## Copyright and license

Code copyright 2018 Joel Pierre-Powell. Code release under [the MIT license](https://github.com/joelpierre/flexigridcss/blob/master/LICENSE).