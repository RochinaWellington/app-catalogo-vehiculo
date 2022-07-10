import { Router } from "express";
import { getTipoVehiculo
        ,getByIdTipoVehiculo
} from "../controllers/tipoVehiculo.controller.js";

const router=Router()

router.get('/tipoVehiculo',getTipoVehiculo)
router.get('/tipoVehiculo/:id',getByIdTipoVehiculo)

export default router