# total-reset.css

> A semantic CSS reset that goes all the way.

total-reset.css takes the cross-browser fixes from the venerable normalize.css
but removes all of the opinionated base element styling, sets _all elements_ to
`display: block` and `box-sizing: border-box`, and generally tries to provide a
sane, unstyled default to every HTML element.

*Note:* total-reset.css follows semantic versioning and as donated by the 0.x.y
version is still in active development, so please test it before deploying to a
production site! If you do find a bug or want to suggest an enchancement, please
file an [issue](https://github.com/mgeorgehansen/total-reset.css/issues).

## Supported Browsers

total-reset.css supports the latest 2 browser releases for the following major
browsers:

* IE/Edge
* Firefox
* Chrome
* Safari

## What Total Reset Does

### Normalizes Styling and Fixes Bugs Across Different Browsers

Many elements have slightly different default styles on different browsers,
and some browsers have subtle styling or user experience bugs. total-reset.css
tries to normalize those styles to a sane default and fix these bugs. Many of
these fixes are taken from [normalize.css](https://github.com/necolas/normalize.css/),
so full credit to [Nicolas Gallagher](https://github.com/necolas),
[Jonathan Neal](https://github.com/jonathantneal) and the other normalize.css
contributors.

### Sets `box-sizing: border-box` on All Elements

Border-box sizing is much more intuative to use than content-box in most cases
and encapsulates the padding and border in the element being styled, leading to
more modular components.

total-reset.css uses Jon Neal's inherit-based [box-sizing reset method](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/).

### Sets `display: block` on All Elements

Inline vs inline-block vs block display is a visual layout style that has
nothing to do with the semantic meaning of the markup, so it makes little sense
to have some elements display block and others display inline because those
elements might be styled differently in different contexts.

Most elements are already block display and block display tends to have the
least-surprising layout behavior, so the default for all elements is set to
`display: block`.

The only exception to this rule is checkboxes and radios since most browsers
don't allow changing the display of those elements.

### Sets Inheritable Properties to `inherit`

Many CSS properties, such as `font-size`, `text-align`, etc. are inhertiable,
meaning that if an element does not specify the value of the property (or
specifies a value of `inherit`) it will inherit the property value from its
closest ancenstor which explicitly sets the property value.

total-reset.css tries support this property inheritance behavior where possible
and sets inheritable properties to `inherit` for elements that have explicit
values set by the browser.

## Why Not Just Use normalize.css?

normalize.css is great if you need a quick basis for your theme that you know is
reliable across different browers. But as your website or webapp grows you'll
quickly find that the global, opinionated base styles that normalize.css
provides get in the way of writing semantic, modular HTML.

The major problem with default element styles is that it ties styling to
semantic meaning which makes reusing those styles in different contexts
difficult and encourages web developers to write unsemantic HTML. How many times
have you had to override `color`, `text-decoration` and hover states on a
wrapper `<a>`? Or had a web developer use multiple `<h1>` tags on a page because they had the largest `font-size`? These are all symptoms of tying your styling
to your semantics.

## Credits

* [Nicolas Gallagher](https://github.com/necolas),
  [Jonathan Neal](https://github.com/jonathantneal) and all of the normalize.css
  contributors for their amazing work on normalize.css which total-reset.css
  borrows from heavily.
* [Chris Bracco](https://github.com/cbracco) for his excellent
  [html5-test-page](https://github.com/cbracco/html5-test-page), which was used
  to test all of the reset styles for total-reset.css.
