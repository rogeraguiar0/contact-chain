import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../src/api/prisma";
import { verify } from "../../_helpers/_index";
import { createContactService } from "./_createContact.service";

const createContact = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token)
    return res.status(401).json({ message: "Missing authorization headers" });

  const email = verify(token);

  if (!email)
    return res.status(401).json({ message: "Missing authorization headers" });

  const findClient = await prisma.client.findUnique({
    where: { email },
  });

  if (!findClient)
    return res.status(404).json({ message: "Client was not found" });

  await createContactService(findClient.id, req.body);

  const attClient = await prisma.client.findUnique({
    where: { email },
    select: {
      id: true,
      name: true,
      email: true,
      telephone: true,
      createdAt: true,
      contacts: true,
    },
  });

  return res.status(201).json(attClient);
};

export default createContact;
