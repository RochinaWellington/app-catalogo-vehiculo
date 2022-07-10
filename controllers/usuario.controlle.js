import { response } from 'express'
import sql from '../db/postgres.js'

export const getAllUsuario = async (req, res) => {
    try {
        const usuario = await sql`
        select * from usuario
      `
        res.status(200).json(usuario)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getByIdUsuario = async (req, res) => {
    try {
        const { id } = req.params
        const usuario = await sql`
      select * from usuario
      where usu_id = ${id}
    `
        res.status(200).json(usuario)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const insertUsuario = async (req, res) => {
    try {
        const { usu_nombre, usu_clave, usu_estado, usu_telefono, usu_direccion, usu_mail, usu_cedula } = req.body
        const usuario = await sql`
        INSERT INTO usuario(
        usu_nombre, usu_clave, usu_estado, usu_telefono, usu_direccion, usu_mail, usu_cedula)
        VALUES (${usu_nombre}, ${usu_clave}, ${usu_estado}, ${usu_telefono}, ${usu_direccion}, ${usu_mail}, ${usu_cedula})
        returning usu_nombre,usu_id
        `
        console.log(usuario[0].usu_id)
        res.status(200).json(usuario)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const deleteByIdUsuario = async (req, res) => {
    try {
        const { id } = req.params
        const usuario = await sql`
        DELETE FROM public.usuario
	    WHERE usu_id=${id}
        `
        res.status(200).json({message:`usuario ${id} eliminado exitosamente`})
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

