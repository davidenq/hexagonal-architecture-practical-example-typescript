import { UserEntity, IUserEntity } from "./entity";
import { UserRules } from "./rules";

export class UserFactory {

  public createUser(email: string, password: string): IUserEntity {

    let rules = new UserRules();
    return new UserEntity(email, password, rules);
  }
}