import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/AppError";
import { INewUserRequest, INewUserResponse } from "../../interfaces/users";
import { userWithoutPasswordFieldSerializer } from "../../serializers/user.serializers";

const createNewUserService = async (dataUser: INewUserRequest) => {
  const usersRepository = AppDataSource.getRepository(User);
  const findUser = await usersRepository.findOneBy({
    nickname: dataUser.nickname,
  });
  if (findUser) {
    throw new AppError(409, "User with this NICKNAME already registered");
  }
  const userCreated = usersRepository.create(dataUser);
  await usersRepository.save(userCreated);
  // tipagem-retorno-sem password
  const userWithoutPasswordField = userWithoutPasswordFieldSerializer.validate(
    userCreated,
    {
      stripUnknown: true,
    }
  );
  return userWithoutPasswordField;
};

export default createNewUserService;
