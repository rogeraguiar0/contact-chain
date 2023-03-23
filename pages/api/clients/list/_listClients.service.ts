import { prisma } from "../../../../src/api/prisma";

export const listClientsService = async () => {
  const clients = await prisma.client.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      telephone: true,
      contacts: true,
      createdAt: true,
    },
  });

  return clients;
};
