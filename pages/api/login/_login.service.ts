import { sign } from "jsonwebtoken";

export const loginService = async (email: string) => {
  const token = sign({ email }, process.env.SECRET_KEY!, {
    expiresIn: "1h",
  });

  return token;
};
