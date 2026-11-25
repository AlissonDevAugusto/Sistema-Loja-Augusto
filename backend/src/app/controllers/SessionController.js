/*  Metodos padrao do Controller na arquitetura MVC :
        store -> criar dados - Equivale ao POST
        index -> listar todos os dados - Equivale ao GET
        show -> listar um dado especifico - Equivale ao GET
        update -> atualiza dados - Equivale ao PUT
        delete -> deletar dados - Equivale ao DELETE
*/

import * as Yup from "yup";
import User from "../models/User.js";
import bcrypt from "bcrypt";

class SessionController {
  async store(req, res) {
    const schema = Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    const isValid = await schema.isValid(req.body, { strict: true });

    function emailOrPasswordIncorrect() {
      return res.status(400).json({ error: "Email or Password incorrect" });
    }

    if (!isValid) {
      emailOrPasswordIncorrect();
    }

    const { email, password } = req.body;

    const existingUser = await User.findOne({
      where: {
        email,
      },
    });

    if (!existingUser) {
      emailOrPasswordIncorrect();
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password_hash,
    );

    if (!isPasswordCorrect) {
      emailOrPasswordIncorrect();
    }

    return res.status(200).json({
      id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
      admin: existingUser.admin,
    });
  }
}

export default new SessionController();
