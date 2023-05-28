import { Request, Response } from "express";

import { IUserLogin } from "../interfaces/users";
import loginSessionService from "../services/SessionServices/loginSession.services";

const loginSessionController = async (req: Request, res: Response) => {
  const dataSession: IUserLogin = req.body;
  const token = await loginSessionService(dataSession);
  return res.status(200).json(token);
};

export { loginSessionController };
