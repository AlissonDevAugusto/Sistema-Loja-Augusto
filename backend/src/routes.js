import { Router } from "express";
import User from "./app/models/User.js";
import { v4 } from "uuid";

const routes = new Router();

routes.get("/", async (req, res) => {
  const user = { /* validando teste de 
    cadastro de usuario no banco */
    id: v4(),
    name: "Alisson",
    email: "alisson@gmail.com",
    password_hash: '123456',
    admin: false,
  };

  await User.create(user);

  res.status(201).json(user);
});

export default routes;
