import { Router } from "express";
import { crearUsuario, listarUsuarios } from "../controllers/usuarios.controllers.js";

const router = Router()

router.route('/usuarios').post(crearUsuario).get(listarUsuarios)


export default router;