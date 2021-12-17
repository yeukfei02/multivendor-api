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
