import { Request, Response } from "express";
import createNewUserService from "../services/UsersServices/createNewUser.services";
import { INewUserRequest } from "../interfaces/users";
import profileService from "../services/UsersServices/profile.services";
const createNewUserController = async (req: Request, res: Response) => {
  const dataUser: INewUserRequest = req.body;
  const userRegistred = await createNewUserService(dataUser);
  return res.status(201).json(userRegistred);
};

const profileController = async (req: Request, res: Response) => {
  const idUserProfile = req.user.id;
  const dataUserProfile = await profileService(idUserProfile);
  return res.status(200).json(dataUserProfile);
};

export { createNewUserController, profileController };
