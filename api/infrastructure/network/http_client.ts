
import axios, { Axios, AxiosResponse } from 'axios';
import { IAppConfig } from '../../bootstrap/config';
export interface IHttpClient {
  request<T>(method: string, endpoint: string, data: any): Promise<Awaited<AxiosResponse>>;
}

export interface HttpResponse {
  status: number;
}

export class HttpClient implements IHttpClient {
  private _axios: Axios;
  private _config: IAppConfig;

  constructor(config: IAppConfig) {
    this._config = config;
    this._axios = axios.create({
      baseURL: config.apiService.host,
      headers: {
        "Content-type": "application/json",
      }
    });
  }

  async request<T>(method: string, endpoint: string, data: any): Promise<Awaited<AxiosResponse>> {

    //create code for checking if method exists
    //create code for checking if endpoint exists
    return this._axios[method]<T>(this._config.apiService.endpoints[endpoint]);
  }
}