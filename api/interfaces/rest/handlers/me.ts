import { Request, Response } from "express";
import { IHandler } from "./ihandler";

export const meHandler: IHandler = {
  endpoint: "/v1/auth/me",
  method: "get",
  auth: true,
  handler: (req: Request, res: Response) => {
    throw new Error("Function not implemented.");
  }
};