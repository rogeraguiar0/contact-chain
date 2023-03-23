import { prisma } from "../../../../src/api/prisma";
import { iContactRequest } from "../../../../src/types";

export const createContactService = async (
  id: string,
  data: iContactRequest
) => {
  const response = await prisma.contacts.create({
    data: {
      ...data,
      client: {
        connect: { id },
      },
    },
  });

  return response;
};
