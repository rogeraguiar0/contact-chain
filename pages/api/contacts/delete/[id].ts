import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../src/api/prisma";
import { verify } from "../../_helpers/_index";
import { deleteContactService } from "./_deleteContact.service";

const deleteContact = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token || !verify(token))
    return res.status(401).json({ message: "Missing authorization headers" });

  const email = verify(token);

  const findClient = await prisma.client.findUnique({
    where: {
      email,
    },
    include: {
      contacts: true,
    },
  });

  if (!findClient)
    return res.status(404).json({ message: "Client was not found" });

  const { id } = req.query;

  const findContactInClient = findClient.contacts.find((elt) => elt.id === id);

  if (!id || !findContactInClient)
    return res.status(401).json({ message: "Invalid contact id" });

  const findContact = await prisma.contacts.findUnique({
    where: {
      id: String(id),
    },
  });

  if (!findContact)
    return res.status(404).json({ message: "Contact not found" });

  const data = await deleteContactService(findContact.id);

  return res.status(204).json(data);
};

export default deleteContact;
