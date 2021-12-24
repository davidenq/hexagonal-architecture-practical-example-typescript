export interface IJobRules {
  checkEmptyString(kind: string, value: string): void;
}

export class JobRules implements IJobRules {
  public checkEmptyString(kind: string, value: string) {
    if (value === "") {
      throw new Error(`${kind} is required`);
    }
  }
}