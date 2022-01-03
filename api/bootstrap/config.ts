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

export type server = {
  port: string;
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
  private _server: server;
  private _googleMapsService: googleMapsService;

  constructor() {
    this.validateEnvs();
    this._apiService = {
      host: process.env['AUTHSERVICE_HOST'],
      endpoints: {
        job: process.env['AUTHSERVICE_JOB_APIENDPOINT'],
        auth: process.env['AUTHSERVICE_AUTH_APIENDPOINT'],
        user: process.env['AUTHSERVICE_USER_APIENDPOINT']
      }
    };
    this._server = {
      port: process.env['SERVER_PORT']
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

  get server(): server {
    return this._server;
  }

  get googleMapsService(): googleMapsService {
    return this._googleMapsService;
  }

  private validateEnvs() {
    this.checkEmptyValue("AUTHSERVICE_HOST", process.env['AUTHSERVICE_HOST']);
    this.checkEmptyValue("AUTHSERVICE_JOB_APIENDPOINT", process.env['AUTHSERVICE_JOB_APIENDPOINT']);
    this.checkEmptyValue("AUTHSERVICE_AUTH_APIENDPOINT", process.env['AUTHSERVICE_AUTH_APIENDPOINT']);
    this.checkEmptyValue("AUTHSERVICE_USER_APIENDPOINT", process.env['AUTHSERVICE_USER_APIENDPOINT']);
    this.checkEmptyValue("DB_HOST", process.env['DB_HOST']);
    this.checkEmptyValue("DB_PORT", process.env['DB_PORT']);
    this.checkEmptyValue("DB_NAME", process.env['DB_NAME']);
    this.checkEmptyValue("DB_USERNAME", process.env['DB_USERNAME']);
    this.checkEmptyValue("DB_PASSWORD", process.env['DB_PASSWORD']);
    this.checkEmptyValue("SERVER_PORT", process.env['SERVER_PORT']);
  }

  private checkEmptyValue(kind: string, value: string): void {
    if (!value) {
      throw new Error(`environment variable ${kind} is required`);
    }
  }
}