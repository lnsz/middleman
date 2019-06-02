export interface Endpoint {
  id: string,
  type: string,
  url: string
}

export interface Translator {
  id: string,
  requestFunction: string,
  responseFunction: string
}