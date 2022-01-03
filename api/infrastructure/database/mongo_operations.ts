import { Db } from "mongodb";
import { IOperationsDB } from "./idb";
import { IMongoConnDb } from "./mongo";

export class MongoOperations implements IOperationsDB {
  private _db: IMongoConnDb;
  private _conn: Promise<Db>;
  constructor(db: IMongoConnDb) {
    this._db = db;
    this._conn = this._db.connection();
  }
  async find(name: string, filter: any) {
    return (await this._conn).collection(name).find(filter).limit(1).toArray();
  }
  async findOne(name: string, data: any, filter: any) {
    const outcome = (await this._conn).
      collection(name).
      findOne(data, filter);
    return outcome;
  }
  async findLast(name: string, data: any, filter: any) {
    const outcome = await (await this._conn).
      collection(name).
      find(data, filter).
      sort({ _id: -1 }).limit(1).toArray();
    return outcome[0];
  }
  async insert(name: string, data: any, options: any) {
    return (await this._conn).collection(name).insertOne(data, options);
  }
}