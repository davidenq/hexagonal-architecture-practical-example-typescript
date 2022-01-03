import { IJobRules } from "./rules";

export interface IEntityJob {
  get id(): number;
  get title(): string;
  get description(): string;
  get latitude(): number;
  get longitude(): number;
  get image(): string;
  get date(): string;
  get status(): string;
  get assigned_to(): string;
}

export class EntityJob implements IEntityJob {

  private _id: number;
  private _title: string;
  private _description: string;
  private _latitude: number;
  private _longitude: number;
  private _image: string;
  private _date: string;
  private _status: string;
  private _assigned_to: string;
  private _rules: IJobRules;

  constructor(
    id: number,
    title: string,
    description: string,
    latitude: number,
    longitude: number,
    image: string,
    date: string,
    status: string,
    assigned_to: string,
    rules: IJobRules) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._latitude = latitude;
    this._longitude = longitude;
    this._image = image;
    this._date = date;
    this._status = status;
    this._assigned_to = assigned_to;
    this._rules = rules;
    this.validate();

  }

  public get id(): number {
    return this._id;
  }
  public get title(): string {
    return this._title;
  }
  public get description(): string {
    return this._description;
  }
  public get latitude(): number {
    return this._latitude;
  }
  public get longitude(): number {
    return this._longitude;
  }
  public get image(): string {
    return this._image;
  }
  public get date(): string {
    return this._date;
  }
  public get status(): string {
    return this._status;
  }
  public get assigned_to(): string {
    return this._assigned_to;
  }
  private validate() {
    this._rules.checkEmptyString("title", this._title);
    this._rules.checkEmptyString("description", this._description);
    this._rules.checkEmptyString("image", this._image);
    this._rules.checkEmptyString("date", this._date);
    this._rules.checkEmptyString("status", this._status);
    this._rules.checkEmptyString("assigned_to", this._assigned_to);
  }
}