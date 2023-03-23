import { prisma } from "../../../../src/api/prisma";

export const deleteContactService = async (id: string) => {
  await prisma.contacts.delete({
    where: { id },
  });
};
