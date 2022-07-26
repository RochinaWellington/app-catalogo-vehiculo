import postgres from 'postgres'
import dotenv from 'dotenv'
const dotEnv=dotenv.config()


const ruta=process.env.DATABASE_URL
const sql = postgres(ruta,{
    ssl: {
        rejectUnauthorized: false
      }
})
export default sql