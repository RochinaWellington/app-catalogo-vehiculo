import { Router } from "express";
import { getModelo,
        getByIdModelo
 } from "../controllers/modelo.controller.js";

const router=Router()

router.get('/modelo',getModelo)
router.get('/modelo/:id',getByIdModelo)

export default router
