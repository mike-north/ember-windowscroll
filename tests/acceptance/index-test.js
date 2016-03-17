import Ember from 'ember';
import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /index', function(assert) {
  const done = assert.async();
  visit('/');

  andThen(() => {
    const scroll1 = parseInt(find('.x-scroll-monitor').text(), 10);
    assert.equal(scroll1, 0);
    window.scrollTo(0, 300);
    Ember.run.later(() => {
      let scroll2 = parseInt(find('.x-scroll-monitor').text(), 10);
      assert.ok(scroll2 > scroll1, 'Scroll position has changed');
      assert.equal(currentURL(), '/');
      done();
    }, 100);
  });
});
