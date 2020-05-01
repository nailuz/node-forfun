import { Router } from 'express'

class AppRoutes {
  constructor() {
    this.routes = Router()

    this.branches()
    this.exceptionHandlers()
  }

  branches() {}
  exceptionHandlers() {
    this.routes.use('*', (req, res) => {
      res.status(404).send({ error: 'Works' })
    })
  }
}

export default new AppRoutes().routes
