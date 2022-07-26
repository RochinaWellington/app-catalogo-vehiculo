import sql from '../db/postgres.js'

export const checkDuplicateEmail= async(req,res,next)=>{
   const comprobarUsuario=await sql`
        select * from usuario
        where usu_mail = ${req.body.usu_mail}
        `
    if(comprobarUsuario.length>0) return res.status(400).json({ message: 'Usuario existente con este mail',code:-1,value:'mailExistente' })
    next()
}