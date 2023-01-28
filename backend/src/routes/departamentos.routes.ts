// import { create, getAll } from "../controllers/cedula.controller";
import { Router } from "express";
import verifyToken from "../middlewares/verifyToken";
import Departamentos from "../models/Departamentos";

const router = Router();

router.post("/departamentos", verifyToken, async (req, res) => {
  try {
    // creamos el cliente
    const { nombre, id_cliente } = req.body;
    const departamento = await Departamentos.create({
      nombre,
      id_cliente,
    })
    return res.json({
      message: "Departamento creado",
      data: departamento
    })
  } catch (error: any) {
    console.log(error);

    res.status(404).json({
      error: error.message,
    });
  }
});


export default router;
