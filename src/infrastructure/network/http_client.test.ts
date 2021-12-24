import { describe } from 'mocha';
import { expect } from 'chai';
import { AppConfig } from '../../bootstrap/config';
import { HttpClientFactory } from './http_client_factory';


describe('Check configuration loader', () => {
  it('throw error with message ""', () => {
    const actual = '';
    expect(async () => {
      const appConfig = new AppConfig();
      const httpClientFactory = new HttpClientFactory();
      const httpClient = httpClientFactory.createHttpClient(appConfig);
      const outcome = await httpClient.request("get", "job", {});
      console.log(outcome);
    }).to.throw(actual);
  });
});