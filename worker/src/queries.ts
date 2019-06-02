import db from './db'
import relations from './relations'
import { Endpoint, Translator } from './types'

export const findTranslatorById = async (translatorId: string): Promise<Translator> => {
  return await db.select('id', 'requestFunction', 'responseFunction')
    .from(relations.translators)
    .where('id', translatorId)
    .first()
}

export const findEndpointsByTranslatorId = async (translatorId: string): Promise<Array<Endpoint>> => {
  return await db.select('id', 'type', 'url')
    .from(relations.endpoints)
    .where('translator', translatorId)
}