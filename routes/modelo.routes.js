import { Router } from "express";
import { getModelo } from "../controllers/modelo.controller.js";

const router=Router()

router.get('/modelo',getModelo)

export default router
