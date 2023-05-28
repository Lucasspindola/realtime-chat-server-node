import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/AppError";
import { userWithoutPasswordFieldSerializer } from "../../serializers/user.serializers";

const profileService = async (idUserProfile: string) => {
  const usersRepository = AppDataSource.getRepository(User);
  const findUser = await usersRepository.findOneBy({
    id: idUserProfile,
  });
  if (!findUser) {
    throw new AppError(404, "User not exists");
  }
  //   // tipagem-retorno-sem password
  const userWithoutPasswordField = userWithoutPasswordFieldSerializer.validate(
    findUser,
    {
      stripUnknown: true,
    }
  );
  return userWithoutPasswordField;
};

export default profileService;
