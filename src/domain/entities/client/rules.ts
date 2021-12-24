export interface IClientRules {
  checkEmptyValues(kind: string, value: string): void;
  checkEmail(value: string): void;
  checkPassword(value: string): void;
}

export class ClientRules implements IClientRules {

  public checkEmptyValues(kind: string, value: string) {
    if (value === "") {
      throw new Error(`${kind} is required`);
    }
  }

  public checkEmail(value: string) {
    if (!this.regexEmail(value)) {
      throw new Error('must provide a valid email');
    }
  }

  public checkPassword(value: string) {
    if (!this.passwordCondition(value)) {
      throw new Error('must provide a password with minimun 12 characters');
    }
  }

  private regexEmail(email: string): boolean {
    var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailPattern.test(email);
  }

  private passwordCondition(password: string) {
    console.log(password.length);
    if (password.length < 12) {
      return false;
    }
    return true;
  }
}