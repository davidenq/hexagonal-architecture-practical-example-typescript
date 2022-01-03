import { describe } from 'mocha';
import { expect } from 'chai';
import { AppConfig } from '../../bootstrap/config';
import { MongoConnDb } from './mongo';
import { MongoOperations } from './mongo_operations';


describe('Check mongo connection', () => {
  it('throw error with message ""', () => {
    const actual = '';
    expect(async () => {
      const appConfig = new AppConfig();
      const mongoDB = new MongoConnDb(appConfig);
      const operations = new MongoOperations(mongoDB);
      const job = {
        "id": 1,
        "title": "Atque.",
        "description": "The Panther took pie-crust, and gravy, and meat, While the Owl had the best plan.' It sounded an excellent plan, no doubt, and very neatly and simply arranged; the only difficulty was, that she had.",
        "latitude": "-11.121309",
        "longitude": "106.71978",
        "image": "https://lorempixel.com/640/480/?32173",
        "date": "1970-09-14",
        "status": "pending",
        "assigned_to": "Jammie Legros",
        "created_at": "2020-10-21T20:21:55.000000Z",
        "updated_at": "2020-10-21T20:21:55.000000Z"
      };
      //const outcome = operations.insert('jobs', job);
      //const result = await operations.find("jobs");
    }).to.throw(actual);
  });
});