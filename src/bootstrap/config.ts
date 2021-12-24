export type apiService = {
  host: string,
  endpoints: {
    job: string,
    auth: string,
    user: string;
  };
};
export type dbService = {
  protocol: string,
  host: string,
  port: string,
  dbName: string,
  username: string,
  password: string;
};
export type googleMapsService = {};

export interface IAppConfig {
  get apiService(): apiService;
  get dbService(): dbService;
  get googleMapsService(): googleMapsService;
}

export class AppConfig implements IAppConfig {

  private _apiService: apiService;
  private _dbService: dbService;
  private _googleMapsService: googleMapsService;

  constructor() {
    this.validateEnvs();
    this._apiService = {
      host: process.env['ROOTSTACK_HOST'],
      endpoints: {
        job: process.env['ROOTSTACK_JOB_APIENDPOINT'],
        auth: process.env['ROOSTACK_AUTH_APIENDPOINT'],
        user: process.env['ROOSTACK_USER_APIENDPOINT']
      }
    };
    this._dbService = {
      protocol: process.env['DB_PROTOCOL'],
      host: process.env['DB_HOST'],
      port: process.env['DB_PORT'],
      dbName: process.env['DB_NAME'],
      username: process.env['DB_USERNAME'],
      password: process.env['DB_PASSWORD']
    };
  }

  get apiService(): apiService {
    return this._apiService;
  }

  get dbService(): dbService {
    return this._dbService;
  }

  get googleMapsService(): googleMapsService {
    return this._googleMapsService;
  }

  private validateEnvs() {
    this.checkEmptyValue("ROOTSTACK_HOST", process.env['ROOTSTACK_HOST']);
    this.checkEmptyValue("ROOTSTACK_JOB_APIENDPOINT", process.env['ROOTSTACK_JOB_APIENDPOINT']);
    this.checkEmptyValue("ROOSTACK_AUTH_APIENDPOINT", process.env['ROOSTACK_AUTH_APIENDPOINT']);
    this.checkEmptyValue("ROOSTACK_USER_APIENDPOINT", process.env['ROOSTACK_USER_APIENDPOINT']);
    this.checkEmptyValue("DB_HOST", process.env['DB_HOST']);
    this.checkEmptyValue("DB_PORT", process.env['DB_PORT']);
    this.checkEmptyValue("DB_NAME", process.env['DB_NAME']);
    this.checkEmptyValue("DB_USERNAME", process.env['DB_USERNAME']);
    this.checkEmptyValue("DB_PASSWORD", process.env['DB_PASSWORD']);
  }

  private checkEmptyValue(kind: string, value: string): void {
    if (!value) {
      throw new Error(`environment variable ${kind} is required`);
    }
  }
}