import { hashSync } from "bcryptjs";
import { prisma } from "../../../../src/api/prisma";
import { iClientRequest } from "../../../../src/types";

export const updateClientService = async (
  email: string,
  body: iClientRequest
) => {
  const { password, ...data } = body;

  if (password) {
    await prisma.client.update({
      where: {
        email,
      },
      data: {
        password: hashSync(password, 10),
      },
    });
  }

  const newClient = await prisma.client.update({
    where: { email },
    data: data,
    select: {
      name: true,
      email: true,
      telephone: true,
      contacts: true,
      createdAt: true,
    },
  });

  return newClient;
};
