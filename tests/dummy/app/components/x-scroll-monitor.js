import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  classNames: ['x-scroll-monitor'],
  windowscroll: service()
});
