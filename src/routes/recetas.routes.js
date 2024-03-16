import { Router } from "express";
import { crearReceta, editarReceta, listarRecetas, obtenerReceta } from "../controllers/recetas.controllers.js";

const router = Router()

router.route('/recetas').get(listarRecetas).post(crearReceta)
router.route('/receta/:id').get(obtenerReceta).put(editarReceta)

export default router;