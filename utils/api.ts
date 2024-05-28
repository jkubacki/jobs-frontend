import axios, { AxiosBasicCredentials, AxiosRequestConfig, AxiosResponse } from 'axios'
import { call } from 'typed-redux-saga'
import { env } from 'next-runtime-env'

export interface ApiResponse extends AxiosResponse {
  success: boolean
  error: string
}

export interface ApiErrorResponse extends ApiResponse {
  data: { message: string }
}

export function* apiClient() {
  const auth = (): AxiosBasicCredentials | undefined => {
    const environment = env('NEXT_PUBLIC_ENVIRONMENT')
    if (environment !== 'PRODUCTION') {
      return undefined
    }

    const username = env('NEXT_PUBLIC_BASIC_AUTH_USERNAME') as string
    const password = env('NEXT_PUBLIC_BASIC_AUTH_PASSWORD') as string

    return {
      username,
      password,
    }
  }

  const baseURL = env('NEXT_PUBLIC_API_PATH') as string
  const api = axios.create({
    auth: auth(),
    baseURL,
    responseType: 'json',
  })

  api.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      return error.response
    }
  )

  return api
}

export function* apiGet(url: string, config?: AxiosRequestConfig<any> | undefined) {
  const api = yield* call(apiClient)
  const axiosResponse = yield* call(() => api.get(url, config))
  return wrappedResponse(axiosResponse)
}

export function* apiDelete(url: string, config?: AxiosRequestConfig<any> | undefined) {
  const api = yield* call(apiClient)
  const axiosResponse = yield* call(() => api.delete(url, config))
  return wrappedResponse(axiosResponse)
}

export function* apiPost(
  url: string,
  data?: any | undefined,
  config?: AxiosRequestConfig<any> | undefined
) {
  const api = yield* call(apiClient)
  const axiosResponse = yield* call(() => api.post(url, data, config))
  return wrappedResponse(axiosResponse)
}

export function* apiPut(
  url: string,
  data?: any | undefined,
  config?: AxiosRequestConfig<any> | undefined
) {
  const api = yield* call(apiClient)
  const axiosResponse = yield* call(() => api.put(url, data, config))
  return wrappedResponse(axiosResponse)
}

export function* apiPatch(
  url: string,
  data?: any | undefined,
  config?: AxiosRequestConfig<any> | undefined
) {
  const api = yield* call(apiClient)
  const axiosResponse = yield* call(() => api.patch(url, data, config))
  return wrappedResponse(axiosResponse)
}

function wrappedResponse(axiosResponse: AxiosResponse) {
  const apiResponse = axiosResponse as ApiResponse
  apiResponse.success = isSuccess(axiosResponse)
  if (!apiResponse.success) {
    apiResponse.error = apiResponse.data.message || apiResponse.statusText || 'Unknown error'
  }
  return apiResponse
}

function isSuccess(axiosResponse: AxiosResponse) {
  const code = axiosResponse.status
  const isRedirect = axiosResponse.request.responseURL.includes('sign_in')

  return !isRedirect && code >= 200 && code < 300
}
