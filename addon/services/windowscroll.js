import Ember from 'ember';

const { Service, Evented } = Ember;

export default Service.extend(Evented, {
  scrollTop: null,
  init() {
    this._super(...arguments);
    Ember.$(window).on('scroll', (e) => {
      this.set('scrollTop', Ember.$(window).scrollTop());
      this.trigger('scroll', e);
    });
    this.set('scrollTop', Ember.$(window).scrollTop());
  },
  destroy() {
    this._super(...arguments);
    Ember.$(window).off('scroll');
  }
});
