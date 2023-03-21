import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../src/api/prisma";

const list = async (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(201).json({ message: "deu bom" });
};

export default list;
