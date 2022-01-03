import { Db, MongoClient } from 'mongodb';
import { IAppConfig } from '../../bootstrap/config';


export interface IMongoConnDb {
  connection(): Promise<Db>;
}

export class MongoConnDb {

  private _client: MongoClient;
  private _connectionString: string;
  private _config: IAppConfig;
  public db: Db;

  constructor(config: IAppConfig) {
    this._config = config;
    const infoDB = this._config.dbService;

    this._connectionString = `${infoDB.protocol}://`;
    this._connectionString += infoDB.username;
    this._connectionString += ':';
    this._connectionString += infoDB.password;
    this._connectionString += '@';
    this._connectionString += infoDB.host;
    this._connectionString += ':';
    this._connectionString += infoDB.port;
    this._connectionString += '/';
    this._connectionString += infoDB.dbName;
  }

  public async connection(): Promise<Db> {
    this._client = await MongoClient.connect(this._connectionString);
    this.db = this._client.db(this._config.dbService.dbName);

    console.info(`Connectiong to ${this._connectionString}`);
    return this.db;
  }
  public async client(): Promise<MongoClient> {
    return this._client;
  }
}

