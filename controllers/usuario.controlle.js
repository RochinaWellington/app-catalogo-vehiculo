import { response } from 'express'
import sql from '../db/postgres.js'

export const getAllUsuario = async (req, res) => {
    try {
        const usuario = await sql`
        select * from usuario
        where usu_estado= true
      `
        res.status(200).json(usuario)
    } catch (error) {
        return res.status(500).json({ message: error.message, code: -1, value: error.message })
    }
}

/**
 ** busca al usuario por id y devuelve el usuario encontrado
 */
export const getByIdUsuario = async (req, res) => {
    try {
        const { id } = req.params
        const usuario = await sql`
      select * from usuario
      where usu_id = ${id}
    `
        res.status(200).json(usuario)
    } catch (error) {
        return res.status(500).json({ message: error.message, code: -1, value: error.message })
    }
}

export const insertUsuario = async (req, res) => {
    try {

        const { usu_nombre, usu_clave, usu_estado, usu_telefono, usu_direccion, usu_mail } = req.body


        const usuario = await sql`
        INSERT INTO usuario(
        usu_nombre, usu_clave, usu_estado, usu_telefono, usu_direccion, usu_mail)
        VALUES (${usu_nombre}, ${usu_clave}, ${usu_estado}, ${usu_telefono}, ${usu_direccion}, ${usu_mail})
        `
        return res.status(200).json({ message: 'Usuario creado exitosamente', code: 1, value: 'exitoso' })

    } catch (error) {
        return res.status(500).json({ message: error.message, code: -1, value: error.message })
    }
}

/**
 ** el usuario no es eliminido solo se pone en estado inactivo
 */
export const blockByIdUsuario = async (req, res) => {
    try {
        const { id } = req.params
        const usuario = await sql`
        UPDATE usuario
	    SET usu_estado= false
	    WHERE usu_id=${id}
        `
        res.status(200).json({ message: `usuario ${id} bloqueado exitosamente`, code: 1, value: 'exitoso' })
    } catch (error) {
        return res.status(500).json({ message: error.message, code: -1, value: error.message })
    }
}

export const unblokByIdUsuario = async (req, res) => {
    try {
        const { id } = req.params
        const usuario = await sql`
        UPDATE usuario
	    SET usu_estado= true
	    WHERE usu_id=${id}
        `
        res.status(200).json({ message: `usuario ${id} desbloqueado exitosamente`, code: 1, value: 'exitoso' })
    } catch (error) {
        return res.status(500).json({ message: error.message, code: -1, value: error.message })
    }
}

export const updateUsuario = async (req, res) => {
    try {
        const { usu_id, usu_nombre, usu_clave, usu_estado, usu_telefono, usu_direccion, usu_mail } = req.body
        const usuario = await sql`
        UPDATE usuario
	    SET  usu_nombre=${usu_nombre}, usu_clave=${usu_clave}, usu_estado=${usu_estado},
         usu_telefono=${usu_telefono}, usu_direccion=${usu_direccion}, usu_mail=${usu_mail}
	    WHERE usu_id=${usu_id}
        `
        res.status(200).json({ message: 'Usuario actualizado correctamente', code: 1, value: 'exitoso' })
    } catch (error) {
        return res.status(500).json({ message: error.message, code: -1, value: error.message })
    }
}