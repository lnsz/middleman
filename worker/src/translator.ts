import Koa from 'koa'
import axios from 'axios'
import ts from 'typescript'
import {
  findTranslatorById,
  findEndpointsByTranslatorId
} from './queries'
import { Endpoint } from './types'

export default async (ctx: Koa.ParameterizedContext): Promise<any> => {
  const translator = await findTranslatorById(ctx.params.id)
  if (translator) {
    const translatedRequest = translator.requestFunction ?
      getTranslatedRequest(ctx.request, translator.requestFunction) : []
    const endpoints = await findEndpointsByTranslatorId(ctx.params.id)
    const responses = await getResponses(endpoints, translatedRequest)

    return translator.responseFunction ?
      getTranslatedResponse(responses, translator.responseFunction) : responses
  }
  return {}
}

const getTranslatedRequest = (request: Koa.Request, requestFunction: string): Array<Object> => {
  const req = {
    header: request.header,
    query: { ...request.query },
    body: { ...request.body }
  }
  const f = requestFunction
  try {
    const requestFunction :any = eval(ts.transpile(f))
    return requestFunction.apply(null, req)
  } catch (err) {
    console.log(err)
    return []
  }
}

const getResponses = async (endpoints: Array<Endpoint>, translatedRequest: Array<Object>) => {
  let responses = []
  for (let {endpoint, index} of endpoints.map((endpoint: Endpoint, index: number) => ({endpoint, index}))) {
    let options = {
      method: endpoint.type,
      url: endpoint.url,
    }
    if (translatedRequest && index < translatedRequest.length) {
      options = { ...options, ...translatedRequest[index] }
    }
    responses.push(await axios(options))
  }
  return responses.map(x => x.data)
}

const getTranslatedResponse = (responses: Array<Object>, responseFunction: string) => {
  const f = responseFunction
  try {
    const responseFunction :any = eval(ts.transpile(f))
    const translatedResponse :any = responseFunction.apply(null, responses)
    return translatedResponse
  } catch (err) {
    console.log(err)
    return err
  }
}