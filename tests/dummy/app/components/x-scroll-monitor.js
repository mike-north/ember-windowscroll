import Ember from 'ember';

const { inject, Component } = Ember;

export default Component.extend({
  classNames: ['x-scroll-monitor'],
  windowscroll: inject.service()
});
