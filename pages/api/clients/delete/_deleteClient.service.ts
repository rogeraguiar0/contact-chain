import { prisma } from "../../../../src/api/prisma";

export const deleteClientService = async (email: string) => {
  await prisma.client.delete({
    where: {
      email,
    },
  });

  return {};
};
