import { describe } from 'mocha';
import { expect } from 'chai';
import { ClientRules } from './rules';

describe('Email validation', () => {

  describe('Check email value', () => {
    it('throw error with message "must provide a valid email"', () => {
      const actual = 'must provide a valid email';
      expect(() => {
        let rules = new ClientRules();
        rules.checkEmail("david.nunez.dev");
      }).to.throw(actual);
    });
  });

  describe('Check empty value', () => {
    it('throw error with message "email is required"', () => {
      const actual = 'email is required';
      expect(() => {
        let rules = new ClientRules();
        rules.checkEmptyValues("email", "");
      }).to.throw(actual);
    });
  });

});


describe('Password validation', () => {

  describe('Check password value', () => {
    it('throw error with message "must provide a password with minimun 12 characters"', () => {
      const actual = 'must provide a password with minimun 12 characters';
      expect(() => {
        let rules = new ClientRules();
        rules.checkPassword("password");
      }).to.throw(actual);
    });
  });

  describe('Check empty value', () => {
    it('throw error with message "password is required"', () => {
      const actual = 'password is required';
      expect(() => {

        let rules = new ClientRules();
        rules.checkEmptyValues("password", "");
      }).to.throw(actual);
    });
  });

});
