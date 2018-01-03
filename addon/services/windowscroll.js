import Service from '@ember/service';
import Evented from '@ember/object/evented';
import $ from 'jquery';

export default Service.extend(Evented, {
  scrollTop: null,
  init() {
    this._super(...arguments);
    $(window).on('scroll', e => {
      // eslint-disable-next-line
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
