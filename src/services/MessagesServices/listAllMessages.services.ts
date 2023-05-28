import AppDataSource from "../../data-source";
import { Message } from "../../entities/messages.entity";
import { AppError } from "../../errors/AppError";

const listAllMessagesService = async () => {
  const messagesRepository = AppDataSource.getRepository(Message);
  const findMessages = await messagesRepository.find({ relations: ["user"] });

  const messagesWithUserNames = findMessages.map((message) => {
    return {
      id: message.id,
      textMessage: message.textMessage,
      createdAt: message.createdAt,
      nickname: message.user.nickname,
    };
  });

  return messagesWithUserNames;
};

export default listAllMessagesService;
