import { describe } from 'mocha';
import { expect } from 'chai';

describe('Email validation', () => {

  describe('Check email value', () => {
    it('throw error with message "must provide a valid email"', () => {
      const actual = '-';
      expect(() => { }).to.throw(actual);
    });
  });

  describe('Check empty value', () => {
    it('throw error with message "email is required"', () => {
      const actual = 'email is required';
      expect(() => {
      }).to.throw(actual);
    });
  });

});


describe('Password validation', () => {

  describe('Check password value', () => {
    it('throw error with message "must provide a valid email"', () => {
      const actual = '-';
      expect(() => { }).to.throw(actual);
    });
  });

  describe('Check empty value', () => {
    it('throw error with message "email is required"', () => {
      const actual = 'email is required';
      expect(() => {
      }).to.throw(actual);
    });
  });

});
