import { Router } from "express";
import dataVerificationByYupMiddlewares from "../middlewares/dataVerificationByYup.middlewares";
import {
  createNewUserController,
  profileController,
} from "../controllers/users.controllers";
import { newUserRequestSerializer } from "../serializers/user.serializers";
import validityCheckOfUserByTokenMiddlewares from "../middlewares/validityCheckOfUserByToken.middlewares";
const usersRoutes = Router();

usersRoutes.post(
  "",
  dataVerificationByYupMiddlewares(newUserRequestSerializer),
  createNewUserController
);

usersRoutes.get(
  "/profile",
  validityCheckOfUserByTokenMiddlewares,
  profileController
);

export default usersRoutes;
