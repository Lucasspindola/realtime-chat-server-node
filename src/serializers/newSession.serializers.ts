import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserLogin } from "../interfaces/users";
const newSessionSerializer: SchemaOf<IUserLogin> = yup.object().shape({
  nickname: yup.string().required(),
  password: yup.string().required(),
});

export { newSessionSerializer };
