import { NextApiRequest, NextApiResponse } from "next";
import { verify } from "../../_helpers/_index";
import { retrieveClientService } from "./_retrieveClient.service";

const retrieveClient = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token)
    return res.status(401).json({ message: "Missing authorization headers" });

  const email = verify(token);

  if (!email)
    return res.status(401).json({ message: "Missing authorization headers" });

  const { id } = req.query;

  if (!id) return res.status(401).json({ message: "Missing client id" });

  const data = await retrieveClientService(String(id));

  if (!data) return res.status(404).json({ message: "User was not found" });

  return res.status(200).json(data);
};

export default retrieveClient;
