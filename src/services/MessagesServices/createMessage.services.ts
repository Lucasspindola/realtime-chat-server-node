import AppDataSource from "../../data-source";
import { Message } from "../../entities/messages.entity";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/AppError";
const createMessageService = async (idUser: string, message: any) => {
  const usersRepository = AppDataSource.getRepository(User);
  const messagesRepository = AppDataSource.getRepository(Message);
  const findUser = await usersRepository.findOneBy({
    id: idUser,
  });

  if (!findUser) {
    throw new AppError(404, "User not exists");
  }

  const newMessage = { textMessage: message.message, user: findUser };

  const messageCreated = messagesRepository.create(newMessage);
  await messagesRepository.save(messageCreated);

  return {};
};

export default createMessageService;
