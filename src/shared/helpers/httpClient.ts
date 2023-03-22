import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

const instance = axios.create()

export type ApiResponse<Response> = Promise<AxiosResponse<Response>>

export type TGenerateOptions = {
  method: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH'
  url: string
  data?: any
  params?: any
  config?: AxiosRequestConfig
  instance?: AxiosInstance
}

export type TFormatResponse = {
  data: any
  status: number
  statusText: string
  headers?: any
}

export function httpPost<TData, TResponse>(url: string, data?: TData | string, params?: any): ApiResponse<TResponse> {
  return sendRequest({
    method: 'POST',
    url,
    data,
    params,
  })
}

export function httpGet<TResponse>(url: string, params?: any): ApiResponse<TResponse> {
  return sendRequest({ method: 'GET', url, params })
}
// const httpPatch = (url: string, data: any): Promise<TFormatResponse> => sendRequest({ method: 'PATCH', url, data })
// const httpDelete = (url: string, data: any): Promise<TFormatResponse> => sendRequest({ method: 'DELETE', url, data })
// const httpPut = (url: string, data: any): Promise<TFormatResponse> => sendRequest({ method: 'PUT', url, data })

const formatResponse = (response: any = {}): TFormatResponse => ({
  data: response.data || {},
  status: response.status || 418,
  statusText: response.statusText || '',
  headers: response.headers || {},
})

async function sendRequest<TResponse>({
  method,
  url,
  data = undefined,
  params = undefined,
}: TGenerateOptions): Promise<AxiosResponse<TResponse>> {
  const OPTIONS = generateOptions({
    method,
    url,
    data,
    params,
  })

  try {
    return await instance(url, OPTIONS)
  } catch (error: any) {
    throw formatResponse(error?.response)
  }
}

const generateOptions = ({ method, url, data, params }: TGenerateOptions) => {
  const defaultHeaders = {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  }

  const token = ''

  const authHeaders = {
    'Session-Token': token,
  }

  return {
    method,
    url,
    data,
    params,
    headers: {
      ...defaultHeaders,
      ...(token ? authHeaders : {}),
    },
  }
}
