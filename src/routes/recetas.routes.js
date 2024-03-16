import { Router } from "express";
import { crearReceta, listarRecetas, obtenerReceta } from "../controllers/recetas.controllers.js";

const router = Router()

router.route('/recetas').get(listarRecetas).post(crearReceta)
router.route('/receta/:id').get(obtenerReceta)

export default router;