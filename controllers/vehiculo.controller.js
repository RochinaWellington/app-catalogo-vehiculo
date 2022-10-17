
import sql from '../db/postgres.js'

export const getAllVehiculo = async (req, res) => {
    try {
        const vehiculo = await sql`
        select vh.*,
				mc.mac_nombre
		from vehiculo as vh
		inner join marca as mc
		on mc.mac_id=vh.mac_id
		where veh_estadoeliminado=false
      `
        res.status(200).json(vehiculo)
    } catch (error) {
        return res.status(500).json({ message: error.message,code:-1,value:error.message })
    }
}

export const getByIdVehiculo = async (req, res) => {
    try {
        const { id } = req.params
        const vehiculo = await sql`
        select * from vehiculo
        where veh_id=${id}
      `
        res.status(200).json(vehiculo)
    } catch (error) {
        return res.status(500).json({ message: error.message,code:-1,value:error.message })
    }
}

/**
 **El metodo no elimina solo cambia el estado a eliminado
 */
export const deleteByIdVehiculo = async (req, res) => {
    try {
        const { id } = req.params
        const vehiculo = await sql`
        UPDATE public.vehiculo
	    SET veh_estadoeliminado=true
        where veh_id=${id}
        `
        res.status(200).json({ message: 'eliminado exitosamente',code:1,value:'exitoso' })
    } catch (error) {
        return res.status(500).json({ message: error.message,code:-1,value:error.message })
    }
}

/**
 **El metodo cambia la columna veh_estadovendido a true
 */
 export const changeVendidoByIdVehiculo = async (req, res) => {
    try {
        const { id } = req.params
        const vehiculo = await sql`
        UPDATE public.vehiculo
	    SET veh_estadovendido=true
        where veh_id=${id}
        `
        res.status(200).json({ message: 'vendido exitosamente',code:1,value:'exitoso' })
    } catch (error) {
        return res.status(500).json({ message: error.message,code:-1,value:error.message })
    }
}
/**
 **El metodo cambia la columna veh_estadovendido a false
 */
 export const changeNoVendidoByIdVehiculo = async (req, res) => {
    try {
        const { id } = req.params
        const vehiculo = await sql`
        UPDATE public.vehiculo
	    SET veh_estadovendido=false
        where veh_id=${id}
        `
        res.status(200).json({ message: 'Estado no vendido modificado exitosamente',code:1,value:'exitoso' })
    } catch (error) {
        return res.status(500).json({ message: error.message,code:-1,value:error.message })
    }
}

export const updatetVehiculo = async (req, res) => {
    try {
        const { veh_id,veh_precio,veh_descripcion,veh_kilometraje,
        tveh_id,mac_id,veh_ubicacion,veh_color,usu_id,veh_anio,veh_estadovendido} = req.body

        const vehiculo = await sql`
        UPDATE vehiculo
	    SET veh_precio=${veh_precio}, veh_descripcion=${veh_descripcion},
        veh_kilometraje=${veh_kilometraje}, tveh_id=${tveh_id}, mac_id=${mac_id},
        veh_ubicacion=${veh_ubicacion}, veh_color=${veh_color}, usu_id=${usu_id},
        veh_anio=${veh_anio}, veh_estadovendido=${veh_estadovendido}
	    WHERE veh_id=${veh_id}
        `
        res.status(200).json({ message: 'Actualizado exitosamente',code:1,value:'exitoso' })
    } catch (error) {
        return res.status(500).json({ message: error.message,code:-1,value:error.message })
    }
}

export const insertVehiculo = async (req, res) => {
    try {
        const { veh_precio,veh_descripcion,veh_kilometraje,
        tveh_id,mac_id,veh_ubicacion,veh_color,usu_id,
        veh_anio} = req.body

        const vehiculo = await sql`
        INSERT INTO public.vehiculo(
        veh_precio, veh_descripcion, veh_kilometraje, tveh_id, mac_id, veh_ubicacion,
        veh_color, usu_id, veh_anio, veh_estadovendido, veh_estadoeliminado)
        VALUES (${veh_precio}, ${veh_descripcion}, ${veh_kilometraje}, ${tveh_id},
        ${mac_id}, ${veh_ubicacion}, ${veh_color}, ${usu_id}, ${veh_anio},  false, false)
        returning *
        `
        res.status(200).json(vehiculo)
    } catch (error) {
        return res.status(500).json({ message: error.message,code:-1,value:error.message })
    }
}





