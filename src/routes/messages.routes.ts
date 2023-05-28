import { Router } from "express";
import dataVerificationByYupMiddlewares from "../middlewares/dataVerificationByYup.middlewares";
import validityCheckOfUserByTokenMiddlewares from "../middlewares/validityCheckOfUserByToken.middlewares";
import {
  createMessageController,
  listAllMessagesController,
} from "../controllers/messagesController";
import { newMessageRequestSerializer } from "../serializers/messages.serializers";
const messagesRoutes = Router();

messagesRoutes.post(
  "",
  validityCheckOfUserByTokenMiddlewares,
  dataVerificationByYupMiddlewares(newMessageRequestSerializer),
  createMessageController
);

messagesRoutes.get("", listAllMessagesController);

// usersRoutes.get(
//   "/profile",
//   validityCheckOfUserByTokenMiddlewares,
//   profileController
// );

export default messagesRoutes;
