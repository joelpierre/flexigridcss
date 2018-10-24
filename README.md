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
yarn add FlexigridCSS
```
### Import
After installation, you can import the CSS file into your project using this snippet:

```sh
import 'flexigridcss/css/flexigridcss.min.css'
```

Feel free to raise an issue or submit a pull request.

## The "Out-of-the-box" Grid



## CSS only

FlexigridCSS is a **CSS** framework. As a result, the sole output is a single CSS file, with a min variation. [flexigridcss.css](https://github.com/joelpierre/flexigridcss/blob/master/dist/flexigridcss.css)

You can either use that file, "out of the box", or download the Sass source files to customize the variables and change the default grid structure.

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