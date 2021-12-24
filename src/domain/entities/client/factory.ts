import { Entity, IEntityClient } from "./entity";
import { ClientRules } from "./rules";

export class ClientFactory {

  public createClient(email: string, password: string): IEntityClient {

    let rules = new ClientRules();
    return new Entity(email, password, rules);
  }
}