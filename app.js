/**
 * ? importaciones de  moduluos, metodos
 */
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

//rutas
import indexRoutes from './routes/index.routes.js'
import modeloRoutes from './routes/modelo.routes.js'
import marcaRoutes from './routes/marca.routes.js'
import tipoVehiculo from './routes/tipoVehiculo.routes.js'

const app=express()

/**
 * ? configuración de app use
 */
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

//rutas
app.use(indexRoutes)
app.use(modeloRoutes)
app.use(marcaRoutes)
app.use(tipoVehiculo)

export default app