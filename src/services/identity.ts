import { AxiosResponse } from "axios";
import { IUserEntity } from "../domain/entities/user/entity";
import { IOperationsDB } from "../infrastructure/database/idb";
import { IHttpClient } from "../infrastructure/network/http_client";

export interface AuthToken {
  access_token: string;
  token_type: string;
  expires_in: number;
  expireAt: Date;
  user: IUserEntity;
}

export interface HTTPResponse {
  response?: AxiosResponse;
  status: number;
  data: any;
}

export class IdentityService {

  private _entityUser: IUserEntity;
  private _httpClient: IHttpClient;
  private _dbOperations: IOperationsDB;

  constructor(entityUser: IUserEntity, httpClient: IHttpClient, dbOperations: IOperationsDB) {
    this._entityUser = entityUser;
    this._httpClient = httpClient;
    this._dbOperations = dbOperations;
  }

  public async authenticate<T>(): Promise<HTTPResponse> {
    let response: HTTPResponse;
    const filter = {
      'user.email': this._entityUser.email
    };

    const access_token: AuthToken[] = await this._dbOperations.find("tokens", filter);

    if (!access_token) {

      let credentials = {
        email: this._entityUser.email,
        password: this._entityUser.password
      };

      const outcome = await this._httpClient.request<T>("post", "auth", credentials);
      if (outcome.status === 200) {
        const token: AuthToken = outcome.data;
        const today = new Date();
        today.setSeconds(today.getSeconds() + outcome.data.expires_in);
        token.expireAt = today;

        credentials.password = '';
        token.user = credentials;
        await this._dbOperations.insert("tokens", token, {});
      }

      const response: HTTPResponse = {
        response: outcome,
        status: outcome.status,
        data: outcome.data
      };
      return response;

    }

    if (access_token.length > 0) {

      response = {
        status: 200,
        data: access_token
      };
      return response;
    }
    response = {
      status: 404,
      data: {}
    };

    return response;

  }
}