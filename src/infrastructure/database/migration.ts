import { AppConfig } from "../../bootstrap/config";
import { MongoConnDb } from "./mongo";

class Migration {
  constructor() {
    this.make();

  }
  async make() {

    const appConfig = new AppConfig();
    const mongoDB = new MongoConnDb(appConfig);
    const db = await mongoDB.connection();
    await db.createCollection("tokens");
    await db.createIndex('tokens', { "expireAt": 1 }, { expireAfterSeconds: 0 });
    (await mongoDB.client()).close();

  }


}

new Migration();