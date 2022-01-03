import { Request, Response } from "express";
import { IHandler } from "./ihandler";

export const jobHandler: IHandler = {
  endpoint: "/v1/api/jobs",
  method: "get",
  auth: true,
  handler: (req: Request, res: Response) => {
    throw new Error("Function not implemented.");
  }
};