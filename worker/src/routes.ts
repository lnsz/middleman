import Koa from 'koa'
import db from './db'
import axios from 'axios'
import ts from 'typescript'
import {
  findTranslatorById,
  findEndpointsByTranslatorId,
  findHeadersByEndpointId,
  findParamsByEndpointId
} from './queries'

const testFunction = async (ctx: Koa.ParameterizedContext) => {
  ctx.body = "test"
}

const translateGet = async (ctx: Koa.ParameterizedContext) => {
  const translator = await findTranslatorById(ctx.params.id)
  if (translator) {
    const endpoints = await findEndpointsByTranslatorId(ctx.params.id)

    let responses = []
    for (let endpoint of endpoints) {
      const headers = findHeadersByEndpointId(endpoint.id)
      const params = findParamsByEndpointId(endpoint.id)

      responses.push(await axios.get(endpoint.url))
    }
    responses = responses.map(x => x.data)

    try {
      const responseFunction :any = eval(ts.transpile(translator.responseFunction))
      const translatedResponse :any = await responseFunction.apply(null, responses)
      ctx.body = translatedResponse
    } catch (err) {
      console.log(err)
      ctx.body = err
    }
  }
}

const translatePost = async (ctx: Koa.ParameterizedContext) => {
  ctx.body = "test"
}

const translatePut = async (ctx: Koa.ParameterizedContext) => {
  ctx.body = "test"
}

const translateDelete = async (ctx: Koa.ParameterizedContext) => {
  ctx.body = "test"
}

export default [
  {
    path: '/',
    method: 'get',
    action: testFunction
  },
  {
    path: '/:id',
    method: 'get',
    action: translateGet
  },
  {
    path: '/:id',
    method: 'post',
    action: translatePost
  },
  {
    path: '/:id',
    method: 'put',
    action: translatePut
  },
  {
    path: '/:id',
    method: 'delete',
    action: translateDelete
  }
]