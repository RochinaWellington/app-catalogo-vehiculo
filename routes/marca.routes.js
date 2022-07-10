import { Router } from "express";
import { getMarca
        ,getByIdMarca
} from "../controllers/marca.controller.js";
const router=Router()

router.get('/marca',getMarca)
router.get('/marca/:id',getByIdMarca)

export default router