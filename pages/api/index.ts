import type { NextApiRequest, NextApiResponse } from "next";
// import { users } from "../../lib/users.js";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
  //   res: NextApiResponse
) {
  res.status(200).json({ name: "G" });
}
