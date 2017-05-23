import Ember from 'ember';

const { Service, Evented, $ } = Ember;

export default Service.extend(Evented, {
  scrollTop: null,
  init() {
    this._super(...arguments);
    $(window).on('scroll', (e) => {
      this._onScroll(e, $(window).scrollTop());
    });
    this.set('scrollTop', $(window).scrollTop());
  },
  destroy() {
    this._super(...arguments);
    $(window).off('scroll');
  },
  _onScroll(e, top) {
    this.set('scrollTop', top);
    this.trigger('scroll', e);
  }
});
