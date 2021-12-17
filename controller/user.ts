import { addUser, getUser } from "../services/user";

export const addUserControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  const phone = args.phone;

  if (phone) {
    await addUser(phone);
  }

  const response = {
    message: "addUser",
  };

  return response;
};

export const getUserControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  const phone = args.phone;
  const user = await getUser(phone);

  let response = {
    message: "getUser",
    users: {},
  };

  if (user) {
    response = {
      message: "getUser",
      users: user,
    };
  }

  return response;
};
