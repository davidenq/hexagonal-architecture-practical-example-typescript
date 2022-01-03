import { IUserEntity } from "../domain/entities/user/entity";
import { MongoConnDb } from "../infrastructure/database/mongo";
import { MongoOperations } from "../infrastructure/database/mongo_operations";
import { HttpClientFactory } from "../infrastructure/network/http_client_factory";
import { healthHandler } from "../interfaces/rest/handlers/health";
import { IHandler } from "../interfaces/rest/handlers/ihandler";
import { jobHandler } from "../interfaces/rest/handlers/jobs";
import { authHandler } from "../interfaces/rest/handlers/login";
import { meHandler } from "../interfaces/rest/handlers/me";
import { Server } from "../interfaces/rest/server";
import { IdentityService } from "../services/identity";
import { AppConfig } from "./config";

//type UserData = {
//  id: number;
//  name: string;
//  username: string;
//};
//
//type AuthCredentials = {
//  access_token: string;
//  token_type: string;
//  expires_in: number;
//};



async function InitRestAPI() {
  //initialize config
  const appConfig = new AppConfig();
  const handlers: IHandler[] = [
    healthHandler,
    jobHandler,
    authHandler,
    meHandler,
  ];

  //initialize database


  const mongoDB = new MongoConnDb(appConfig);
  const httpclientFactory = new HttpClientFactory();

  //initialize dependencies: httpClient, identityService
  const operations = new MongoOperations(mongoDB);
  const httpClient = httpclientFactory.createHttpClient(appConfig);
  const identityService = new IdentityService(httpClient, operations);

  //initialize server
  const server = new Server(appConfig.server.port, handlers, httpClient, operations, identityService);
  server.start();
}

InitRestAPI();

