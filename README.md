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
At present **``v.0.0.10``** we have the basic ``.container > .row > .flex-x-x`` setup. 

##### Container/Container-fluid
All ``.container / .container-fluid``'s are ``display: grid;``
with different column numbers based on the device type. ``.container`` having a fixed width and ``.container-fluid`` having the width of the entire viewport.

##### Rows/Column
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

We believe that due to Flexbox and Grid the way we look at "columns" need to change. With flexbox we can change the ``flex-direction`` property so our ``col-x-x`` then becomes a ``row`` like element so why pre-fix it with ``.col-``? This brings us to our next nugget of information. We swap the ``.col-`` for ``.flex-`` and in turn we introduce ``.grid-`` for new grid helper classes.

#####Flex Items
Similar to Bootstrap our flex items are named:
```scss
.flex-1 ...n {} // No Breakpoint - Has the same value
.flex-xl-1 ...n {} // Big desktop
.flex-lg-1 ...n {} // Desktop
.flex-md-1 ...n {} // Tablet Landscape
.flex-sm-1 ...n {} // Tablet Portrait
.flex-xs-1 ...n {} // Mobile 
```
when complete our grid items should follow the following conventions but this is **TBD**:
```scss
.grid-1 ...n {} // No Breakpoint - Has the same value
.grid-xl-1 ...n {} // Big desktop
.grid-lg-1 ...n {} // Desktop
.grid-md-1 ...n {} // Tablet Landscape
.grid-sm-1 ...n {} // Tablet Portrait
.grid-xs-1 ...n {} // Mobile 
```

#### Breakpoints
We use a responsive grid layout for all containers as you can see from the table below:

<table>
<thead>
<tbody>
<tr>
<td>
<strong>Breakpoint</strong>
</td>
<td>
<strong>Size (px)</strong>
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
4
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
8
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
10
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

We can then go a step further and create component layouts for the ``<header>`` & ``<footer>``.

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