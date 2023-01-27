import { create, getAll } from "../controllers/cedula.controller";
import { Router } from "express";
import { validate, ValidationError, Joi } from "express-validation";
import Usuarios from "../models/Usuarios";

const router = Router();

const loginValidation = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
      .regex(/[a-zA-Z0-9]{3,30}/)
      .required(),
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
      user
    })
  } catch (error: any) {
    res.status(404).json({
      error: error.message
    })
  }
});

router.post("/signup", validate(loginValidation, {}, {}), (req, res) => {
  try {
    // crear el usuario en la base de datos usango orm sequelize
    const { email, password, nombre, username } = req.body;
    const user = Usuarios.create({
      email,
      password,
      nombre,
      username,
    });
    res.send("Signup");
  } catch (error) {
    console.log("error");
  }
});

export default router;
