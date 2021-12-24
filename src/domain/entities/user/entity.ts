import { IUserRules } from "./rules";

export interface IEntityUser {
  get email(): string;
  get password(): string;
};

export class Entity implements IEntityUser {

  private _email: string;
  private _password: string;
  private _rules: IUserRules;

  constructor(email: string, password: string, rules: IUserRules) {
    this._email = email;
    this._password = password;
    this._rules = rules;
    this.validate();
  }

  public get email(): string {
    return this._email;
  }

  public get password(): string {
    return this._password;
  }

  private validate() {
    this._rules.checkEmptyValues("email", this._email);
    this._rules.checkEmail(this._email);
    this._rules.checkEmptyValues("password", this._password);
    this._rules.checkPassword(this._password);
  }
}
