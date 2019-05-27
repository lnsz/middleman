import db from './db'
import relations from './relations'

export const findTranslatorById = async (translatorId: string) => {
  return await db.select('requestFunction', 'responseFunction')
    .from(relations.translators)
    .where('id', translatorId)
    .first()
}

export const findEndpointsByTranslatorId = async (translatorId: string) => {
  return await db.select('id', 'type', 'url', 'body', 'apiKey')
    .from(relations.endpoints)
    .where('translator', translatorId)
}

export const findHeadersByEndpointId = async (endpointId: string) =>{
  return await db.select('key', 'value')
    .from(relations.headers)
    .where('id', endpointId)
}

export const findParamsByEndpointId = async (endpointId: string) =>{
  return await db.select('key', 'value')
    .from(relations.params)
    .where('id', endpointId)
}