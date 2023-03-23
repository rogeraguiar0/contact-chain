import { hashSync } from "bcryptjs";
import { prisma } from "../../../../src/api/prisma";
import { iClientRequest } from "../../../../src/types";

export const createClientService = async ({
  email,
  password,
  ...data
}: iClientRequest) => {
  const hashedPassword = hashSync(password, 10);

  const createdClient = await prisma.client.create({
    data: {
      email,
      password: hashedPassword,
      ...data,
    },
  });

  return createdClient;
};
