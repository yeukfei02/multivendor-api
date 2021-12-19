import { v4 as uuidv4 } from "uuid";

import {
  addPhoneConfirmation,
  getPhoneConfirmation,
} from "../services/phoneConfirmation";

export const generateCodeControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  let response = {
    message: "generateCode",
    code: "",
  };

  if (args) {
    const phone = args.phone;
    const code = uuidv4();
    const ip = context.requestIp;
    const phoneConfirmation = await addPhoneConfirmation(phone, code, ip);

    if (phoneConfirmation) {
      response = {
        message: "generateCode",
        code: phoneConfirmation.code,
      };
    }
  }

  return response;
};

export const checkCodeControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  let response = {
    message: "checkCode",
    phoneConfirmation: {},
  };

  if (args && args.input) {
    const input = args.input;
    const { phone, code } = input;
    const phoneConfirmation = await getPhoneConfirmation(phone, code);
    if (phoneConfirmation) {
      response = {
        message: "checkCode",
        phoneConfirmation: phoneConfirmation,
      };
    }
  }

  return response;
};
