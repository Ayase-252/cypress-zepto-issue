# Zepto compatibility issue

## Issue Description

`then(callback)` function will pass a zepto object to callback function instead of a jQuery object, if
it is chained with a `jQuery` object.

## Reproduce Steps

1. `yarn install`
2. Use a live server to serve `index.html` in the root. In my case, I serve it with [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) plugin on VSCode.
3. Run `failure.spec.js`. It will fail due to the inconsistency between input and output of `cy.wrap`.
