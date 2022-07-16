import sql from '../db/postgres.js'
import { upLoadImage, deleteImage } from '../utils/cloudinary.js'
import fs from 'fs-extra'

export const getImagen = async (req, res) => {
    try {
        const imagen = await sql`
        select * from imagen
      `
        res.status(200).json(imagen)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const insertImagen = async (req, res) => {
    try {

        const {img_veh_id} = req.body
        if (req.files?.image) {
            const result = await upLoadImage(req.files.image.tempFilePath)
            const imagen = await sql`
        INSERT INTO imagen(
            img_public_id, img_secure_url, img_veh_id)
           VALUES ( ${result.public_id}, ${result.secure_url}, ${img_veh_id})
           returning *
        `
            await fs.unlink(req.files.image.tempFilePath)
            return res.status(500).json(imagen)
        }
        return res.status(500).json({ message: 'problemas con la imagen', code: -1, value: 'Error' })
    } catch (error) {
        return res.status(500).json({ message: error.message, code: -1, value: error.message })
    }
}

export const deleteImagen = async (req, res) => {
    try {
        const { img_public_id } = req.body
        if (img_public_id) {
            await deleteImage(img_public_id)

            const imagen = await sql`
            DELETE FROM public.imagen
	        WHERE img_public_id=${img_public_id}
            `

            return res.status(200).json({ message: 'Eliminado existosamente', code: 1, value: 'Elimanado' })

        }

        return res.status(500).json({ message: 'img_public_id no puede ser null ', code: -1, value: 'Error' })

    } catch (error) {
        return res.status(500).json({ message: error.message, code: -1, value: error.message })
    }
}