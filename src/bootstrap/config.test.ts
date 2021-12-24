import { describe } from 'mocha';
import { expect } from 'chai';
import { AppConfig } from './config';


describe('Check configuration loader', () => {
  it('throw error with message "ROOTSTACK_HOST is required"', () => {
    const actual = 'environment variable ROOTSTACK_HOST is required';
    expect(() => {
      const appConfig = new AppConfig();
    }).to.throw(actual);
  });
  it('throw error with message "ROOTSTACK_JOB_APIENDPOINT is required"', () => {
    const actual = 'environment variable ROOTSTACK_JOB_APIENDPOINT is required';
    expect(() => {
      process.env['ROOTSTACK_HOST'] = "test";
      const appConfig = new AppConfig();
    }).to.throw(actual);
  });
  it('throw error with message "ROOSTACK_AUTH_APIENDPOINT is required"', () => {
    const actual = 'environment variable ROOSTACK_AUTH_APIENDPOINT is required';
    expect(() => {
      process.env['ROOTSTACK_HOST'] = "test";
      process.env['ROOTSTACK_JOB_APIENDPOINT'] = "test";
      const appConfig = new AppConfig();
    }).to.throw(actual);
  });
  it('throw error with message "ROOSTACK_USER_APIENDPOINT is required"', () => {
    const actual = 'environment variable ROOSTACK_USER_APIENDPOINT is required';
    expect(() => {
      process.env['ROOTSTACK_HOST'] = "test";
      process.env['ROOTSTACK_JOB_APIENDPOINT'] = "test";
      process.env['ROOSTACK_AUTH_APIENDPOINT'] = "test";
      const appConfig = new AppConfig();
    }).to.throw(actual);
  });
  it('throw error with message "DB_HOST is required"', () => {
    const actual = 'environment variable DB_HOST is required';
    expect(() => {
      process.env['ROOTSTACK_HOST'] = "test";
      process.env['ROOTSTACK_JOB_APIENDPOINT'] = "test";
      process.env['ROOSTACK_AUTH_APIENDPOINT'] = "test";
      process.env['ROOSTACK_USER_APIENDPOINT'] = "test";
      const appConfig = new AppConfig();
    }).to.throw(actual);
  });
  it('throw error with message "DB_PORT is required"', () => {
    const actual = 'environment variable DB_PORT is required';
    expect(() => {
      process.env['ROOTSTACK_HOST'] = "test";
      process.env['ROOTSTACK_JOB_APIENDPOINT'] = "test";
      process.env['ROOSTACK_AUTH_APIENDPOINT'] = "test";
      process.env['ROOSTACK_USER_APIENDPOINT'] = "test";
      process.env['DB_HOST'] = "test";
      const appConfig = new AppConfig();
    }).to.throw(actual);
  });
  it('throw error with message "DB_NAME is required"', () => {
    const actual = 'environment variable DB_NAME is required';
    expect(() => {
      process.env['ROOTSTACK_HOST'] = "test";
      process.env['ROOTSTACK_JOB_APIENDPOINT'] = "test";
      process.env['ROOSTACK_AUTH_APIENDPOINT'] = "test";
      process.env['ROOSTACK_USER_APIENDPOINT'] = "test";
      process.env['DB_HOST'] = "test";
      process.env['DB_PORT'] = "test";
      const appConfig = new AppConfig();
    }).to.throw(actual);
  });
  it('throw error with message "DB_USERNAME is required"', () => {
    const actual = 'environment variable DB_USERNAME is required';
    expect(() => {
      process.env['ROOTSTACK_HOST'] = "test";
      process.env['ROOTSTACK_JOB_APIENDPOINT'] = "test";
      process.env['ROOSTACK_AUTH_APIENDPOINT'] = "test";
      process.env['ROOSTACK_USER_APIENDPOINT'] = "test";
      process.env['DB_HOST'] = "test";
      process.env['DB_PORT'] = "test";
      process.env['DB_NAME'] = "test";
      const appConfig = new AppConfig();
    }).to.throw(actual);
  });
  it('throw error with message "DB_PASSWORD is required"', () => {
    const actual = 'environment variable DB_PASSWORD is required';
    expect(() => {
      process.env['ROOTSTACK_HOST'] = "test";
      process.env['ROOTSTACK_JOB_APIENDPOINT'] = "test";
      process.env['ROOSTACK_AUTH_APIENDPOINT'] = "test";
      process.env['ROOSTACK_USER_APIENDPOINT'] = "test";
      process.env['DB_HOST'] = "test";
      process.env['DB_PORT'] = "test";
      process.env['DB_NAME'] = "test";
      process.env['DB_USERNAME'] = "test";
      const appConfig = new AppConfig();
    }).to.throw(actual);
  });
});