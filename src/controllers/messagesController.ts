import { Request, Response } from "express";
import createMessageService from "../services/MessagesServices/createMessage.services";
import listAllMessagesService from "../services/MessagesServices/listAllMessages.services";

const createMessageController = async (req: Request, res: Response) => {
  const idUserProfile = req.user.id;
  const message = req.body;
  const created = await createMessageService(idUserProfile, message);
  return res.status(201).json({});
};

const listAllMessagesController = async (req: Request, res: Response) => {
  console.log(
    "dAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAd",
    "AAAAAAAAAAAAAAAAAAAAAAH"
  );

  const messages = await listAllMessagesService();
  return res.status(200).json(messages);
};

export { createMessageController, listAllMessagesController };
