import jwt from "jsonwebtoken";

export const verify = (token: string) => {
  let res;

  jwt.verify(token, process.env.SECRET_KEY!, (error, decoded: any) => {
    res = error ? false : decoded.email;
  });

  return res;
};
