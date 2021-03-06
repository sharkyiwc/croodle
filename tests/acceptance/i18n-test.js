import { find, visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import pageIndex from 'croodle/tests/pages/index';

module('Acceptance | i18n', function(hooks) {
  hooks.beforeEach(function() {
    window.localStorage.setItem('locale', 'de');
  });

  setupApplicationTest(hooks);

  test('locale is saved in localStorage', async function(assert) {
    await visit('/');
    assert.equal(find('.language-select').value, 'de', 'picks up locale in locale storage');

    await pageIndex.locale('en');
    assert.equal(find('.language-select').value, 'en');
    assert.equal(
      window.localStorage.getItem('locale'), 'en',
      'persisted in localeStorage'
    );
  });
});
