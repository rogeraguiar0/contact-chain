import { prisma } from "../../../../src/api/prisma";

export const retrieveClientService = async (email: string) => {
  const findClient = await prisma.client.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
      name: true,
      email: true,
      telephone: true,
      contacts: true,
      createdAt: true,
    },
  });

  return findClient;
};
