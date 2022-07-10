import {Router} from 'express'
import { getAllUsuario,getByIdUsuario, insertUsuario,deleteByIdUsuario} from '../controllers/usuario.controlle.js'
const router =Router()

router.get('/usuario',getAllUsuario)
router.get('/usuario/:id',getByIdUsuario)
router.post('/usuario',insertUsuario)
router.delete('/usuario/:id',deleteByIdUsuario)


export default router