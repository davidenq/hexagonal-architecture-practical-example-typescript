import { describe } from 'mocha';
import { expect } from 'chai';
import { AppConfig } from '../bootstrap/config';
import { MongoConnDb } from '../infrastructure/database/mongo';
import { MongoOperations } from '../infrastructure/database/mongo_operations';
import { IdentityService } from './identity';
import { IUserEntity } from '../domain/entities/user/entity';
import { HttpClientFactory } from '../infrastructure/network/http_client_factory';


describe('Check mongo connection', () => {
  it('throw error with message ""', () => {
    const actual = '';
    expect(async () => {
      const appConfig = new AppConfig();
      const mongoDB = new MongoConnDb(appConfig);
      const operations = new MongoOperations(mongoDB);
      const httpclientFactory = new HttpClientFactory();
      const httpClient = httpclientFactory.createHttpClient(appConfig);
      const user: IUserEntity = {
        email: "tvandervort@example.nets",
        password: "password"
      };
      const identityService = new IdentityService(user, httpClient, operations);

    }).to.throw(actual);
  });
});