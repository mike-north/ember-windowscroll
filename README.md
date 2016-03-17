# ember-windowscroll

A simple service for consuming the `window.onScroll` event, and using `window.scrollTop` in Ember.js apps and addons. The motivation for building this, was to avoid creating very similar services across multiple addons.

## Use

Install this addon in your app

```sh
ember install ember-windowscroll
```

Inject the `windowscroll` service onto something (i.e., a component) 

```js
import Ember from 'ember';

const { inject, Component } = Ember;

export default Component.extend({
  windowscroll: inject.service()
})

```

Then, in your component, you can access the `scrollTop` property

```js
scrollTopInPx: computed('windowscroll.scrollTop', function() {
  return `${this.get('windowscroll.scrollTop')}px`;
})
```

or listen to the `scroll` event

```js

didInsertElement() {
  this._super(...arguments);
  this.get('windowscroll').on('scroll', (e) => {
    console.log('scroll happens');
  });
}

```


This README outlines the details of collaborating on this Ember addon.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
