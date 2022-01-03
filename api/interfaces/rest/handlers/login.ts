import { Request, Response } from "express";
import { IUserEntity } from "../../../domain/entities/user/entity";
import { IIdentityService } from "../../../services/identity";
import { IHandler } from "./ihandler";

export const authHandler: IHandler = {
  endpoint: "/v1/auth/login",
  method: "post",
  handler: async (req: Request, res: Response) => {
    const user: IUserEntity = req.body;
    const identityService: IIdentityService = req.app.locals['identityService'];
    const outcome = await identityService.authenticate(user);
    if (outcome.status === 200) {
      if (outcome.data.length) {
        return res.json(outcome.data[0]).status(outcome.status);
      }
      return res.json(outcome.data).status(outcome.status);
    }
    return res.json({}).status(outcome.status);
  }
};