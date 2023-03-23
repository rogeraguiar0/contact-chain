import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../src/api/prisma";
import { compareSync } from "bcryptjs";
import { loginService } from "./_login.service";

const createSession = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;

  const findClient = await prisma.client.findUnique({
    where: {
      email,
    },
  });

  if (!findClient)
    return res.status(401).json({ message: "Invalid credentials" });

  const verifyPassword = compareSync(password, findClient.password);

  if (!verifyPassword)
    return res.status(401).json({ message: "Invalid credentials" });

  const token = await loginService(findClient.email);

  return res
    .status(200)
    .json({ token, email: findClient.email, name: findClient.name });
};

export default createSession;
