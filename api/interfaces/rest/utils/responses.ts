import { Request, Response } from "express";

export const response = {};
response['401'] = (req: Request, res: Response) => {
  res.status(401).json({
    status: "unauthorized",
    description: "access token is not valid or has been expired."
  });
};