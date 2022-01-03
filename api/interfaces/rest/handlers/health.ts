import { Request, Response } from "express";
import { IHandler } from "./ihandler";

export const healthHandler: IHandler = {
  endpoint: "/health",
  method: 'post',
  auth: true,
  handler: (req: Request, res: Response) => {
    return res.send("ok");
  }
};