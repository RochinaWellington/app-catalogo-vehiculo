import sql from '../db/postgres.js'

export const getMarca = async (req, res) => {
    try {
        const marca = await sql`
        select * from marca
      `
        res.status(200).json(marca)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getByIdMarca= async (req, res) => {
    try {
        const { id } = req.params
        const marca = await sql`
        select * from marca
        where mac_id = ${id}
      `
        res.status(200).json(marca)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}