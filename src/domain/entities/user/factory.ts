import { Entity, IEntityUser } from "./entity";
import { UserRules } from "./rules";

export class UserFactory {

  public createUser(email: string, password: string): IEntityUser {

    let rules = new UserRules();
    return new Entity(email, password, rules);
  }
}