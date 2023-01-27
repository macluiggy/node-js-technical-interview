import { create, getAll } from "../controllers/cedula.controller";
import { Router } from "express";
import { validate, ValidationError, Joi } from "express-validation";

const router = Router();

const loginValidation = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
      .regex(/[a-zA-Z0-9]{3,30}/)
      .required(),
  }),
};
router.post("/login", validate(loginValidation, {}, {}), (req, res) => {
  try {
    res.send("Login");
  } catch (error) {
    console.log("error");
  }
});

router.post("/signup", validate(loginValidation, {}, {}), (req, res) => {
  try {
    res.send("Signup");
  } catch (error) {
    console.log("error");
  }
});

export default router;
