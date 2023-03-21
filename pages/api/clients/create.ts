import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../src/api/prisma";
import { hash } from "bcryptjs";

const create = async (req: NextApiRequest, res: NextApiResponse) => {
  const { password, email, ...body } = req.body;

  const findClient = await prisma.client.findUnique({
    where: {
      email,
    },
  });

  if (findClient)
    return res.status(409).json({ message: "User already exists" });

  const hashedPassword = await hash(password, 10);

  const createdClient = await prisma.client.create({
    data: {
      email,
      hashedPassword,
      ...body,
    },
  });

  return res.status(201).json(createdClient);
};

export default create;
