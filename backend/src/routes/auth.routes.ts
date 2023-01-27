import { create, getAll } from "../controllers/cedula.controller";
import { Router } from "express";

const router = Router()

router.route('/login').post(create).get(getAll)

export default router