import { describe } from 'mocha';
import { expect } from 'chai';
import { JobRules } from './rules';


describe('Check job empty values', () => {
  it('throw error with message "title is required"', () => {
    const actual = 'title is required';
    expect(() => {
      let rules = new JobRules();
      rules.checkEmptyString("title", "");
    }).to.throw(actual);
  });
  it('throw error with message "image is required"', () => {
    const actual = 'image is required';
    expect(() => {
      let rules = new JobRules();
      rules.checkEmptyString("image", "");
    }).to.throw(actual);
  });
  it('throw error with message "date is required"', () => {
    const actual = 'date is required';
    expect(() => {
      let rules = new JobRules();
      rules.checkEmptyString("date", "");
    }).to.throw(actual);
  });
  it('throw error with message "status is required"', () => {
    const actual = 'status is required';
    expect(() => {
      let rules = new JobRules();
      rules.checkEmptyString("status", "");
    }).to.throw(actual);
  });
  it('throw error with message "assigned_to is required"', () => {
    const actual = 'assigned_to is required';
    expect(() => {
      let rules = new JobRules();
      rules.checkEmptyString("assigned_to", "");
    }).to.throw(actual);
  });
});