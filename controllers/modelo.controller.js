import sql from '../db/postgres.js'

export const getModelo = async (req, res) => {
    try {
        const modelo= await sql`
        select * from modelo
      `
      res.status(200).json(modelo)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }