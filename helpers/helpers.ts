export const getRootUrl = () => {
  let rootUrl = "";

  if (
    process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === "test"
  ) {
    rootUrl = "https://dof0861809.execute-api.ap-southeast-1.amazonaws.com/dev";
  } else {
    rootUrl =
      "https://2c4l21nv89.execute-api.ap-southeast-1.amazonaws.com/prod";
  }

  return rootUrl;
};

export const getDBUrl = () => {
  let dbUrl = "";

  if (
    process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === "test"
  ) {
    dbUrl = process.env.DATABASE_URL_DEV ? process.env.DATABASE_URL_DEV : "";
  } else {
    dbUrl = process.env.DATABASE_URL ? process.env.DATABASE_URL : "";
  }

  return dbUrl;
};
