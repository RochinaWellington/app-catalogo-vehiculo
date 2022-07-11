import {Router} from 'express'
import { getAllUsuario,getByIdUsuario,
     insertUsuario,blockByIdUsuario,updateUsuario
     , unblokByIdUsuario} from '../controllers/usuario.controlle.js'
const router =Router()

router.get('/usuario',getAllUsuario)
router.get('/usuario/:id',getByIdUsuario)
router.post('/usuario',insertUsuario)
router.put('/usuario/block/:id',blockByIdUsuario)
router.put('/usuario/unblock/:id',unblokByIdUsuario)
router.put('/usuario',updateUsuario)


export default router