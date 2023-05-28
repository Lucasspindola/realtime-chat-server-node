import * as yup from "yup";
import { SchemaOf } from "yup";
import { IMessageRequest } from "../interfaces/messagess";

const newMessageRequestSerializer: SchemaOf<IMessageRequest> = yup
  .object()
  .shape({
    message: yup.string().required(),
  });

export { newMessageRequestSerializer };
