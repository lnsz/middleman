import Koa from 'koa'
import translate from './translator'

const translateRequest = async (ctx: Koa.ParameterizedContext) => {
  ctx.body = await translate(ctx)
}

export default [
  {
    path: '/:id',
    method: 'get',
    action: translateRequest
  },
  {
    path: '/:id',
    method: 'post',
    action: translateRequest
  },
  {
    path: '/:id',
    method: 'put',
    action: translateRequest
  },
  {
    path: '/:id',
    method: 'delete',
    action: translateRequest
  }
]