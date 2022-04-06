import { create, getAll } from "../controllers/cedula.controller";
import { Router } from "express";

const router = Router()

router.route('/cedula').post(create).get(getAll)

export default router