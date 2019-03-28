const express = require('express')
const validation = require('express-validation')
const handle = require('express-async-handler')

const routes = express.Router()

const authMiddlewares = require('./app/middlewares/auth')
const controllers = require('./app/controllers')
const validators = require('./app/validators')

routes.post(
  '/users',
  validation(validators.User),
  handle(controllers.UserController.store)
)
routes.post(
  '/sessions',
  validation(validators.Session),
  handle(controllers.SessionController.store)
)

routes.use(authMiddlewares)

routes.get('/ads', handle(controllers.AdController.index))
routes.get('/ads/:id', handle(controllers.AdController.show))
routes.post(
  '/ads',
  validation(validators.Ad),
  handle(controllers.AdController.store)
)
routes.put('/ads/:id', handle(controllers.AdController.update))
routes.delete('/ads/:id', handle(controllers.AdController.destroy))

routes.get('/purchases', handle(controllers.PurchaseController.index))
routes.post(
  '/purchases',
  validation(validators.Purchase),
  handle(controllers.PurchaseController.store)
)

routes.put('/purchases/:id', handle(controllers.PurchaseController.update))
routes.delete('/purchases/:id', handle(controllers.PurchaseController.destroy))

module.exports = routes