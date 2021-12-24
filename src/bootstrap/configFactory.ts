import { AppConfig, IAppConfig } from "./config";

export class AppConfigFactory {
  public createAppConfig(): IAppConfig {
    return new AppConfig;
  }
}