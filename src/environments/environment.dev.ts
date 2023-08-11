
interface Environment {
  VIDEOSDK_API_KEY: string,
  HOST: string,
  PORT: number,
  API_URL: string,
  STORAGE_ENDPOINT: string,
  ENV: 'production' | 'development'
}

export const environment: Environment = {
  VIDEOSDK_API_KEY: 'f2927c6b-6d7c-4e43-bea2-213cfae82703',
  HOST: 'http://127.0.0.1',
  PORT: 8087,
  STORAGE_ENDPOINT: 'fileuploads',
  API_URL: 'http://127.0.0.1:8087/api',
  ENV: 'development'
}; devicePixelRatio