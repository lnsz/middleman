import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import morgan from 'koa-morgan'
import routes from './routes'

const app = new Koa()
const router = new Router()

app.use(morgan('combined'))
app.use(bodyParser())

// Load routes
routes.forEach(route => (router as {[key: string]: any})[route.method](route.path, route.action))
app.use(router.routes())

const port = process.env.PORT
app.listen({ port: port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}`),
);