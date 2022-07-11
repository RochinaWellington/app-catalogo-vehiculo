import {Router} from 'express'
import { getAllVehiculo
        ,getByIdVehiculo
        ,deleteByIdVehiculo
        ,changeVendidoByIdVehiculo
        ,changeNoVendidoByIdVehiculo
        ,updatetVehiculo
        ,insertVehiculo} from '../controllers/vehiculo.controller.js'
const router =Router()

router.get('/vehiculo',getAllVehiculo)
router.get('/vehiculo/:id',getByIdVehiculo)
router.put('/vehiculo/eliminar/:id',deleteByIdVehiculo)
router.put('/vehiculo/vendido/:id',changeVendidoByIdVehiculo)
router.put('/vehiculo/noVendido/:id',changeNoVendidoByIdVehiculo)
router.put('/vehiculo',updatetVehiculo)
router.post('/vehiculo',insertVehiculo)



export default router