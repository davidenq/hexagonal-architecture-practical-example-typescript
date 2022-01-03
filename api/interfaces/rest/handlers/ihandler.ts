import { Request, Response } from "express";
export interface IHandler {
  endpoint: string;
  method: string;
  auth?: boolean;
  handler: (req: Request, res: Response) => {};
}