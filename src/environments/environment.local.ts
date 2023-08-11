
interface Environment {
  VIDEOSDK_API_KEY: string,
  HOST: string,
  PORT?: number,
  API_URL: string,
  STORAGE_ENDPOINT: string,
  ENV: 'production' | 'development'
}

export const environment: Environment = {
  VIDEOSDK_API_KEY: 'f2927c6b-6d7c-4e43-bea2-213cfae82703',
  HOST: 'https://backend.altabib.co',
  STORAGE_ENDPOINT: 'fileuploads',
  API_URL: 'https://backend.altabib.co/altabib-v0.1.4-SNAPSHOT_PREPROD/api',
  ENV: 'development'
};