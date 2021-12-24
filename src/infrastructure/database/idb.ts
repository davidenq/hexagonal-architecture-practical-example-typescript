export interface IOperationsDB {
  find(name: string, filter: any): any;
  findOne(name: string, data: any, filter: any): any;
  findLast(name: string, data: any, filter: any): any;
  insert(name: string, data: any, options: any): any;
}