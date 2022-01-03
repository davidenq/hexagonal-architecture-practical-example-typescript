

import { IAppConfig } from "../../bootstrap/config";
import { HttpClient, IHttpClient } from "./http_client";


export class HttpClientFactory {
  public createHttpClient(appConfig: IAppConfig): IHttpClient {
    return new HttpClient(appConfig);
  }
}

