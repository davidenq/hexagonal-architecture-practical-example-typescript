import express, { Express } from 'express';
import { IOperationsDB } from '../../infrastructure/database/idb';
import { IHttpClient } from '../../infrastructure/network/http_client';
import { IIdentityService } from '../../services/identity';
import { healthHandler } from './handlers/health';
import { IHandler } from './handlers/ihandler';
import { authorizer } from './middlewares/auth';

export class Server {
  private _port: string;
  private _app: Express;
  private _httpClient: IHttpClient;
  private _operations: IOperationsDB;
  private _identityService: IIdentityService;

  constructor(
    port: string,
    handlers: IHandler[],
    httpClient: IHttpClient,
    operations: IOperationsDB,
    identityService: IIdentityService
  ) {
    this._port = port;
    this._httpClient = httpClient;
    this._operations = operations;
    this._identityService = identityService;

    this._app = express();
    this._app.use(express.json());
    this._app.use(authorizer);
    this._app.get(healthHandler.endpoint, healthHandler.handler);
    this._app.locals = {
      httpClient: this._httpClient,
      operations: this._operations,
      identityService: this._identityService
    };
    this.routes(handlers);
  }


  private routes(handlers: IHandler[]) {
    handlers.forEach((handler: IHandler) => {
      if (handler.method.toLowerCase() === 'get') {
        if (handler.auth) {
          this._app.get(handler.endpoint, authorizer, handler.handler);
        } else {
          this._app.get(handler.endpoint, handler.handler);
        }
      }
      if (handler.method.toLowerCase() === 'post') {
        if (handler.auth) {
          this._app.post(handler.endpoint, authorizer, handler.handler);
        } else {
          this._app.post(handler.endpoint, handler.handler);
        }
      }
      if (handler.method.toLowerCase() === 'put') {
        if (handler.auth) {
          this._app.put(handler.endpoint, authorizer, handler.handler);
        } else {
          this._app.put(handler.endpoint, handler.handler);
        }
      }
      if (handler.method.toLowerCase() === 'delete') {
        if (handler.auth) {
          this._app.delete(handler.endpoint, authorizer, handler.handler);
        } else {
          this._app.delete(handler.endpoint, handler.handler);
        }
      }
    });
  }

  public start() {
    try {
      this._app.listen(this._port, () => {
        console.log(`app server running on ${this._port}.`);
      });
    } catch (e) {
      console.log(e);
    }
  }
}