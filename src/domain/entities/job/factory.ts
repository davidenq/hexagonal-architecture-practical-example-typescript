import { EntityJob } from "../job/entity";
import { JobRules } from "./rules";

export class JobFactory {
  public createJob(
    id: number,
    title: string,
    description: string,
    latitude: number,
    longitude: number,
    image: string,
    date: string,
    status: string,
    assigned_to: string
  ) {
    let rules = new JobRules();
    return new EntityJob(
      id,
      title,
      description,
      latitude,
      longitude,
      image,
      date,
      status,
      assigned_to,
      rules);
  }
}