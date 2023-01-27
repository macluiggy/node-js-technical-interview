import { create, getAll } from "../controllers/cedula.controller";
import { Router } from "express";
import { validate, ValidationError, Joi } from "express-validation";
import Usuarios from "../models/Usuarios";
import bcrypt from "bcryptjs";

const router = Router();

const loginValidation = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
      .regex(/[a-zA-Z0-9]{3,30}/)
      .required(),
    username: Joi.string().required(),
    nombre: Joi.string().required(),
  }),
};
router.post("/login", validate(loginValidation, {}, {}), async (req, res) => {
  try {
    // buscar el usuario en la base de datos usango orm sequelize
    const { email, password } = req.body;
    const user = await Usuarios.findAll({
      attributes: ["id", "nombre", "username", "email"],
      where: {
        email,
        password,
      },
    });
    if (user.length === 0) {
      throw new Error("Usuario no encontrado");
    }
    res.json({
      user,
    });
  } catch (error: any) {
    res.status(404).json({
      error: error.message,
    });
  }
});

router.post("/signup", validate(loginValidation, {}, {}), async (req, res) => {
  try {
    // crear el usuario en la base de datos usango orm sequelize
    const { email, password, nombre, username } = req.body;
    // verificamos que no exista el usuario
    const userFound = await Usuarios.findAll({
      attributes: ["id", "nombre", "username", "email"],
      where: {
        email,
      },
    });
    if (userFound.length > 0) {
      throw new Error("Usuario ya existe");
    }
    const encryptedPassword = bcrypt.hashSync(password, 10);
    const user = await Usuarios.create({
      email,
      password: encryptedPassword,
      nombre,
      username,
    });
    res.json({
      message: "Usuario creado",
      user,
    });
  } catch (error: any) {
    console.log("error");
    res.status(404).json({
      error: error.message,
    });
  }
});

export default router;
