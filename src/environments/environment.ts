// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
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
  HOST: 'http://102.219.178.23',
  STORAGE_ENDPOINT: 'fileuploads',
  PORT: 8080,
  API_URL: 'http://102.219.178.237:8080/cabinet-0.0.1-SNAPSHOT_OPHTALMO1/api',
  ENV: 'development'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
