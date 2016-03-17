import Ember from 'ember';

const { Service, Evented } = Ember;

export default Service.extend(Evented, {
  scrollTop: null,
  init() {
    this._super(...arguments);
    Ember.$(window).on('scroll', (e) => {
      this._onScroll(e, Ember.$(window).scrollTop());
    });
    this.set('scrollTop', Ember.$(window).scrollTop());
  },
  destroy() {
    this._super(...arguments);
    Ember.$(window).off('scroll');
  },
  _onScroll(e, top) {
    this.set('scrollTop', top);
    this.trigger('scroll', e);
  }
});
