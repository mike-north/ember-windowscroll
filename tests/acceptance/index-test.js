import { later } from '@ember/runloop';
import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /index', function(assert) {
  let done = assert.async();
  visit('/');

  andThen(() => {
    let scroll1 = parseInt(find('.x-scroll-monitor').text(), 10);
    assert.ok(scroll1 >= 0, 'Scroll starts at the top');
    let service = this.application.__container__.lookup('service:windowscroll');
    service._onScroll({}, scroll1 + 200);
    later(() => {
      let scroll2 = parseInt(find('.x-scroll-monitor').text(), 10);
      assert.ok(scroll2 > scroll1, 'Scroll position has changed');
      assert.equal(currentURL(), '/');
      done();
    }, 10);
  });
});
