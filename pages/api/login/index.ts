import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../src/api/prisma";
import { compareSync } from "bcryptjs";
import { loginService } from "./_login.service";

const createSession = async (req: NextApiRequest, res: NextApiResponse) => {
  const email = req.body.email;
  const clientPassword = req.body.password;

  const findClient = await prisma.client.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
      name: true,
      email: true,
      password: true,
      telephone: true,
      contacts: true,
      createdAt: true,
    },
  });

  if (!findClient)
    return res.status(401).json({ message: "Invalid credentials" });

  const verifyPassword = compareSync(clientPassword, findClient.password);

  if (!verifyPassword)
    return res.status(401).json({ message: "Invalid credentials" });

  const token = await loginService(findClient.email);

  const { password, ...data } = findClient;

  return res.status(200).json({ token, client: data });
};

export default createSession;
