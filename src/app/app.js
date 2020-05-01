import appRoutes from './routes'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

class Application {
  constructor() {
    this.server = express()

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.server.use(morgan('dev'))
    this.server.use(cors())
    this.server.use(express.urlencoded({ extended: false }))
    this.server.use(express.json())
  }

  routes() {
    this.server.use('/', appRoutes)
  }
}

export default new Application().server
