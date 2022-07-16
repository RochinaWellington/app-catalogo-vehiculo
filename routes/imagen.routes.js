import { Router } from "express"
import fileUpload from "express-fileupload"
import { getImagen,insertImagen,deleteImagen } from "../controllers/imagen.controller.js"
const router=Router()

router.get('/imagen',getImagen)
router.delete('/imagen',deleteImagen)
router.post('/imagen',fileUpload({useTempFiles:true, tempFileDir:'./uploads'}),insertImagen)

export default router