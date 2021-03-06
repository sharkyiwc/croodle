import Application from '../app';
import config from '../config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

document.addEventListener('securitypolicyviolation', function({ blockedURI, violatedDirective }) {
  throw new Error(
    'Content-Security-Policy violation detected: ' +
    `Violated directive: ${violatedDirective}. ` +
    `Blocked URI: ${blockedURI}`
  );
});

setApplication(Application.create(config.APP));

start();
