import { Request, Response, NextFunction } from 'express';
import { IIdentityService } from '../../../services/identity';

export const authorizer = async (req: Request, res: Response, next: NextFunction) => {

  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json({
      status: "unauthorized",
      description: "access token is not valid or has been expired."
    });
    return;
  }
  const identityService: IIdentityService = req.app.locals['identityService'];
  const outcome = await identityService.checkToken(token.replace("Bearer ", ""));
  if (outcome === "") {
    res.status(401).json({
      status: "unauthorized",
      description: "access token is not valid or has been expired."
    });
    return;
  }
  next();

};