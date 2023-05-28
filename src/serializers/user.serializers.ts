import * as yup from "yup";
import { SchemaOf } from "yup";
import { INewUserRequest } from "../interfaces/users";

const newUserRequestSerializer: SchemaOf<INewUserRequest> = yup.object().shape({
  nickname: yup.string().required(),
  password: yup.string().required().min(8),
});

const userWithoutPasswordFieldSerializer = yup.object().shape({
  id: yup.string().uuid().required(),
  nickname: yup.string().required(),
  createdAt: yup.date().required(),
});
export { userWithoutPasswordFieldSerializer, newUserRequestSerializer };
