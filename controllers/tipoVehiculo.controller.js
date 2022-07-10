import sql from '../db/postgres.js'

export const getTipoVehiculo = async (req, res) => {
    try {
        const tipoVehiculo= await sql`
        select * from tipo_vehiculo
      `
      res.status(200).json(tipoVehiculo)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }


export const getByIdTipoVehiculo = async (req, res) => {
  try {
      const { id } = req.params
      const tipoVehiculo= await sql`
      select * from tipo_vehiculo
      where tveh_id = ${id}
    `
    res.status(200).json(tipoVehiculo)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}