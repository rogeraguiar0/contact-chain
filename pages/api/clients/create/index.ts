import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../src/api/prisma";
import { hash } from "bcryptjs";
import { createClientService } from "./_create.service";

const createClient = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await createClientService(req.body);

  const findClient = await prisma.client.findUnique({
    where: {
      email: req.body.email,
    },
  });

  if (findClient)
    return res.status(409).json({ message: "User already exists" });

  return res.status(201).json(data);
};

export default createClient;
