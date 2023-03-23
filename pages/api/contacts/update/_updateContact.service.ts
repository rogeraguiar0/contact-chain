import { prisma } from "../../../../src/api/prisma";
import { iContactRequest } from "../../../../src/types";

export const updateContactService = async (
  id: string,
  data: iContactRequest
) => {
  const newContact = await prisma.contacts.update({
    where: {
      id,
    },
    data,
  });

  return newContact;
};
