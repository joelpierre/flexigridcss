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
After installation, you can import the CSS file into your project using either of these snippet:

```sh
import 'flexigridcss/dist/flexigridcss.css'
```
or
```sh
import 'flexigridcss/dist/flexigridcss.min.css'
```

Feel free to raise an issue or submit a pull request.

## CSS only

FlexigridCSS is a **CSS** framework. As a result, the sole output is a single CSS file, with a min variation. [flexigridcss.css](https://github.com/joelpierre/flexigridcss/blob/master/dist/flexigridcss.css)

You can either use that file or download the Sass source files to customize the variables and change the default grid structure.

There is **no** JavaScript included. This is just a helpful style layer to add to your development and is not a full proof solution. It was made for developers needing a solid foundation and a foundation only. 

There are planned components to be styled and built however not enough to build a site from like bootstrap or foundation.

## The Grid

#### What do we have as of now?
At present **``v.0.0.11``** we have the basic ``.container > .row > .flex-x-x`` setup. 

##### Container/Container-fluid
All ``.container / .container-fluid``'s are ``display: flex;``. With ``.container`` having a fixed width and ``.container-fluid`` having the width of the entire viewport.

There is an optional modifier of ```.container--grid```, ```.container-fluid--grid``` which applies a grid layout to the container following our column structure.

##### Rows
All ``.row``'s are 
````scss
.row {
  ...
  display: flex; 
  flex-direction: row;
  ...
}
```` 

we have also built in modifiers for the row element. They carry the core row styling so can be used without adding two classes.
```scss
.row--reverse {
  flex-direction:row-reverse;
}
.row--column {
  flex-direction:column;
}
.row--column-reverse {
  flex-direction:column-reverse;
}
```

#####Flex Items
We swap the ``.col-`` for ``.flex-`` and in turn we introduce ``.grid-`` for new grid helper classes.

Similar to Bootstrap our flex items are named:

```scss
.flex-1 ... 16 {} // No Breakpoint - Has 16 columns
.flex-xl-1 ... 16 {} // Big desktop
.flex-lg-1 ... 12 {} // Desktop
.flex-md-1 ... 8 {} // Tablet Landscape
.flex-sm-1 ... 4 {} // Tablet Portrait
```

#####Grid Items
Our grid item naming is **TBD**

#### Breakpoints
We change our layout oclumns based on the breakpoint. Please see below:

<table>
<tbody>
<tr>
<td>
<strong>Breakpoint</strong>
</td>
<td>
<strong>Size&nbsp;(px)</strong>
</td>
<td>
<strong>min-width</strong>
</td>
<td>
<strong>max-width</strong>
</td>
<td>
<strong>Columns</strong>
</td>
</tr>
<tr>
<td>
Mobile
</td>
<td>
599px
</td>
<td>
-
</td>
<td>
Y
</td>
<td>
-
</td>
</tr>
<tr>
<td>
Tablet Portrait
</td>
<td>
600px
</td>
<td>
Y
</td>
<td>
Y
</td>
<td>
4
</td>
</tr>
<tr>
<td>
Tablet Landscape
</td>
<td>
900px
</td>
<td>
Y
</td>
<td>
Y
</td>
<td>
8
</td>
</tr>
<tr>
<td>
Desktop
</td>
<td>
1200px
</td>
<td>
Y
</td>
<td>
Y
</td>
<td>
12
</td>
</tr>
<tr>
<td>
Big Desktop
</td>
<td>
1800px
</td>
<td>
Y
</td>
<td>
Y
</td>
<td>
16
</td>
</tr>
</tbody>
</table>

We cater for both desktop first builds and mobile first build. 

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
  
  <nav class="nav" role="navigation"></nav>
  
  <main class="main" role="main"></main>
  
  <footer class="footer"></footer>
</body>

...
````

Where applying a class name to the ``<body>`` we will then structure the ``<header>, <main> and <footer>`` accordingly. Using the correct properties so that these layouts are responsive and then having ``@supports`` fallbacks.

You can then use flex items inside these core layouts to achieve your desired designs.

We can then go a step further and create component layouts for the ``<header>`` & ``<footer>``, using grid.

## Browser Support

FlexigridCSS uses [autoprefixer](https://github.com/postcss/autoprefixer) to make (most) Flexbox and Grid features compatible with earlier browser versions. According to Can I use [flexbox](https://caniuse.com/#feat=flexbox) &amp; [grid](https://caniuse.com/#search=grid), FlexigridCSS is compatible with **recent** versions of:

* Chrome
* Edge
* Firefox
* Opera
* Safari

Internet Explorer (10+) is only partially supported. And we have fallbacks in place where ``display:grid;`` is not available.

## Copyright and license

Code copyright 2018 Joel Pierre-Powell. Code release under [the MIT license](https://github.com/joelpierre/flexigridcss/blob/master/LICENSE).