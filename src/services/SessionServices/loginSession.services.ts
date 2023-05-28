import { IUserLogin } from "../../interfaces/users";
import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/AppError";
import "dotenv/config";

interface ILoginResponse {
  token: string;
}

const loginSessionService = async ({
  nickname,
  password,
}: IUserLogin): Promise<ILoginResponse> => {
  const userRepositoy = AppDataSource.getRepository(User);
  const user = await userRepositoy.findOneBy({ nickname: nickname });

  if (!user) {
    throw new AppError(403, "user or password invalid");
  }

  const passwordCombined = await compare(password, user.password);

  if (!passwordCombined) {
    throw new AppError(403, "user or password invalid");
  }

  const token = jwt.sign({}, process.env.SECRET_KEY!, {
    subject: String(user.id),
    expiresIn: "24h",
  });

  return { token: token };
};

export default loginSessionService;
