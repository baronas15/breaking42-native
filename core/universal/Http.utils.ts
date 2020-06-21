export type HttpApi = (
  endpoint?: string,
  method?: string,
  data?: any,
) => Promise<Response>

const authConfig = (token?: string) => {
  return token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {}
}

export const http = (domain: string) => (
  accessToken?: string,
  logging?: boolean,
): HttpApi => (
  endpoint: string = '',
  method: string = 'GET',
  data?: any,
): Promise<Response> => {
  if (logging) {
    console.info(accessToken)
  }

  try {
    return fetch(domain + endpoint, {
      method,
      body: data ? JSON.stringify(data) : undefined,
      headers: {
        ...authConfig(accessToken),
        Accept: 'application/json',
        'Content-Type': 'application/json',
      } as any,
    })
  } catch (error) {
    console.error(error)
    return Promise.resolve({ json: () => {} } as any)
  }
}
