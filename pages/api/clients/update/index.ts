import { hashSync } from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../src/api/prisma";
import { verify } from "../../_helpers/_index";
import { updateClientService } from "./_updateClient.service";

const updateClient = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token)
    return res.status(401).json({ message: "Missing authorization headers" });

  const email = verify(token);

  if (!email)
    return res.status(401).json({ message: "Missing authorization headers" });

  const findClient = await prisma.client.findUnique({
    where: {
      email,
    },
  });

  if (!findClient)
    return res.status(404).json({ message: "Client was not found" });

  const data = await updateClientService(findClient.email, req.body);

  return res.status(200).json(data);
};

export default updateClient;
