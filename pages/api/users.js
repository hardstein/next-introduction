import { users } from "../../data/users.js";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ users });
  } else if (req.method === "POST") {
    const user = req.body.user;
    const newUser = {
      id: users.length + 1,
      name: user?.name,
      username: user?.username,
      email: user?.email,
    };
    users.push(newUser);
    res.status(201).json(newUser);
  }
}
